import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Footer() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const handleContactMethod = (method: string) => {
    switch (method) {
      case 'email':
        window.open('mailto:brian@web-designs.store', '_blank');
        break;
      case 'website':
        window.open('https://web-designs.store', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/254728817722', '_blank');
        break;
    }
    setIsContactDialogOpen(false);
  };

  return (
    <footer className="bg-card border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.jpg" 
                alt="Rohi Homecare Logo" 
                className="w-10 h-10 rounded-lg object-cover shadow-md"
              />
              <span className="text-lg font-bold">Rohi Homecare</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Compassionate Care, Right at Home. Professional nursing and caregiving services across Nairobi.
            </p>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/p/Rohi-Homecare-61566627012288/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover-elevate active-elevate-2 border" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" data-testid="footer-link-services"><span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Services</span></Link></li>
              <li><Link href="/about" data-testid="footer-link-about"><span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">About Us</span></Link></li>
              <li><Link href="/how-it-works" data-testid="footer-link-how-it-works"><span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">How It Works</span></Link></li>
              <li><Link href="/contact" data-testid="footer-link-contact"><span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Home Nursing Care</li>
              <li className="text-sm text-muted-foreground">Caregiver Services</li>
              <li className="text-sm text-muted-foreground">Medical Equipment</li>
              <li className="text-sm text-muted-foreground">Physiotherapy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground">Macjo Building, Off Magadi Road, Ongata Rongai, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:0111726508" className="text-sm text-muted-foreground hover:text-foreground" data-testid="footer-phone">0111 726 508</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@rohihomecare.co.ke" className="text-sm text-muted-foreground hover:text-foreground" data-testid="footer-email">info@rohihomecare.co.ke</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Created by{" "}
            <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
              <DialogTrigger asChild>
                <button className="text-primary hover:underline cursor-pointer">
                  brian@web-designs.store
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Choose contact method:</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-3 mt-4">
                  <Button 
                    onClick={() => handleContactMethod('email')}
                    variant="outline"
                    className="justify-start"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    1. Email
                  </Button>
                  <Button 
                    onClick={() => handleContactMethod('website')}
                    variant="outline"
                    className="justify-start"
                  >
                    <span className="w-4 h-4 mr-2">🌐</span>
                    2. Website
                  </Button>
                  <Button 
                    onClick={() => handleContactMethod('whatsapp')}
                    variant="outline"
                    className="justify-start"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    3. WhatsApp (+254728817722)
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            {" "}| All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
