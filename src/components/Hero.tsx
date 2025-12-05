import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowDown } from "lucide-react";
import { WhatsappIcon } from "./WhatsappIcon";

const WHATSAPP_NUMBER = "5491122883051";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20gustaría%20consultar%20por%20los%20servicios%20de%20IDECON.`;

const highlights = [
  "Más de 10 años de experiencia en servicios y obras",
  "Cuadrillas propias con supervisión en campo",
  "Transparencia y compromiso cooperativo",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in">
            Cooperativa de trabajo para empresas y organismos públicos
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Desde Hurlingham, brindamos servicios laborales, mantenimiento y obras a medida
            en la Provincia de Buenos Aires, con equipos propios y gestión cooperativa.
          </p>

          <div className="flex flex-col gap-3 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#servicios">
                Ver servicios
                <ArrowDown className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="btn-shine">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon size={22} />
                Hablar con IDECON
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-sm">Conocé más</span>
          <ArrowDown className="w-5 h-5 animate-float" />
        </div>
      </div>
    </section>
  );
};
