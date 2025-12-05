import { Users, ClipboardCheck, TrendingUp, Heart, Eye } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Compromiso real",
    description: "Los trabajadores son asociados.",
  },
  {
    icon: ClipboardCheck,
    title: "Cumplimiento formal",
    description: "Seguros, cobertura laboral y normativas al día.",
  },
  {
    icon: TrendingUp,
    title: "Flexibilidad",
    description: "Escalamos equipos según la demanda.",
  },
  {
    icon: Heart,
    title: "Impacto social",
    description: "Empleo formal y desarrollo local.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Administración controlada por los propios asociados.",
  },
];

export const PorQueCooperativa = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Por qué contratar una cooperativa de trabajo?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 ${
                  index === 4 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
