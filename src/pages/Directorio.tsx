import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EntrepreneurCard from "@/components/EntrepreneurCard";
import { Helmet } from "react-helmet-async";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample data - would come from database
const sampleEntrepreneurs = [
  {
    id: "1",
    name: "Dulces del Sur",
    category: "Gastronomía",
    description: "Repostería artesanal con sabores patagónicos. Tortas, kuchen, galletas y postres para todo tipo de celebraciones. Hacemos pedidos personalizados.",
    phone: "+56912345678",
    whatsapp: "+56912345678",
    plan: "basic" as const,
  },
  {
    id: "2",
    name: "Lanas Australes",
    category: "Moda y Accesorios",
    description: "Tejidos a mano con lana de oveja patagónica 100% natural. Chalecos, bufandas, gorros y accesorios únicos hechos con amor. Cada pieza es única y lleva el calor del sur.",
    phone: "+56987654321",
    whatsapp: "+56987654321",
    facebook: "https://facebook.com/lanasaustrales",
    instagram: "https://instagram.com/lanasaustrales",
    plan: "business" as const,
  },
  {
    id: "3",
    name: "Patagonia Shots",
    category: "Fotografía y Video",
    description: "Fotografía profesional para eventos, retratos, productos y paisajes. Capturamos los momentos más importantes de tu vida con la belleza única de la Patagonia como telón de fondo. Servicio de edición y entrega digital incluido.",
    phone: "+56911223344",
    whatsapp: "+56911223344",
    facebook: "https://facebook.com/patagoniashots",
    instagram: "https://instagram.com/patagoniashots",
    website: "https://patagoniashots.cl",
    images: [
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop",
    ],
    plan: "premium" as const,
  },
  {
    id: "4",
    name: "Tech Magallanes",
    category: "Servicios Técnicos",
    description: "Reparación de computadores, notebooks y celulares. Servicio técnico con garantía.",
    phone: "+56955667788",
    whatsapp: "+56955667788",
    plan: "basic" as const,
  },
  {
    id: "5",
    name: "Spa Glaciar",
    category: "Salud y Bienestar",
    description: "Centro de masajes y tratamientos relajantes inspirados en la naturaleza patagónica. Masajes descontracturantes, piedras calientes, aromaterapia y más. Reserva tu hora de relax.",
    phone: "+56944556677",
    whatsapp: "+56944556677",
    facebook: "https://facebook.com/spaglaciar",
    instagram: "https://instagram.com/spaglaciar",
    plan: "business" as const,
  },
  {
    id: "6",
    name: "Sabores Magallánicos",
    category: "Gastronomía",
    description: "Conservas artesanales con productos de la región. Mermeladas de calafate, ruibarbo, murtilla y más. Ideales para regalar o disfrutar en casa. Todos nuestros productos son 100% naturales, sin preservantes ni colorantes artificiales. Envíos a todo Chile.",
    phone: "+56933445566",
    whatsapp: "+56933445566",
    facebook: "https://facebook.com/saboresmagallanicos",
    instagram: "https://instagram.com/saboresmagallanicos",
    website: "https://saboresmagallanicos.cl",
    images: [
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1612257416648-ee7a6c533e4f?w=400&h=300&fit=crop",
    ],
    plan: "premium" as const,
  },
];

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

  const filteredEntrepreneurs = useMemo(() => {
    return sampleEntrepreneurs.filter((entrepreneur) => {
      const matchesSearch = 
        entrepreneur.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entrepreneur.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "Todas" || entrepreneur.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

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
            {filteredEntrepreneurs.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-6">
                  {filteredEntrepreneurs.length} emprendedor{filteredEntrepreneurs.length !== 1 ? "es" : ""} encontrado{filteredEntrepreneurs.length !== 1 ? "s" : ""}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEntrepreneurs.map((entrepreneur) => (
                    <EntrepreneurCard key={entrepreneur.id} {...entrepreneur} />
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
