import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">Emprende</span>
                <span className="font-display font-bold text-sm text-patagonia-sky leading-tight">PUQ</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70">
              El directorio de emprendedores de la Patagonia. Conectamos emprendedores con clientes.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-display font-semibold mb-4">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/directorio" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Directorio
              </Link>
              <Link to="/planes" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Planes
              </Link>
              <Link to="/registro" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Registrarse
              </Link>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:contacto@emprendepuq.cl" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contacto@emprendepuq.cl
              </a>
              <a href="tel:+56912345678" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +56 9 1234 5678
              </a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-display font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Emprende PUQ. Todos los derechos reservados. Punta Arenas, Chile.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
