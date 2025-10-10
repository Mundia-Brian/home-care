import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch for a free consultation. We're here to help 24/7
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Visit Our Office</h3>
                  <p className="text-muted-foreground">
                    Macjo Building, Off Magadi Road<br />
                    Ongata Rongai, Kenya
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <a href="tel:0111726508" className="text-muted-foreground hover:text-foreground" data-testid="contact-phone">
                    0111 726 508
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a href="mailto:info@rohihomecare.co.ke" className="text-muted-foreground hover:text-foreground" data-testid="contact-email">
                    info@rohihomecare.co.ke
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We'll respond within 2 hours</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Emergency calls only</p>
                    <p className="text-sm text-primary mt-2">24/7 Care Services Available</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-whatsapp text-white">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">WhatsApp Us</h3>
                  <p className="mb-4 opacity-90">
                    For quick responses, chat with us on WhatsApp
                  </p>
                  <a href="https://wa.me/254111726508" target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-contact">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm hover-elevate active-elevate-2">
                      Start WhatsApp Chat
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Find Us on the Map</h2>
            <p className="text-center text-muted-foreground mb-6">
              Conveniently located in Ongata Rongai for quick access across Nairobi
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive Map - Ongata Rongai, Kenya</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
