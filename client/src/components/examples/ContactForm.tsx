import ContactForm from '../ContactForm'
import { Card } from '@/components/ui/card'

export default function ContactFormExample() {
  return (
    <div className="p-8 max-w-2xl">
      <Card className="p-6">
        <ContactForm />
      </Card>
    </div>
  )
}
