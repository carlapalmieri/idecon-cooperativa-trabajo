import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5491122883051";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20gustaría%20consultar%20por%20los%20servicios%20de%20IDECON.`;

export const CTAFinal = () => {
  return (
    <section className="py-32 md:py-40 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            ¿Hablamos sobre tu proyecto?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Contanos qué necesitás y armamos una propuesta cooperativa a medida.
          </p>
          <Button variant="hero" size="xl" asChild className="btn-shine">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Enviar mensaje por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
