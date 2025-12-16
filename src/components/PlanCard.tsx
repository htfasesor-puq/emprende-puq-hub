import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
  variant: "basic" | "business" | "premium";
}

const PlanCard = ({ name, price, description, features, recommended, variant }: PlanCardProps) => {
  const priceWithIVA = Math.round(price * 1.19);
  
  return (
    <div 
      className={cn(
        "relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border-2",
        recommended ? "border-primary scale-105 z-10" : "border-border",
        "animate-scale-in"
      )}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-hero-gradient rounded-full text-primary-foreground text-sm font-semibold flex items-center gap-1">
          <Star className="w-4 h-4" /> Recomendado
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-display font-bold text-foreground">
            ${price.toLocaleString("es-CL")}
          </span>
          <span className="text-muted-foreground text-sm">+ IVA/año</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Total: ${priceWithIVA.toLocaleString("es-CL")} anual
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
              variant === "premium" ? "bg-accent-gradient" : variant === "business" ? "bg-patagonia-sky/20" : "bg-secondary"
            )}>
              <Check className={cn(
                "w-3 h-3",
                variant === "premium" ? "text-accent-foreground" : "text-primary"
              )} />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={recommended ? "hero" : "outline"} 
        className="w-full" 
        size="lg"
        asChild
      >
        <Link to={`/registro?plan=${variant}`}>
          Comenzar Ahora
        </Link>
      </Button>
    </div>
  );
};

export default PlanCard;
