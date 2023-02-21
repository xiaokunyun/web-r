import Header from '@/components/Header/Header'
import HeaderImage from '@/images/header_bg_5.jpg'
import Trainer from '@/components/Trainer/Trainer'
import { trainers } from "@/router/links";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import './trainers.css'

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>

      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({ id, name, image, job, socials }) => {
              return <Trainer key={id} image={image} name={name} job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]} />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers