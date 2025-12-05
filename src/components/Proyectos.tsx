import { MapPin, Building, Truck } from "lucide-react";

const projects = [
  {
    icon: MapPin,
    title: "Puesta en valor de centro comercial barrial",
    client: "Municipio de la Provincia de Buenos Aires",
    description:
      "Reparación de veredas, pintura de frentes, señalización y ordenamiento de áreas comunes.",
  },
  {
    icon: Building,
    title: "Mantenimiento integral de edificio administrativo",
    client: "Organismo público provincial",
    description: "Servicios de limpieza, mantenimiento y reparaciones menores.",
  },
  {
    icon: Truck,
    title: "Servicios generales para empresa logística",
    client: "Empresa privada del sector transporte",
    description: "Provisión de personal para orden, tareas operativas y mantenimiento del depósito.",
  },
];

export const Proyectos = () => {
  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Algunos proyectos realizados
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-primary/40 group-hover:text-accent/60 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <span className="inline-block text-sm font-medium text-accent mb-2">
                  {project.client}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
