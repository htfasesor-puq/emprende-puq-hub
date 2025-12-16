import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center shadow-card group-hover:shadow-glow transition-shadow duration-300">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-foreground leading-tight">
                Emprende
              </span>
              <span className="font-display font-bold text-sm text-gradient leading-tight">
                PUQ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/directorio" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Directorio
            </Link>
            <Link to="/planes" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Planes
            </Link>
            <Link to="/nosotros" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Nosotros
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/registro">Soy Emprendedor</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/directorio">Buscar Servicios</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col gap-3">
              <Link 
                to="/directorio" 
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Directorio
              </Link>
              <Link 
                to="/planes" 
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Planes
              </Link>
              <Link 
                to="/nosotros" 
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <div className="flex flex-col gap-2 pt-3 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/registro" onClick={() => setIsMenuOpen(false)}>Soy Emprendedor</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/directorio" onClick={() => setIsMenuOpen(false)}>Buscar Servicios</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
