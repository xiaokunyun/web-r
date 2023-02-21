import Header from '@/components/Header/Header'
import HeaderImage from '@/images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const gallerylength = 15
  const images = []
  for (let i = 1; i < gallerylength; i++) {
    images.push(require(`@/images/gallery${i}.jpg`))
  }
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage} >
        Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam, architecto nostrum nobis, est, deserunt odio illum perspiciatis.
      </Header>
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Img ${index + 1}`} />
              </article>
            )
          })
        }

      </div>
    </>
  )
}

export default Gallery