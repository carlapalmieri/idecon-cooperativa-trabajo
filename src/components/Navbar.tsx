import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { WhatsappIcon } from "./WhatsappIcon";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "5491122883051";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20gustaría%20consultar%20por%20los%20servicios%20de%20IDECON.`;

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sectores", label: "Sectores" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span
            className={`font-display text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
             <img src="/idecon-logo-dark.webp" alt="IDECON" className={cn("h-8 w-auto", isScrolled ? "opacity-0 transition-opacity duration-300" : "opacity-100")} />
             <img src="/idecon-logo-light.webp" alt="IDECON" className={cn("h-8 w-auto -mt-8", isScrolled ? "opacity-100" : "opacity-0 transition-opacity duration-300")} />
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="accent" size="default" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="w-4 h-4" size={20} />
              Contactar
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elegant animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="accent" size="lg" asChild className="mt-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="w-4 h-4" size={20} />
                Contactar
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
