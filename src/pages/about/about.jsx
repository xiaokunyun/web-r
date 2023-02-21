import Header from '@/components/Header/Header'
import HeaderImage from '@/images/header_bg_1.jpg'
import StoryImage from '@/images/about1.jpg'
import VisionImage from '@/images/about2.jpg'
import MissionImage from '@/images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage} >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui velit in odit porro facere praesentium itaque, quo explicabo dolorum quod rerum facilis, dolor maxime aliquid voluptatibus atque placeat amet tenetur!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia natus iure, culpa necessitatibus ut nesciunt dolor consectetur est accusamus aliquam laboriosam quasi earum aperiam! Cum eaque eum sed repudiandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia natus iure, culpa necessitatibus ut nesciunt dolor consectetur est accusamus aliquam laboriosam quasi earum aperiam! Cum eaque eum sed repudiandae.</p>
            <p>Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?</p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia natus iure, culpa necessitatibus ut nesciunt dolor consectetur est accusamus aliquam laboriosam quasi earum aperiam! Cum eaque eum sed repudiandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia natus iure, culpa necessitatibus ut nesciunt dolor consectetur est accusamus aliquam laboriosam quasi earum aperiam! Cum eaque eum sed repudiandae.</p>
            <p>Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia natus iure, culpa necessitatibus ut nesciunt dolor consectetur est accusamus aliquam laboriosam quasi earum aperiam! Cum eaque eum sed repudiandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia natus iure, culpa necessitatibus ut nesciunt dolor consectetur est accusamus aliquam laboriosam quasi earum aperiam! Cum eaque eum sed repudiandae.</p>
            <p>Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?</p>
          </div>
        </div>
      </section> 
    </>
  )
}

export default About