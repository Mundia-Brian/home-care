import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  condition: string;
  rating: number;
  testimonial: string;
}

export default function TestimonialCard({ name, condition, rating, testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-6 hover-elevate active-elevate-2 h-full" data-testid={`testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <Quote className="w-10 h-10 text-primary/20 mb-4" />
      
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'fill-chart-4 text-chart-4' : 'text-muted'}`}
          />
        ))}
      </div>

      <p className="text-muted-foreground mb-4 italic">"{testimonial}"</p>

      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{condition}</p>
      </div>
    </Card>
  );
}
