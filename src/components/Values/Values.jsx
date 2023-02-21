import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Card from "@/UI/Card/Card";
import { GiCutDiamond } from "react-icons/gi"
import { values } from "@/router/links";
import Image from '@/images/values.jpg'

const Values = () => {
  return (
    <section className='values'>{/*  */}
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="img" />
          </div>
        </div>
        <div className="values__right">
          <SectionHeader icon={<GiCutDiamond />} title="values" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos odit sit minima labore sapiente doloribus, commodi accusamus laudantium totam, repellat nihil sed, vero aliquam? Tempore, accusantium. Corrupti libero cumque vitae.
          </p>
          <div className="values__wrapper">
            {
              values.map(({ id, icon, title, desc }) => {
                return (
                  <Card className="values__value" key={id}>
                    <span> {icon} </span>
                    <h4> {title} </h4>
                    <small> {desc} </small>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values