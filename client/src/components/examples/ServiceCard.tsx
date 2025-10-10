import ServiceCard from '../ServiceCard'
import { Stethoscope } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <div className="p-8">
      <ServiceCard
        icon={Stethoscope}
        title="Home-Based Nursing Care"
        description="Professional nursing care in the comfort of your home"
        features={[
          "24/7 availability",
          "Licensed nurses",
          "Customized care plans",
          "Medical monitoring"
        ]}
      />
    </div>
  )
}
