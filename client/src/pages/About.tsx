import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Target, Heart, Shield } from "lucide-react";

export default function About() {
  const timeline = [
    { year: "2020", event: "Founded in Ongata Rongai with a vision to transform home healthcare" },
    { year: "2021", event: "Expanded services to cover all of Nairobi county" },
    { year: "2022", event: "Reached milestone of 200 families served" },
    { year: "2023", event: "Obtained NCK licensing for all nursing staff" },
    { year: "2024", event: "Extended coverage to 10+ counties across Kenya" },
    { year: "2025", event: "Celebrating 500+ satisfied families and growing" }
  ];

  const values = [
    { icon: Heart, title: "Compassion", description: "Every patient deserves care delivered with empathy and kindness" },
    { icon: Shield, title: "Trust", description: "Building lasting relationships through reliability and transparency" },
    { icon: Award, title: "Excellence", description: "Maintaining highest standards in all our healthcare services" },
    { icon: Users, title: "Family-Centered", description: "Involving families in every step of the care journey" }
  ];

  const teamMembers = [
    { name: "Dr. Mary Wambui", role: "Medical Director", qualification: "MBChB, MMed (Family Medicine)" },
    { name: "Nurse Jane Akinyi", role: "Head Nurse", qualification: "BSc Nursing, NCK Licensed" },
    { name: "John Kamau", role: "Physiotherapy Lead", qualification: "BPT, 12 Years Experience" },
    { name: "Sarah Njoroge", role: "Care Coordinator", qualification: "Diploma in Healthcare Management" },
    { name: "David Otieno", role: "Senior Caregiver", qualification: "Certified Caregiver, 8 Years" },
    { name: "Grace Mwangi", role: "Occupational Therapist", qualification: "BSc OT, Pediatric Specialist" }
  ];

  const certifications = [
    "Licensed by Nursing Council of Kenya (NCK)",
    "Ministry of Health Accredited",
    "Kenya Medical Supplies Authority (KEMSA) Partner",
    "First Aid & CPR Certified Staff",
    "ISO 9001:2015 Quality Management"
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Rohi Homecare</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rohi Healthcare Solutions LTD - Your trusted partner in compassionate home-based healthcare across Kenya
          </p>
        </div>

        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Rohi Homecare began with a simple yet powerful vision: to bring professional healthcare into the comfort of Kenyan homes. We recognized that hospitals aren't always the best place for recovery and that many patients thrive better in familiar surroundings.
                </p>
                <p>
                  Based in Ongata Rongai, we've grown from a small team of dedicated nurses to a comprehensive healthcare provider serving over 500 families across 10+ counties. Our name "Rohi" means "spirit" in Swahili, reflecting our commitment to nurturing both physical health and emotional wellbeing.
                </p>
                <p>
                  Today, we're proud to be one of Kenya's leading home healthcare providers, licensed by NCK and trusted by families across the nation.
                </p>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-chart-2/10">
              <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Mission</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    To provide accessible, affordable, and compassionate home-based healthcare that empowers patients and supports families throughout their care journey.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Vision</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    To be Kenya's most trusted home healthcare provider, setting the standard for quality, compassion, and innovation in patient care.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="relative">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 pb-8 last:pb-0 relative" data-testid={`timeline-${index}`}>
                {index !== timeline.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border"></div>
                )}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm relative z-10">
                    {item.year.slice(2)}
                  </div>
                </div>
                <Card className="flex-1 p-4">
                  <div className="font-semibold text-primary mb-1">{item.year}</div>
                  <p className="text-muted-foreground">{item.event}</p>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`value-${index}`}>
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet the healthcare professionals dedicated to your wellbeing
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`team-${index}`}>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.qualification}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Accreditations</h2>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3" data-testid={`cert-${index}`}>
                  <CheckCircle className="w-6 h-6 text-chart-3 flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="bg-card rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Service Area</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Headquartered in Ongata Rongai, we serve families across Nairobi and surrounding counties
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Nairobi", "Kiambu", "Kajiado", "Machakos", "Murang'a", "Nyeri", "Nakuru", "Kisumu", "Mombasa", "Eldoret"].map((county, index) => (
              <Badge key={index} variant="secondary" className="text-sm" data-testid={`county-${index}`}>
                {county}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
