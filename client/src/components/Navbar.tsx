import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-chart-2 rounded-md flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rotate-45"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">Rohi Homecare</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Compassionate Care, Right at Home</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button
                  variant={location === link.href ? "secondary" : "ghost"}
                  size="sm"
                  className="hover-elevate"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a href="tel:0111726508" data-testid="link-call">
              <Button variant="outline" size="sm" className="hover-elevate">
                <Phone className="w-4 h-4 mr-2" />
                0111 726 508
              </Button>
            </a>
            <Link href="/contact" data-testid="button-get-started">
              <Button size="sm" className="bg-primary hover-elevate active-elevate-2">
                Get Started
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate active-elevate-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Button
                    variant={location === link.href ? "secondary" : "ghost"}
                    className="w-full justify-start hover-elevate"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <a href="tel:0111726508" className="mt-2" data-testid="mobile-link-call">
                <Button variant="outline" className="w-full hover-elevate">
                  <Phone className="w-4 h-4 mr-2" />
                  0111 726 508
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
