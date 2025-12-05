import { Search, FileText, Calendar, Hammer, CheckSquare } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Relevamiento",
    description: "Entendemos la necesidad y evaluamos el sitio o proyecto.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Propuesta",
    description: "Enviamos alcance, tiempos y modalidad de trabajo.",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Planificación",
    description: "Asignación de cuadrillas y responsables.",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Ejecución",
    description: "Trabajo en campo con seguimiento permanente.",
  },
  {
    icon: CheckSquare,
    number: "05",
    title: "Evaluación",
    description: "Ajustes y continuidad del servicio si aplica.",
  },
];

export const ComoTrabajamos = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Cómo trabajamos
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number Badge */}
                <div className="flex justify-center mb-2">
                  <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    {step.number.slice(-1)}
                  </span>
                </div>

                {/* Icon Circle */}
                <div className="mx-auto mb-6">
                  <div className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-card group-hover:border-accent group-hover:shadow-elegant transition-all duration-300 mx-auto">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
