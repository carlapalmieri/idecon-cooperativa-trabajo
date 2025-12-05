import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { WhatsappIcon } from "./WhatsappIcon";

const WHATSAPP_NUMBER = "5491122883051";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 11 6302 0552",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+54 9 11 2288-3051",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a viernes de 9 a 17 hs.",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Cañada de Gómez 701 Of. 2 – Hurlingham (1686) – Pcia. Bs. As. – Argentina",
  },
];

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hola, mi nombre es ${formData.nombre}${formData.empresa ? ` de ${formData.empresa}` : ""}.\n\nServicio de interés: ${formData.servicio}\n\nMensaje: ${formData.mensaje}\n\nContacto:\n- Email: ${formData.correo}\n- Tel: ${formData.telefono}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contacto
          </h2>
          <p className="text-muted-foreground text-lg">
            Escribinos y nos comunicaremos a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-64 bg-card rounded-xl border border-border/50 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0!2d-58.64!3d-34.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzI0LjAiUyA1OMKwMzgnMjQuMCJX!5e0!3m2!1sen!2sar!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación IDECON"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-foreground mb-2">
                    Correo *
                  </label>
                  <Input
                    id="correo"
                    name="correo"
                    type="email"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+54 9 11 ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-foreground mb-2">
                  Servicio de interés
                </label>
                <Input
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  placeholder="Ej: Mantenimiento, Limpieza, Obras..."
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Contanos sobre tu proyecto o consulta..."
                />
              </div>

              <Button variant="accent" size="lg" type="submit" className="w-full btn-shine">
                <WhatsappIcon size={22} />
                Enviar por WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
