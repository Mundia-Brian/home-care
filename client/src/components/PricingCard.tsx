import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "wouter";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  tier: string;
}

export default function PricingCard({ title, subtitle, price, period, features, popular, tier }: PricingCardProps) {
  return (
    <Card className={`relative p-6 hover-elevate active-elevate-2 transition-all ${popular ? 'border-primary border-2 shadow-lg' : ''}`} data-testid={`pricing-card-${tier}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground" data-testid="badge-popular">
          Most Popular
        </Badge>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold">KSh {price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-chart-3 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact" data-testid={`button-book-${tier}`}>
        <Button className={`w-full ${popular ? 'bg-primary hover-elevate active-elevate-2' : ''}`} variant={popular ? "default" : "outline"}>
          Book Now
        </Button>
      </Link>
    </Card>
  );
}
