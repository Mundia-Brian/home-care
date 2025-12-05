import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface TimelineStep {
  icon: LucideIcon;
  title: string;
  description: string;
  cta?: string;
  ctaLink?: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="relative flex gap-6 pb-12 last:pb-0" data-testid={`timeline-step-${index}`}>
          {index !== steps.length - 1 && (
            <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border"></div>
          )}
          
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
          </div>

          <Card className="flex-1 p-6 hover-elevate">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl font-semibold">Step {index + 1}: {step.title}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">#{index + 1}</span>
            </div>
            <p className="text-muted-foreground mb-4">{step.description}</p>
            {step.cta && (
              step.ctaLink ? (
                <Link href={step.ctaLink}>
                  <Button variant="outline" size="sm" className="hover-elevate active-elevate-2" data-testid={`button-step-${index}`}>
                    {step.cta}
                  </Button>
                </Link>
              ) : (
                <Button variant="outline" size="sm" className="hover-elevate active-elevate-2" data-testid={`button-step-${index}`}>
                  {step.cta}
                </Button>
              )
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}
