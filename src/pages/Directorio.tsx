import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EntrepreneurCard from "@/components/EntrepreneurCard";
import { Helmet } from "react-helmet-async";
import { Search, Filter, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Entrepreneur {
  id: string;
  business_name: string;
  category: string;
  description: string;
  phone: string | null;
  whatsapp: string | null;
  facebook: string | null;
  instagram: string | null;
  website: string | null;
  plan: "basic" | "business" | "premium";
}

const categories = [
  "Todas",
  "Gastronomía",
  "Moda y Accesorios",
  "Belleza y Cuidado",
  "Servicios Técnicos",
  "Fotografía y Video",
  "Educación",
  "Salud y Bienestar",
  "Hogar y Decoración",
];

const DirectorioPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [entrepreneurs, setEntrepreneurs] = useState<Entrepreneur[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntrepreneurs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("entrepreneurs")
        .select("id, business_name, category, description, phone, whatsapp, facebook, instagram, website, plan")
        .eq("status", "active");

      if (!error && data) {
        setEntrepreneurs(data);
      }
      setLoading(false);
    };

    fetchEntrepreneurs();
  }, []);

  const filteredEntrepreneurs = useMemo(() => {
    return entrepreneurs.filter((entrepreneur) => {
      const matchesSearch =
        entrepreneur.business_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entrepreneur.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "Todas" || entrepreneur.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, entrepreneurs]);

  return (
    <>
      <Helmet>
        <title>Directorio de Emprendedores - Emprende PUQ</title>
        <meta name="description" content="Explora el directorio de emprendedores de Punta Arenas. Encuentra productos y servicios locales organizados por categoría." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-28 pb-20">
          {/* Hero */}
          <section className="container mx-auto px-4 mb-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Directorio de <span className="text-gradient">Emprendedores</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-center">
              Encuentra los mejores productos y servicios de emprendedores locales en Punta Arenas.
            </p>
          </section>

          {/* Filters */}
          <section className="container mx-auto px-4 mb-10">
            <div className="bg-card rounded-2xl p-4 md:p-6 shadow-card border border-border">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Buscar emprendedor o servicio..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <div className="w-full md:w-64">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="h-12">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="container mx-auto px-4">
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : filteredEntrepreneurs.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-6">
                  {filteredEntrepreneurs.length} emprendedor{filteredEntrepreneurs.length !== 1 ? "es" : ""} encontrado{filteredEntrepreneurs.length !== 1 ? "s" : ""}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEntrepreneurs.map((entrepreneur) => (
                    <EntrepreneurCard
                      key={entrepreneur.id}
                      id={entrepreneur.id}
                      name={entrepreneur.business_name}
                      category={entrepreneur.category}
                      description={entrepreneur.description}
                      phone={entrepreneur.phone ?? undefined}
                      whatsapp={entrepreneur.whatsapp ?? undefined}
                      facebook={entrepreneur.facebook ?? undefined}
                      instagram={entrepreneur.instagram ?? undefined}
                      website={entrepreneur.website ?? undefined}
                      plan={entrepreneur.plan}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  No encontramos resultados
                </h3>
                <p className="text-muted-foreground">
                  Intenta con otros términos de búsqueda o categoría.
                </p>
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DirectorioPage;
