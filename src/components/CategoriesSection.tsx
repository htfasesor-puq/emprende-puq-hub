import { Link } from "react-router-dom";
import { 
  UtensilsCrossed, 
  Shirt, 
  Sparkles, 
  Wrench, 
  Camera, 
  GraduationCap,
  Heart,
  Home,
  ArrowRight
} from "lucide-react";

const categories = [
  { name: "Gastronomía", icon: UtensilsCrossed, count: 25, slug: "gastronomia" },
  { name: "Moda y Accesorios", icon: Shirt, count: 18, slug: "moda" },
  { name: "Belleza y Cuidado", icon: Sparkles, count: 15, slug: "belleza" },
  { name: "Servicios Técnicos", icon: Wrench, count: 22, slug: "servicios-tecnicos" },
  { name: "Fotografía y Video", icon: Camera, count: 8, slug: "fotografia" },
  { name: "Educación", icon: GraduationCap, count: 12, slug: "educacion" },
  { name: "Salud y Bienestar", icon: Heart, count: 10, slug: "salud" },
  { name: "Hogar y Decoración", icon: Home, count: 14, slug: "hogar" },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explora por Categoría
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra emprendedores organizados por rubro para que encuentres exactamente lo que necesitas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/directorio?categoria=${category.slug}`}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <category.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} emprendedores</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/directorio" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Ver todas las categorías <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
