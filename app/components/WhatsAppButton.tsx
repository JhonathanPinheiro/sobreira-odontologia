import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5583996370435?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-elegant transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--whatsapp)]/40"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--whatsapp)]/40" />
    </a>
  );
}

export { WHATSAPP_URL };
