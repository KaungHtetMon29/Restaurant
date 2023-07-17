import Gcard from 'components/resgallery card/Gallerycard'
import data from '../JSON/Gallery.json'
import res1 from 'Assets/res1.jpg'
import res2 from 'Assets/res2.jpg'
import res3 from 'Assets/res3.jpg'
import res4 from 'Assets/res4.jpg'
import res5 from 'Assets/res5.jpg'
import res6 from 'Assets/res6.jpg'

function Gallery() {
  let imgarr = [
    res1,
    res2,
    res3,
    res4,
    res5,
    res6,
    res1,
    res2,
    res3,
    res4,
    res1,
    res2,
    res3,
    res4
  ]
  return (
    <div className="flex flex-wrap mx-82 justify-center mt-32">
      {data.map((e, index) => {
        return (
          <Gcard
            name={e.name}
            about={e.about}
            img={imgarr[index]}
            key={e.name}
          />
        )
      })}
    </div>
  )
}
export default Gallery
