import SectionHeader from '@/components/SectionHeader/SectionHeader'
import FAQ from './FAQ'
import { faqs } from '@/router/links'
import { FaQuestion } from "react-icons/fa";


const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHeader icon={<FaQuestion />} title="FAQs" />
        <div className="faqs__wrapper">
          {
            faqs.map(({ id, question, answer }) => {
              return <FAQ question={question} answer={answer} key={id} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FAQs