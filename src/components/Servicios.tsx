import { Button } from "@/components/ui/button";
import { Users, Wrench, Building, ChevronRight } from "lucide-react";
import { WhatsappIcon } from "./WhatsappIcon";

const WHATSAPP_NUMBER = "5491122883051";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20gustaría%20consultar%20por%20los%20servicios%20de%20IDECON.`;

const serviceCategories = [
  {
    icon: Users,
    title: "Provisión de Personal y Servicios Generales",
    description: "Cuadrillas de trabajo cooperativo con supervisión y seguimiento constante.",
    services: [
      "Personal para mantenimiento de edificios",
      "Servicios de limpieza en oficinas, comercios y depósitos",
      "Operarios de logística interna y movimiento de cargas",
      "Auxiliares de servicios generales",
    ],
  },
  {
    icon: Wrench,
    title: "Mantenimiento Integral y Obras Menores",
    description: "Mantenimiento preventivo y correctivo, con equipos propios.",
    services: [
      "Mantenimiento de espacios verdes",
      "Reparaciones de albañilería, pintura y herrería",
      "Refacciones de frentes y veredas",
      "Puesta en valor de edificios",
    ],
  },
  {
    icon: Building,
    title: "Proyectos Especiales",
    description: "Participación en licitaciones y convenios con municipios y organismos públicos.",
    services: [
      "Acondicionamiento de centros comerciales a cielo abierto",
      "Obras de mejora urbana",
      "Adecuación de locales para programas comunitarios",
    ],
  },
];

export const Servicios = () => {
  return (
    <section id="servicios" className="py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Servicios
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos soluciones integrales para empresas y organismos públicos, adaptadas a las
            necesidades de cada proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50 flex flex-col"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <category.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {category.title}
              </h3>

              <p className="text-muted-foreground mb-6">{category.description}</p>

              <ul className="space-y-3 mt-auto">
                {category.services.map((service, sIndex) => (
                  <li key={sIndex} className="flex items-start gap-2 text-foreground">
                    <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" asChild className="btn-shine">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon size={22} />
              Consultar por servicios
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
