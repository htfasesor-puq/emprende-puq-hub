import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { MapPin, Users, Heart, Target } from "lucide-react";

const NosotrosPage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Emprende PUQ</title>
        <meta name="description" content="Conoce la historia de Emprende PUQ, el directorio de emprendedores de Punta Arenas que conecta negocios locales con clientes." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-28 pb-20">
          {/* Hero */}
          <section className="container mx-auto px-4 text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                Punta Arenas, Magallanes
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Impulsando el <span className="text-gradient">emprendimiento</span> patagónico
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Somos una plataforma local que conecta emprendedores de la región de Magallanes 
              con clientes que valoran los productos y servicios de nuestra tierra.
            </p>
          </section>

          {/* Values */}
          <section className="container mx-auto px-4 mb-20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Comunidad</h3>
                <p className="text-muted-foreground">
                  Creemos en el poder de la comunidad local. Juntos somos más fuertes y podemos 
                  hacer crecer la economía de nuestra región.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent-gradient flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Pasión</h3>
                <p className="text-muted-foreground">
                  Cada emprendedor que se suma a nuestra plataforma comparte su pasión y 
                  dedicación. Valoramos el esfuerzo detrás de cada negocio.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-warm-gradient flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Impacto</h3>
                <p className="text-muted-foreground">
                  Cada compra local tiene un impacto directo en nuestra comunidad. Apoyar 
                  emprendedores es invertir en el futuro de Magallanes.
                </p>
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="container mx-auto px-4 mb-20">
            <div className="bg-muted/50 rounded-3xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  Nuestra Historia
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Emprende PUQ nació de la necesidad de visibilizar a los emprendedores de 
                    Punta Arenas y la región de Magallanes. En una zona tan alejada del centro 
                    del país, sabemos lo importante que es conectar a quienes ofrecen productos 
                    y servicios de calidad con quienes los necesitan.
                  </p>
                  <p>
                    Nuestra plataforma permite a los emprendedores mostrar sus negocios de forma 
                    profesional y accesible, mientras que los clientes pueden encontrar fácilmente 
                    lo que buscan, organizado por categorías y con toda la información de contacto 
                    necesaria.
                  </p>
                  <p>
                    Creemos que el emprendimiento local es el motor de nuestra economía y 
                    trabajamos cada día para facilitar estas conexiones que hacen crecer a 
                    nuestra comunidad.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="container mx-auto px-4">
            <div className="bg-hero-gradient rounded-3xl p-8 md:p-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                ¿Tienes un emprendimiento?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Únete a nuestra comunidad de emprendedores y comienza a conectar con clientes 
                de toda la región.
              </p>
              <a 
                href="/planes"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-xl bg-card text-foreground font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Ver Planes
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NosotrosPage;
