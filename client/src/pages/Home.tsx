import Hero3D from "@/components/Hero3D";
import StatsCounter from "@/components/StatsCounter";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Stethoscope, Package, Heart, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const stats = [
    { value: 15, label: "Years Combined Experience", suffix: "+" },
    { value: 500, label: "Families Served", suffix: "+" },
    { value: 50, label: "Healthcare Professionals", suffix: "+" },
    { value: 10, label: "Counties Covered", suffix: "+" },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "Home-Based Nursing Care",
      description: "Professional nursing care delivered in the comfort of your home",
      features: [
        "24/7 availability",
        "Licensed nurses",
        "Customized care plans",
        "Medical monitoring"
      ]
    },
    {
      icon: Package,
      title: "Medical Equipment & Supplies",
      description: "High-quality medical equipment for rent or purchase",
      features: [
        "Wheelchairs & hospital beds",
        "Oxygen equipment",
        "Diagnostic tools",
        "Delivery & setup included"
      ]
    },
    {
      icon: Heart,
      title: "Caregiver Services",
      description: "Compassionate caregiving for daily living assistance",
      features: [
        "Personal care assistance",
        "Meal preparation",
        "Companionship",
        "Light housekeeping"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Grace Wanjiku",
      condition: "Post-Surgery Care",
      rating: 5,
      testimonial: "The care my mother received was exceptional. The nurses were professional, compassionate, and truly made a difference in her recovery."
    },
    {
      name: "David Omondi",
      condition: "Elderly Care",
      rating: 5,
      testimonial: "Rohi Homecare has been a blessing for our family. Their caregivers treat my father with dignity and respect. Highly recommended!"
    },
    {
      name: "Sarah Njeri",
      condition: "Rehabilitation Support",
      rating: 5,
      testimonial: "Professional service from start to finish. The physiotherapist helped my husband regain mobility after his stroke. Forever grateful!"
    }
  ];

  const benefits = [
    "Licensed & certified healthcare professionals",
    "Personalized care plans tailored to your needs",
    "24/7 emergency support & monitoring",
    "Affordable pricing with flexible payment options",
    "Coverage across Nairobi & surrounding counties",
    "Regular progress updates & family communication"
  ];

  return (
    <div>
      <Hero3D />
      
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              Get in touch for personalized healthcare solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg border">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a href="tel:0111726508" className="text-primary hover:underline">0111 726 508</a>
            </div>
            <div className="p-6 rounded-lg border">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@rohihomecare.co.ke" className="text-primary hover:underline">info@rohihomecare.co.ke</a>
            </div>
            <div className="p-6 rounded-lg border">
              <svg className="w-8 h-8 text-primary mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <a href="https://wa.me/254111726508" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chat with us</a>
            </div>
          </div>
        </div>
      </section>
      
      <StatsCounter stats={stats} />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions delivered with compassion and professionalism
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" data-testid="button-view-all-services">
              <Button size="lg" className="hover-elevate active-elevate-2">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Rohi Homecare?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by hundreds of families across Kenya for quality home-based healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`benefit-${index}`}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-chart-3 flex-shrink-0 mt-0.5" />
                  <p className="text-base">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from families we've had the privilege to serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Care in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories and updates from our healthcare community
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0bPdptRd8wk8dbY3gME6KQAKhic216CpBxLKgBbu8USYWgG3Qs6ukJR8DHSm3Z8CVl%26id%3D61566627012288&show_text=true&width=500" 
                width="100%" 
                height="250" 
                style={{border: 'none', overflow: 'hidden'}} 
                scrolling="no"
                frameBorder="0"
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Rohi Homecare Care in Action"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-chart-1 to-chart-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Care Home?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Contact us today for a free consultation and personalized care assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0111726508" data-testid="button-call-cta">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 border-white hover-elevate active-elevate-2 w-full sm:w-auto">
                Call 0111 726 508
              </Button>
            </a>
            <a href="https://wa.me/254111726508" target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-cta">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm hover-elevate active-elevate-2 w-full sm:w-auto">
                WhatsApp Us
              </Button>
            </a>
            <Link href="/contact" data-testid="button-email-cta">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm hover-elevate active-elevate-2 w-full sm:w-auto">
                Email Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
