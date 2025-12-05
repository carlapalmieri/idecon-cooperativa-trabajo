import { Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto text-center md:text-left">
          {/* Logo & Description */}
          <div>
          <img src="/idecon-logo-dark.webp" alt="IDECON" className="h-8 w-auto" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Cooperativa de Trabajo Ltda.
              <br />
              IF-2021-105526429-APN-CRNCYM#INAES
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Cañada de Gómez 701 Of. 2 – Hurlingham (1686)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+54 11 6302 0552</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <nav className="space-y-2 text-sm">
              <a
                href="#nosotros"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#servicios"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Servicios
              </a>
              <a
                href="#proyectos"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#contacto"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Contacto
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} IDECON. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
