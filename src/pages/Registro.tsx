import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { toast } from "sonner";

const plans = {
  basic: { name: "Básico", price: 36000, maxChars: 150 },
  business: { name: "Business", price: 48000, maxChars: 300 },
  premium: { name: "Premium", price: 60000, maxChars: 500, maxImages: 5 },
};

const categories = [
  "Gastronomía",
  "Moda y Accesorios",
  "Belleza y Cuidado",
  "Servicios Técnicos",
  "Fotografía y Video",
  "Educación",
  "Salud y Bienestar",
  "Hogar y Decoración",
  "Otro",
];

const RegistroPage = () => {
  const [searchParams] = useSearchParams();
  const initialPlan = (searchParams.get("plan") as "basic" | "business" | "premium") || "basic";
  
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "business" | "premium">(initialPlan);
  const [formData, setFormData] = useState({
    name: "",
    rut: "",
    businessName: "",
    category: "",
    phone: "",
    whatsapp: "",
    description: "",
    facebook: "",
    instagram: "",
    website: "",
  });
  const [images, setImages] = useState<File[]>([]);

  const currentPlan = plans[selectedPlan];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && selectedPlan === "premium") {
      const newImages = Array.from(files).slice(0, 5 - images.length);
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the payment integration
    toast.success("¡Registro exitoso! Serás redirigido al pago.");
  };

  return (
    <>
      <Helmet>
        <title>Registrar mi Emprendimiento - Emprende PUQ</title>
        <meta name="description" content="Registra tu emprendimiento en el directorio de Emprende PUQ y conecta con clientes en Punta Arenas." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Steps Indicator */}
            <div className="flex items-center justify-center gap-2 mb-10">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step >= s 
                        ? "bg-hero-gradient text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s ? <Check className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`w-16 h-1 mx-2 rounded ${step > s ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-card border border-border">
              {step === 1 && (
                <div className="animate-fade-up">
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Selecciona tu Plan
                  </h1>
                  <p className="text-muted-foreground mb-8">
                    Elige el plan que mejor se adapte a tu emprendimiento.
                  </p>

                  <div className="grid gap-4">
                    {(Object.entries(plans) as [keyof typeof plans, typeof plans[keyof typeof plans]][]).map(([key, plan]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedPlan(key)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedPlan === key 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-display font-bold text-foreground">{plan.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Hasta {plan.maxChars} caracteres en tu descripción
                              {key === "premium" && " + 5 fotos"}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-display font-bold text-foreground">
                              ${plan.price.toLocaleString("es-CL")}
                            </p>
                            <p className="text-xs text-muted-foreground">+ IVA/año</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button variant="ghost" asChild>
                      <Link to="/planes">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Ver detalles de planes
                      </Link>
                    </Button>
                    <Button variant="hero" onClick={() => setStep(2)}>
                      Continuar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-fade-up">
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Datos de tu Emprendimiento
                  </h1>
                  <p className="text-muted-foreground mb-8">
                    Completa la información de tu negocio.
                  </p>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Juan Pérez"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rut">RUT *</Label>
                        <Input 
                          id="rut" 
                          name="rut" 
                          value={formData.rut}
                          onChange={handleInputChange}
                          placeholder="12.345.678-9"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Nombre del Emprendimiento *</Label>
                        <Input 
                          id="businessName" 
                          name="businessName" 
                          value={formData.businessName}
                          onChange={handleInputChange}
                          placeholder="Mi Emprendimiento"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Categoría / Giro *</Label>
                        <Select 
                          value={formData.category} 
                          onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono *</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+56 9 1234 5678"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp *</Label>
                        <Input 
                          id="whatsapp" 
                          name="whatsapp" 
                          type="tel"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          placeholder="+56 9 1234 5678"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">
                        Descripción de productos/servicios * 
                        <span className="text-muted-foreground font-normal">
                          ({formData.description.length}/{currentPlan.maxChars} caracteres)
                        </span>
                      </Label>
                      <Textarea 
                        id="description" 
                        name="description" 
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Describe lo que ofreces..."
                        maxLength={currentPlan.maxChars}
                        rows={4}
                        required
                      />
                    </div>

                    {(selectedPlan === "business" || selectedPlan === "premium") && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="facebook">Facebook (opcional)</Label>
                          <Input 
                            id="facebook" 
                            name="facebook" 
                            value={formData.facebook}
                            onChange={handleInputChange}
                            placeholder="https://facebook.com/tu-pagina"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="instagram">Instagram (opcional)</Label>
                          <Input 
                            id="instagram" 
                            name="instagram" 
                            value={formData.instagram}
                            onChange={handleInputChange}
                            placeholder="https://instagram.com/tu-cuenta"
                          />
                        </div>
                      </div>
                    )}

                    {selectedPlan === "premium" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="website">Página web (opcional)</Label>
                          <Input 
                            id="website" 
                            name="website" 
                            value={formData.website}
                            onChange={handleInputChange}
                            placeholder="https://tu-sitio.cl"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Fotografías (hasta 5)</Label>
                          <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
                            <input
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={handleImageUpload}
                              className="hidden"
                              id="images"
                            />
                            <label 
                              htmlFor="images"
                              className="cursor-pointer flex flex-col items-center gap-2"
                            >
                              <Upload className="w-8 h-8 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                Haz clic para subir imágenes
                              </span>
                            </label>
                            {images.length > 0 && (
                              <div className="mt-4 flex gap-2 justify-center flex-wrap">
                                {images.map((img, i) => (
                                  <div key={i} className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground">
                                    {img.name.slice(0, 8)}...
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </form>

                  <div className="mt-8 flex justify-between">
                    <Button variant="ghost" onClick={() => setStep(1)}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Anterior
                    </Button>
                    <Button variant="hero" onClick={() => setStep(3)}>
                      Continuar al Pago
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-fade-up">
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Confirmar y Pagar
                  </h1>
                  <p className="text-muted-foreground mb-8">
                    Revisa tu información y procede al pago.
                  </p>

                  <div className="bg-muted/50 rounded-xl p-6 mb-8">
                    <h3 className="font-display font-bold text-foreground mb-4">Resumen</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Plan</span>
                        <span className="font-medium">{currentPlan.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Emprendimiento</span>
                        <span className="font-medium">{formData.businessName || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Categoría</span>
                        <span className="font-medium">{formData.category || "—"}</span>
                      </div>
                      <div className="border-t border-border my-3" />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">${currentPlan.price.toLocaleString("es-CL")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">IVA (19%)</span>
                        <span className="font-medium">${Math.round(currentPlan.price * 0.19).toLocaleString("es-CL")}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-gradient">${Math.round(currentPlan.price * 1.19).toLocaleString("es-CL")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button variant="ghost" onClick={() => setStep(2)}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Anterior
                    </Button>
                    <Button variant="hero" size="lg" onClick={handleSubmit}>
                      Pagar con Tarjeta
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RegistroPage;
