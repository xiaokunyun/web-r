import { Link } from "react-router-dom"
import Logo from '@/images/logo.png'
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";




const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer__container">
          <article>
            <Link to="/" className="logo">
              <img src={Logo} alt="" />
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla, dignissimos nihil earum quaerat, tenetur expedita error vel beatae repudiandae aperiam facilis voluptatum explicabo nostrum veniam tempore officiis dolore sequi!</p>
            <div className="footer__socials">
              <a href="linkedin.com" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
              <a href="facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebookF /> </a>
              <a href="twitter.com" target="_blank" rel="noopener noreferrer"> <AiOutlineTwitter /> </a>
              <a href="instagram.com" target="_blank" rel="noopener noreferrer"> <AiFillInstagram /> </a>
            </div>
          </article>
          <article>
            <h4>Permalinks </h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact </Link>
          </article>
          <article>
            <h4>Permalinks </h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact </Link>
          </article>
          <article>
            <h4>Permalinks </h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact </Link>
          </article>
        </div>
        <div className="footer__copyright">
          <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>
        </div>
      </footer>
    </>
  )
}

export default Footer