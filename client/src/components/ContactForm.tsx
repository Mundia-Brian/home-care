import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, MessageCircle } from "lucide-react";
import jsPDF from "jspdf";

interface ServicePricing {
  daily?: number;
  monthly?: number;
  session?: number;
  visit?: number;
  service?: number;
  varies?: boolean;
  name: string;
}

interface Quote {
  id: string;
  date: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  service: string;
  pricing: ServicePricing;
  duration?: string;
  message: string;
  validUntil: string;
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  duration: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const servicePricing: Record<string, ServicePricing> = {
  "bronze-plan": { daily: 1500, monthly: 40500, name: "Bronze Plan - Basic Care" },
  "silver-plan": { daily: 2500, monthly: 67500, name: "Silver Plan - Standard Care" },
  "gold-plan": { daily: 4500, monthly: 121500, name: "Gold Plan - Nursing Care" },
  "physiotherapy": { session: 3000, name: "Physiotherapy at Home" },
  "occupational-therapy": { session: 2500, name: "Occupational Therapy" },
  "medical-equipment": { varies: true, name: "Medical Equipment Rental" },
  "nutrition-consultation": { session: 2000, name: "Nutrition Consultation" },
  "counseling": { session: 2500, name: "Professional Counseling" },
  "doctor-visits": { visit: 5000, name: "Doctor Home Visits" },
  "clinical-officer": { visit: 3500, name: "Clinical Officer Visits" },
  "lab-collection": { service: 1500, name: "Lab Sample Collection" },
  "massage": { session: 2000, name: "Professional Massage" },
  "ambulance": { varies: true, name: "Ambulance Services" },
  "other": { varies: true, name: "Other Services" }
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);


  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      duration: "",
      message: "",
    },
  });

  const generateQuote = (data: ContactFormData): Quote | null => {
    const service = servicePricing[data.service];
    if (!service) return null;

    const quote: Quote = {
      id: `Q${Date.now()}`,
      date: new Date().toLocaleDateString(),
      customer: {
        name: data.name,
        email: data.email,
        phone: data.phone
      },
      service: service.name,
      pricing: service,
      duration: data.duration,
      message: data.message,
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
    };

    return quote;
  };



  const generatePDF = (data: ContactFormData) => {
    const service = servicePricing[data.service];
    const pricingText = service?.varies ? 'Contact for pricing' : 
      service?.daily ? `Daily: KES ${service.daily.toLocaleString()}, Monthly: KES ${service.monthly?.toLocaleString() || 'N/A'}` :
      service?.session ? `Per Session: KES ${service.session.toLocaleString()}` :
      service?.visit ? `Per Visit: KES ${service.visit.toLocaleString()}` :
      service?.service ? `Service Fee: KES ${service.service.toLocaleString()}` : 'Contact for pricing';
    
    const quoteId = `Q${Date.now()}`;
    const date = new Date().toLocaleDateString();
    const validUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString();
    
    const pdf = new jsPDF();
    pdf.setFontSize(20);
    pdf.text('ROHI HOMECARE - SERVICE QUOTE', 20, 30);
    pdf.setFontSize(12);
    pdf.text(`Quote ID: ${quoteId}`, 20, 50);
    pdf.text(`Date: ${date}`, 20, 60);
    pdf.text(`Valid Until: ${validUntil}`, 20, 70);
    pdf.text('CUSTOMER DETAILS:', 20, 90);
    pdf.text(`Name: ${data.name}`, 20, 100);
    pdf.text(`Email: ${data.email}`, 20, 110);
    pdf.text(`Phone: ${data.phone}`, 20, 120);
    pdf.text('SERVICE REQUESTED:', 20, 140);
    pdf.text(service?.name || data.service, 20, 150);
    pdf.text('PRICING:', 20, 170);
    pdf.text(pricingText, 20, 180);
    if (data.duration) {
      pdf.text(`Duration: ${data.duration}`, 20, 200);
    }
    pdf.text('ADDITIONAL NOTES:', 20, 220);
    const splitMessage = pdf.splitTextToSize(data.message, 170);
    pdf.text(splitMessage, 20, 230);
    pdf.text('CONTACT US:', 20, 260);
    pdf.text('Phone: 0111 726 508', 20, 270);
    pdf.text('Email: info@rohihomecare.co.ke', 20, 280);
    pdf.save(`Rohi_Homecare_Quote_${quoteId}.pdf`);
  };

  const sendToWhatsApp = (data: ContactFormData) => {
    const service = servicePricing[data.service];
    const pricingText = service?.varies ? 'Contact for pricing' : 
      service?.daily ? `KES ${service.daily.toLocaleString()}/day` :
      service?.session ? `KES ${service.session.toLocaleString()}/session` :
      service?.visit ? `KES ${service.visit.toLocaleString()}/visit` :
      service?.service ? `KES ${service.service.toLocaleString()}` : 'Contact for pricing';
    
    const message = `Hi! I'm interested in Rohi Homecare services:\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${service?.name || data.service}\nPricing: ${pricingText}\n${data.duration ? `Duration: ${data.duration}\n` : ''}Message: ${data.message}\n\nPlease contact me for more details.`;
    const whatsappUrl = `https://wa.me/254111726508?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const [quote, setQuote] = useState<any>(null);
  const [showQuote, setShowQuote] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    const service = servicePricing[data.service];
    const quoteData = {
      id: `Q${Date.now()}`,
      date: new Date().toLocaleDateString(),
      customer: data,
      service: service?.name || data.service,
      pricing: service
    };
    setQuote(quoteData);
    setShowQuote(true);
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} data-testid="input-name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="0700000000" {...field} data-testid="input-phone" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Interested In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="select-service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(servicePricing).map(([key, service]) => (
                    <SelectItem key={key} value={key}>
                      {service.name}
                      {service.varies ? '' : 
                       service.daily ? ` (KES ${service.daily.toLocaleString()}/day)` :
                       service.session ? ` (KES ${service.session.toLocaleString()}/session)` :
                       service.visit ? ` (KES ${service.visit.toLocaleString()}/visit)` :
                       service.service ? ` (KES ${service.service.toLocaleString()})` : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration/Frequency (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 2 weeks, 3 sessions per week, monthly" {...field} data-testid="input-duration" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your care needs..."
                  className="min-h-32"
                  {...field}
                  data-testid="textarea-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full hover-elevate active-elevate-2" disabled={isSubmitting} data-testid="button-submit">
          {isSubmitting ? "Generating Quote..." : "Get Quote"}
        </Button>
      </form>

      {showQuote && quote && (
        <Card className="mt-6 p-6 bg-green-50 border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-800">Your Quote is Ready!</h3>
            <Badge className="bg-green-100 text-green-800">Quote #{quote.id}</Badge>
          </div>
          
          <div className="space-y-3 mb-6">
            <div>
              <p className="font-medium">{quote.service}</p>
              <p className="text-sm text-muted-foreground">
                {quote.pricing?.varies ? 'Contact us for custom pricing' : 
                 quote.pricing?.daily ? `KES ${quote.pricing.daily.toLocaleString()}/day` :
                 quote.pricing?.session ? `KES ${quote.pricing.session.toLocaleString()}/session` :
                 quote.pricing?.visit ? `KES ${quote.pricing.visit.toLocaleString()}/visit` :
                 quote.pricing?.service ? `KES ${quote.pricing.service.toLocaleString()}` : 'Contact for pricing'}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => generatePDF(quote.customer)} 
              variant="outline" 
              className="flex-1 hover-elevate"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button 
              onClick={() => sendToWhatsApp(quote.customer)} 
              className="flex-1 bg-green-600 hover:bg-green-700 hover-elevate"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Send to WhatsApp
            </Button>
          </div>
        </Card>
      )}
    </Form>
  );
}
