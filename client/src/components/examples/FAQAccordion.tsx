import FAQAccordion from '../FAQAccordion'

export default function FAQAccordionExample() {
  const faqs = [
    {
      question: "How quickly can you start providing care?",
      answer: "We can typically start providing care within 24-48 hours of your initial consultation, depending on your specific needs and our caregiver availability."
    },
    {
      question: "Are your caregivers and nurses licensed?",
      answer: "Yes, all our nurses are licensed by the Nursing Council of Kenya (NCK), and our caregivers undergo thorough background checks and professional training."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Nairobi and surrounding counties including Kiambu, Kajiado, and Machakos. We're based in Ongata Rongai for quick response times."
    },
    {
      question: "Can I change my care plan if needs change?",
      answer: "Absolutely! We understand that care needs can evolve. We offer flexible plans and can adjust services based on changing requirements."
    }
  ];

  return (
    <div className="p-8 max-w-3xl">
      <FAQAccordion faqs={faqs} />
    </div>
  )
}
