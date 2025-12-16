import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Emprende PUQ - Directorio de Emprendedores de Punta Arenas</title>
        <meta name="description" content="Encuentra los mejores productos y servicios de emprendedores locales en Punta Arenas, Patagonia chilena. Conectamos emprendedores con clientes." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <CategoriesSection />
          
          {/* Featured Entrepreneurs */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Emprendedores Destacados
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Conoce algunos de los emprendedores que confían en nosotros para hacer crecer sus negocios.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Sample Cards - These would come from database */}
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center mb-4">
                    <span className="text-xl text-primary-foreground">🍰</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">Dulces del Sur</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Repostería artesanal con sabores patagónicos. Tortas, kuchen y más para tus celebraciones.
                  </p>
                  <span className="text-xs text-primary font-medium">Gastronomía</span>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-4">
                    <span className="text-xl text-accent-foreground">🧶</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">Lanas Australes</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Tejidos a mano con lana de oveja patagónica. Chalecos, bufandas y accesorios únicos.
                  </p>
                  <span className="text-xs text-accent font-medium">Moda y Accesorios</span>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-warm-gradient flex items-center justify-center mb-4">
                    <span className="text-xl text-primary-foreground">📸</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">Patagonia Shots</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Fotografía profesional para eventos, retratos y productos. Capturamos momentos únicos.
                  </p>
                  <span className="text-xs text-patagonia-sunset font-medium">Fotografía y Video</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-hero-gradient">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                ¿Listo para hacer crecer tu negocio?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Únete a nuestra comunidad de emprendedores y conecta con miles de clientes potenciales en la región.
              </p>
              <a 
                href="/planes"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-xl bg-card text-foreground font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Ver Planes y Precios
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
