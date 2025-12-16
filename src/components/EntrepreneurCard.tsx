import { Phone, MessageCircle, Facebook, Instagram, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EntrepreneurCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  phone?: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  website?: string;
  images?: string[];
  plan: "basic" | "business" | "premium";
}

const planBadgeStyles = {
  basic: "bg-secondary text-secondary-foreground",
  business: "bg-patagonia-sky/20 text-patagonia-deep border-patagonia-sky/30",
  premium: "bg-accent-gradient text-accent-foreground border-none",
};

const EntrepreneurCard = ({
  name,
  category,
  description,
  phone,
  whatsapp,
  facebook,
  instagram,
  website,
  images,
  plan,
}: EntrepreneurCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group">
      {/* Images (only for premium) */}
      {plan === "premium" && images && images.length > 0 && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={images[0]} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-foreground/80 text-primary-foreground text-xs px-2 py-1 rounded-full">
              +{images.length - 1} fotos
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-3 h-3" />
              Punta Arenas
            </div>
          </div>
          <Badge className={planBadgeStyles[plan]} variant="outline">
            {plan === "basic" ? "Básico" : plan === "business" ? "Business" : "Premium"}
          </Badge>
        </div>

        {/* Category */}
        <Badge variant="secondary" className="mb-3">
          {category}
        </Badge>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        {/* Contact Options */}
        <div className="flex flex-wrap gap-2">
          {phone && (
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${phone}`}>
                <Phone className="w-4 h-4" />
                Llamar
              </a>
            </Button>
          )}
          
          {whatsapp && (
            <Button variant="accent" size="sm" asChild>
              <a 
                href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          )}
          
          {(plan === "business" || plan === "premium") && facebook && (
            <Button variant="ghost" size="icon" asChild>
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-4 h-4" />
              </a>
            </Button>
          )}
          
          {(plan === "business" || plan === "premium") && instagram && (
            <Button variant="ghost" size="icon" asChild>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4" />
              </a>
            </Button>
          )}
          
          {plan === "premium" && website && (
            <Button variant="ghost" size="icon" asChild>
              <a href={website} target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurCard;
