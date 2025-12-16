import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, Search, ArrowRight, Users, TrendingUp, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-patagonia-sky/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-patagonia-forest/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-secondary-foreground">
              Directorio de Emprendedores de Punta Arenas
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Conectamos{" "}
            <span className="text-gradient">emprendedores</span>
            <br />
            con clientes
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Encuentra los mejores productos y servicios de la Patagonia o registra tu emprendimiento 
            y haz crecer tu negocio con nosotros.
          </p>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {/* Emprendedor Card */}
            <Link 
              to="/planes" 
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30 text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Store className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Soy Emprendedor</h3>
              <p className="text-muted-foreground mb-4">
                Registra tu negocio y muestra tus productos o servicios a miles de clientes potenciales.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Ver Planes <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Cliente Card */}
            <Link 
              to="/directorio" 
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30 text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Busco Productos/Servicios</h3>
              <p className="text-muted-foreground mb-4">
                Explora nuestro directorio y encuentra lo que necesitas de emprendedores locales.
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Explorar Directorio <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <p className="font-display text-2xl md:text-3xl font-bold text-foreground">100+</p>
            <p className="text-sm text-muted-foreground">Emprendedores</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <p className="font-display text-2xl md:text-3xl font-bold text-foreground">50+</p>
            <p className="text-sm text-muted-foreground">Categorías</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-patagonia-earth" />
            </div>
            <p className="font-display text-2xl md:text-3xl font-bold text-foreground">100%</p>
            <p className="text-sm text-muted-foreground">Verificados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
