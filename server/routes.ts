import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { rateLimit } from "./middleware";

const pricingSchema = z.union([
  z.object({ daily: z.number(), monthly: z.number(), name: z.string() }),
  z.object({ session: z.number(), name: z.string() }),
  z.object({ visit: z.number(), name: z.string() }),
  z.object({ service: z.number(), name: z.string() }),
  z.object({ varies: z.boolean(), name: z.string() })
]);

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(10).max(20),
  service: z.string().min(1).max(100),
  duration: z.string().max(100).optional(),
  message: z.string().min(10).max(1000),
  quote: z.object({
    id: z.string(),
    date: z.string(),
    customer: z.object({
      name: z.string(),
      email: z.string(),
      phone: z.string()
    }),
    service: z.string(),
    pricing: pricingSchema,
    duration: z.string().optional(),
    message: z.string(),
    validUntil: z.string()
  }).optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Contact form endpoint with rate limiting
  app.post("/api/contact", rateLimit(10, 60 * 60 * 1000), async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      // TODO: Implement email sending (SendGrid, AWS SES, etc.)
      // TODO: Store in database for record keeping
      
      console.log("Contact form submission:", {
        name: data.name,
        email: data.email,
        service: data.service,
        duration: data.duration,
        quoteId: data.quote?.id,
        timestamp: new Date().toISOString()
      });
      
      res.json({ 
        success: true, 
        message: data.quote ? "Quote generated successfully! We'll contact you soon to discuss next steps." : "Thank you for contacting us. We'll respond within 24 hours.",
        quote: data.quote
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        success: false, 
        message: "An error occurred. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
