import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlanCard from "@/components/PlanCard";
import { Helmet } from "react-helmet-async";
import { Shield, Zap, HeadphonesIcon } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: 36000,
    description: "Ideal para comenzar",
    variant: "basic" as const,
    features: [
      "Tu nombre de emprendimiento visible",
      "Reseña de hasta 150 caracteres",
      "Teléfono de contacto",
      "Enlace a WhatsApp",
      "Listado en directorio por categoría",
    ],
  },
  {
    name: "Business",
    price: 48000,
    description: "Para emprendedores en crecimiento",
    variant: "business" as const,
    recommended: true,
    features: [
      "Todo lo del plan Básico",
      "Reseña extendida de 300 caracteres",
      "Enlace a Facebook",
      "Enlace a Instagram",
      "Destacado en tu categoría",
      "Badge de verificado",
    ],
  },
  {
    name: "Premium",
    price: 60000,
    description: "Máxima visibilidad",
    variant: "premium" as const,
    features: [
      "Todo lo del plan Business",
      "Reseña completa de 500 caracteres",
      "Hasta 5 fotografías de productos",
      "Enlace a página web",
      "Posición destacada en búsquedas",
      "Soporte prioritario",
    ],
  },
];

const PlanesPage = () => {
  return (
    <>
      <Helmet>
        <title>Planes y Precios - Emprende PUQ</title>
        <meta name="description" content="Conoce nuestros planes para emprendedores. Desde $36.000 anuales, registra tu negocio y conecta con clientes en Punta Arenas." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-28 pb-20">
          {/* Hero */}
          <section className="container mx-auto px-4 text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Elige tu <span className="text-gradient">Plan</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Selecciona el plan que mejor se adapte a tu emprendimiento. Todos incluyen factura y pago seguro con tarjeta.
            </p>
          </section>

          {/* Plans Grid */}
          <section className="container mx-auto px-4 mb-20">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
              {plans.map((plan, index) => (
                <div key={plan.variant} style={{ animationDelay: `${index * 0.1}s` }}>
                  <PlanCard {...plan} />
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="container mx-auto px-4">
            <div className="bg-muted/50 rounded-3xl p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
                Todos los planes incluyen
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">Pago Seguro</h3>
                  <p className="text-sm text-muted-foreground">
                    Paga con tarjeta de débito o crédito de forma segura. Emitimos factura electrónica.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent-gradient flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">Activación Inmediata</h3>
                  <p className="text-sm text-muted-foreground">
                    Tu perfil estará visible en el directorio inmediatamente después del pago.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-warm-gradient flex items-center justify-center mx-auto mb-4">
                    <HeadphonesIcon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">Soporte Incluido</h3>
                  <p className="text-sm text-muted-foreground">
                    Te ayudamos a configurar tu perfil y resolver cualquier duda que tengas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PlanesPage;
