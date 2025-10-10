import TestimonialCard from '../TestimonialCard'

export default function TestimonialCardExample() {
  return (
    <div className="p-8">
      <TestimonialCard
        name="Grace Wanjiku"
        condition="Post-Surgery Care"
        rating={5}
        testimonial="The care my mother received was exceptional. The nurses were professional, compassionate, and truly made a difference in her recovery."
      />
    </div>
  )
}
