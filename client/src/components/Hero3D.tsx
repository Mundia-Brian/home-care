import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Hero3D() {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-primary via-chart-1 to-chart-2 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm" data-testid="badge-licensed">Licensed by NCK</span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm" data-testid="badge-available">24/7 Available</span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm" data-testid="badge-location">Ongata Rongai Based</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Expert Medical Care in the Comfort of Your Home
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Professional nursing, caregiving & medical supplies across Nairobi & beyond
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" data-testid="button-request-assessment">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 border-white hover-elevate active-elevate-2 w-full sm:w-auto">
                  Request Free Assessment
                </Button>
              </Link>
              <a href="https://wa.me/254111726508" target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm hover-elevate active-elevate-2 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us Now
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white/90" />
                <span className="text-sm text-white/90">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white/90" />
                <span className="text-sm text-white/90">Qualified Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white/90" />
                <span className="text-sm text-white/90">Affordable Pricing</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 animate-rotate-slow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-lg rotate-45 border-4 border-white/40"></div>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-4 bg-white/30 backdrop-blur-sm rounded-full"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center rotate-90">
                <div className="w-32 h-4 bg-white/30 backdrop-blur-sm rounded-full"></div>
              </div>

              <div className="absolute -top-10 -right-10 animate-float">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Phone className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
