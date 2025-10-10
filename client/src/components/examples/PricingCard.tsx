import PricingCard from '../PricingCard'

export default function PricingCardExample() {
  return (
    <div className="p-8">
      <PricingCard
        title="SILVER PLAN"
        subtitle="Standard Care"
        price="2,500"
        period="day"
        tier="silver"
        popular={true}
        features={[
          "Experienced caregiver",
          "Daily health monitoring",
          "Meal preparation",
          "Light housekeeping",
          "24/7 supervision support",
          "Weekly progress reports"
        ]}
      />
    </div>
  )
}
