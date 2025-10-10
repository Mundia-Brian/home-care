import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="group relative overflow-visible p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg" data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="mb-4">
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
