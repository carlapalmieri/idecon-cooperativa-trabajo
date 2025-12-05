import { Heart, Award, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compromiso",
    description: "Acompañamos cada proyecto desde la planificación hasta la ejecución.",
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Aplicamos procedimientos claros y controles permanentes.",
  },
  {
    icon: Shield,
    title: "Responsabilidad",
    description: "Cumplimos con normativas laborales y de seguridad.",
  },
  {
    icon: Users,
    title: "Desarrollo local",
    description: "Promovemos empleo genuino y trabajo formal en nuestra región.",
  },
];

export const Nosotros = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nosotros
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            IDECON Cooperativa de Trabajo Ltda. es una organización de la economía social con base
            en Hurlingham. Brindamos servicios laborales y desarrollamos proyectos para empresas
            privadas, comercios, consorcios y organismos públicos.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Trabajamos con equipos propios, capacitados y registrados. Nos enfocamos en ofrecer
            respuestas ágiles, trazabilidad de cada servicio y relaciones sostenibles con nuestros
            clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
