import Hero3D from "@/components/Hero3D";
import StatsCounter from "@/components/StatsCounter";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Stethoscope, Package, Heart, CheckCircle, ArrowRight } from "lucide-react";
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
