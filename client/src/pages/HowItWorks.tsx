import Timeline from "@/components/Timeline";
import FAQAccordion from "@/components/FAQAccordion";
import { Phone, Home, ClipboardCheck, Play, TrendingUp, Video } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: "Initial Contact",
      description: "Reach out to us via phone call, WhatsApp, or our online contact form. Our friendly team is available 24/7 to answer your questions and understand your care needs.",
      cta: "Start Here"
    },
    {
      icon: Home,
      title: "Free Home Assessment",
      description: "We schedule a convenient time to visit your location. Our healthcare professional will assess the patient's needs, discuss medical history, and meet with family members to understand your expectations.",
    },
    {
      icon: ClipboardCheck,
      title: "Customized Care Plan",
      description: "Based on the assessment, we create a personalized care plan. This includes selecting the most suitable caregiver or nurse, coordinating schedules, and providing transparent pricing options.",
    },
    {
      icon: Play,
      title: "Care Begins",
      description: "Your assigned healthcare professional starts providing care according to the agreed schedule. We ensure smooth onboarding with all necessary equipment and supplies. 24/7 support is available from day one.",
    },
    {
      icon: TrendingUp,
      title: "Ongoing Support",
      description: "We continuously monitor progress through regular check-ins and detailed reports. Family members receive updates, and we adjust the care plan as needs evolve. Our supervisors ensure quality at every step.",
    }
  ];

  const faqs = [
    {
      question: "How quickly can you start providing care?",
      answer: "We can typically start providing care within 24-48 hours of your initial consultation, depending on your specific needs and our caregiver availability. In urgent cases, we can often arrange same-day service."
    },
    {
      question: "Are your caregivers and nurses licensed?",
      answer: "Yes, all our nurses are licensed by the Nursing Council of Kenya (NCK), and our caregivers undergo thorough background checks and professional training. We maintain the highest standards of qualification and conduct."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Nairobi and surrounding counties including Kiambu, Kajiado, Machakos, and more. We're based in Ongata Rongai for quick response times. Contact us to confirm if we serve your area."
    },
    {
      question: "Can I change my care plan if needs change?",
      answer: "Absolutely! We understand that care needs can evolve. We offer flexible plans and can adjust services based on changing requirements. Simply contact your care coordinator to discuss modifications."
    },
    {
      question: "What are your payment options?",
      answer: "We accept multiple payment methods including M-Pesa, bank transfer, and cash. You can choose daily, weekly, or monthly billing cycles. We also offer flexible payment plans for long-term care arrangements."
    },
    {
      question: "Do you provide emergency services?",
      answer: "Yes, we have 24/7 emergency support available. All our clients have access to our emergency hotline, and we can arrange urgent care or ambulance services when needed."
    },
    {
      question: "Can I request a specific caregiver or nurse?",
      answer: "Yes, we take your preferences seriously. During the assessment, you can specify requirements like language preference, experience level, or even request a specific professional if you've worked with them before."
    },
    {
      question: "What's included in the free home assessment?",
      answer: "Our free assessment includes a comprehensive evaluation of the patient's medical and personal care needs, discussion of family expectations, review of the home environment, and a detailed care plan recommendation with transparent pricing."
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with Rohi Homecare is simple. Here's our step-by-step process
          </p>
        </div>

        <section className="mb-20">
          <Timeline steps={steps} />
        </section>

        <section className="mb-20">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-chart-2/10">
            <div className="max-w-3xl mx-auto text-center">
              <Video className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">See Our Care in Action</h2>
              <p className="text-muted-foreground mb-6">
                Watch how our caregivers and nurses provide compassionate, professional care that makes a real difference in patients' lives
              </p>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Video placeholder - A Day in the Life of Our Caregivers</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Community Updates</h2>
              <p className="text-muted-foreground">
                Stay connected with real stories and updates from our healthcare community
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="flex justify-center">
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D122120647910554233%26id%3D61566627012288%26substory_index%3D1978060132679870&show_text=true&width=500" 
                  width="500" 
                  height="534" 
                  style={{border: 'none', overflow: 'hidden'}} 
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Rohi Homecare Updates"
                />
              </div>
              <div className="flex justify-center">
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0bPdptRd8wk8dbY3gME6KQAKhic216CpBxLKgBbu8USYWgG3Qs6ukJR8DHSm3Z8CVl%26id%3D61566627012288&show_text=true&width=500" 
                  width="500" 
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
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Follow us for more updates and health tips</p>
              <a 
                href="https://www.facebook.com/p/Rohi-Homecare-61566627012288/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Visit our Facebook Page
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      </div>
    </div>
  );
}
