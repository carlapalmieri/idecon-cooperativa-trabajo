import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Nosotros } from "@/components/Nosotros";
import { Servicios } from "@/components/Servicios";
import { Sectores } from "@/components/Sectores";
import { Proyectos } from "@/components/Proyectos";
import { PorQueCooperativa } from "@/components/PorQueCooperativa";
import { ComoTrabajamos } from "@/components/ComoTrabajamos";
import { CTAFinal } from "@/components/CTAFinal";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Sectores />
        <Proyectos />
        <PorQueCooperativa />
        <ComoTrabajamos />
        <CTAFinal />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
