import { WhatsappIcon } from "./WhatsappIcon";

const WHATSAPP_NUMBER = "5491122883051";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20gustaría%20consultar%20por%20los%20servicios%20de%20IDECON.`;

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 btn-shine-round"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsappIcon className="w-8 h-8 text-white" />
    </a>
  );
};
