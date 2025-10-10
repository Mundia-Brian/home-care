import { useState } from "react";
import PricingCard from "@/components/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, Dumbbell, Package, Utensils, Brain, 
  UserCheck, Stethoscope, FlaskConical, HandHeart, Ambulance,
  Accessibility, Bed, Wind, Heart, Footprints, ShowerHead
} from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const [billingPeriod, setBillingPeriod] = useState<"daily" | "monthly">("daily");

  const carePlans = [
    {
      title: "BRONZE PLAN",
      subtitle: "Basic Care",
      price: billingPeriod === "daily" ? "1,500" : "40,500",
      period: billingPeriod === "daily" ? "day" : "month",
      tier: "bronze",
      features: [
        "Trained caregiver (not medically qualified)",
        "Basic daily living assistance",
        "Light meal preparation",
        "Companionship & monitoring",
        "12-hour shifts available",
        "Weekly supervisor check-ins"
      ]
    },
    {
      title: "SILVER PLAN",
      subtitle: "Standard Care",
      price: billingPeriod === "daily" ? "2,500" : "67,500",
      period: billingPeriod === "daily" ? "day" : "month",
      tier: "silver",
      popular: true,
      features: [
        "Experienced caregiver",
        "Daily health monitoring",
        "Meal preparation",
        "Light housekeeping",
        "24/7 supervision support",
        "Weekly progress reports"
      ]
    },
    {
      title: "GOLD PLAN",
      subtitle: "Nursing Care",
      price: billingPeriod === "daily" ? "4,500" : "121,500",
      period: billingPeriod === "daily" ? "day" : "month",
      tier: "gold",
      features: [
        "Licensed professional nurse",
        "Medical care & monitoring",
        "Medication management",
        "Vital signs tracking",
        "24/7 medical support",
        "Daily detailed health reports",
        "Doctor coordination included"
      ]
    }
  ];

  const specializedServices = [
    { icon: Activity, name: "Physiotherapy at Home", description: "Professional rehabilitation & mobility therapy" },
    { icon: Dumbbell, name: "Occupational Therapy", description: "Daily living skills & independence training" },
    { icon: Package, name: "Medical Equipment Rental", description: "Quality equipment with delivery & setup" },
    { icon: Utensils, name: "Nutrition Consultation", description: "Dietary planning & meal guidance" },
    { icon: Brain, name: "Professional Counseling", description: "Mental health & emotional support" },
    { icon: UserCheck, name: "Doctor Home Visits", description: "Medical consultations at home" },
    { icon: Stethoscope, name: "Clinical Officer Visits", description: "Professional medical assessment" },
    { icon: FlaskConical, name: "Lab Sample Collection", description: "Home-based sample collection service" },
    { icon: HandHeart, name: "Professional Massage", description: "Therapeutic massage services" },
    { icon: Ambulance, name: "Ambulance Services", description: "Emergency & non-emergency transport" }
  ];

  const medicalSupplies = [
    { icon: Accessibility, name: "Wheelchairs", type: "Rent/Buy" },
    { icon: Bed, name: "Hospital Beds", type: "Rent/Buy" },
    { icon: Wind, name: "Oxygen Equipment", type: "Rent/Buy" },
    { icon: Heart, name: "Blood Pressure Monitors", type: "Buy" },
    { icon: Activity, name: "Glucometers", type: "Buy" },
    { icon: Footprints, name: "Walking Aids", type: "Rent/Buy" },
    { icon: ShowerHead, name: "Toileting Aids", type: "Buy" },
    { icon: Package, name: "Personal Care Items", type: "Buy" }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>

        <Tabs defaultValue="care-plans" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="care-plans" data-testid="tab-care-plans">Care Plans</TabsTrigger>
            <TabsTrigger value="specialized" data-testid="tab-specialized">Specialized Services</TabsTrigger>
            <TabsTrigger value="supplies" data-testid="tab-supplies">Medical Supplies</TabsTrigger>
          </TabsList>

          <TabsContent value="care-plans" className="animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-full">
                <Button
                  size="sm"
                  variant={billingPeriod === "daily" ? "default" : "ghost"}
                  onClick={() => setBillingPeriod("daily")}
                  className="rounded-full hover-elevate active-elevate-2"
                  data-testid="button-daily"
                >
                  Daily
                </Button>
                <Button
                  size="sm"
                  variant={billingPeriod === "monthly" ? "default" : "ghost"}
                  onClick={() => setBillingPeriod("monthly")}
                  className="rounded-full hover-elevate active-elevate-2"
                  data-testid="button-monthly"
                >
                  Monthly
                  <Badge className="ml-2 bg-chart-3">Save 10%</Badge>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carePlans.map((plan, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <PricingCard {...plan} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="specialized" className="animate-fade-in">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedServices.map((service, index) => (
                <Card key={index} className="p-6 hover-elevate active-elevate-2" data-testid={`specialized-${index}`}>
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link href="/contact" data-testid={`button-request-${index}`}>
                    <Button variant="outline" size="sm" className="hover-elevate active-elevate-2">
                      Request Quote
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="supplies" className="animate-fade-in">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {medicalSupplies.map((supply, index) => (
                <Card key={index} className="p-6 hover-elevate active-elevate-2 text-center" data-testid={`supply-${index}`}>
                  <supply.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{supply.name}</h3>
                  <Badge variant="secondary" className="mb-4">{supply.type}</Badge>
                  <Link href="/contact" data-testid={`button-quote-${index}`}>
                    <Button variant="outline" size="sm" className="w-full hover-elevate active-elevate-2">
                      Get Quote
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-20 bg-card rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Care Plan?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every patient is unique. Let us create a personalized care plan that fits your specific needs and budget.
          </p>
          <Link href="/contact" data-testid="button-custom-plan">
            <Button size="lg" className="hover-elevate active-elevate-2">
              Request Custom Plan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
