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

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Find Us on the Map</h2>
            <p className="text-center text-muted-foreground mb-6">
              Conveniently located at Macjo Arcade, Ongata Rongai
            </p>
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6336141296824!2d36.748114244163276!3d-1.3962948949673808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05c4e5889dfb%3A0xc50bbeb94af666ee!2sMacjo%20Arcade!5e0!3m2!1sen!2ske!4v1764923171543!5m2!1sen!2ske" 
                width="100%" 
                height="350" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Rohi Homecare Location - Macjo Arcade"
              />
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Follow Our Updates</h2>
            <p className="text-center text-muted-foreground mb-6">
              Stay connected with our latest news and health tips
            </p>
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0bPdptRd8wk8dbY3gME6KQAKhic216CpBxLKgBbu8USYWgG3Qs6ukJR8DHSm3Z8CVl%26id%3D61566627012288&show_text=true&width=500" 
                width="100%" 
                height="400" 
                style={{border: 'none', overflow: 'hidden'}} 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Rohi Homecare Facebook Post"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
