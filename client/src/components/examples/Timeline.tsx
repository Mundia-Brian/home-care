import Timeline from '../Timeline'
import { Phone, Home, ClipboardCheck, Play, TrendingUp } from 'lucide-react'

export default function TimelineExample() {
  const steps = [
    {
      icon: Phone,
      title: "Initial Contact",
      description: "Call, WhatsApp, or fill our online form to get started.",
      cta: "Start Here"
    },
    {
      icon: Home,
      title: "Free Home Assessment",
      description: "We visit your location, understand patient needs, and meet the family.",
    },
    {
      icon: ClipboardCheck,
      title: "Customized Care Plan",
      description: "Matched caregiver/nurse selection, schedule coordination, and pricing discussion.",
    },
    {
      icon: Play,
      title: "Care Begins",
      description: "Professional assigned, regular supervision, 24/7 support available.",
    },
    {
      icon: TrendingUp,
      title: "Ongoing Support",
      description: "Progress monitoring, family communication, and care plan adjustments.",
    }
  ];

  return (
    <div className="p-8">
      <Timeline steps={steps} />
    </div>
  )
}
