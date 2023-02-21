import "@/pages/home/home.css"
import { Link } from "react-router-dom"
import Image from "@/images/main_header.png"

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorum sed quia doloribus sint error harum necessitatibus magnam itaque, excepturi autem rerum blanditiis, rem inventore. Corrupti nulla mollitia veniam ut!
          </p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="img" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader