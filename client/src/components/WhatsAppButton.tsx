import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254111726508"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-pulse-glow"
      data-testid="button-whatsapp-float"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 bg-whatsapp hover:bg-whatsapp shadow-lg hover-elevate active-elevate-2"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
    </a>
  );
}
