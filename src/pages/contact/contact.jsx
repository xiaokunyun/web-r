import Header from '@/components/Header/Header'
import HeaderImage from '@/images/header_bg_2.jpg'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="github.com" onClicktarget="_blank" rel="noopener noreferrer"> <MdEmail /> </a>
            <a href="github.com" target="_blank" rel="noopener noreferrer"> <BsMessenger /> </a>
            <a href="github.com" target="_blank" rel="noopener noreferrer"> <IoLogoWhatsapp /> </a>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact