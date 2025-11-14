import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover-elevate active-elevate-2 border" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover-elevate active-elevate-2 border" data-testid="link-twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover-elevate active-elevate-2 border" data-testid="link-instagram">
                <Instagram className="w-4 h-4" />
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
            © 2025 Rohi Healthcare Solutions LTD. All rights reserved. Licensed by NCK.
          </p>
        </div>
      </div>
    </footer>
  );
}
