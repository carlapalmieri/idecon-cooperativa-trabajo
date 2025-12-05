import { Factory, Store, Building2, GraduationCap } from "lucide-react";

const sectors = [
  {
    icon: Factory,
    title: "Empresas y parques industriales",
  },
  {
    icon: Store,
    title: "Comercios y centros comerciales",
  },
  {
    icon: Building2,
    title: "Municipios y organismos públicos",
  },
  {
    icon: GraduationCap,
    title: "Consorcios y entidades educativas",
  },
];

export const Sectores = () => {
  return (
    <section id="sectores" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Sectores donde trabajamos
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Acompañamos a organizaciones públicas y privadas en distintos ámbitos, garantizando
            calidad y compromiso en cada servicio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors duration-300">
                <sector.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold">{sector.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
