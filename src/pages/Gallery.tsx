import Gcard from 'components/resgallery card/Gallerycard'
import data from '../JSON/Gallery.json'
import res1 from 'Assets/res1.png'
import res2 from 'Assets/res2.png'
import res3 from 'Assets/res3.png'
import res4 from 'Assets/res4.png'
import res5 from 'Assets/res5.png'
import res6 from 'Assets/res6.png'
import { useEffect } from 'react'
import circle from '../Assets/svgs/circles.svg'
import textcircle from '../Assets/svgs/textcircle.svg'
import leavehome from '../Assets/svgs/leaveshome.svg'

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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="absolute w-96">
        <img src={circle} />
      </div>
      <div className="absolute 2xl:left-20 2xl:top-60 xl:left-28 xl:top-32  ...">
        <img src={textcircle} />
      </div>
      <div className="absolute 2xl:right-36 2xl:mt-36 xl:right-36 xl:mt-32 xl:w-2/5">
        <img src={leavehome} />
      </div>
      <div className="relative flex flex-wrap 2xl:mx-36 justify-center pt-32 ">
        {data.map((e, index) => {
          return (
            <Gcard
              name={e.name}
              about={e.about}
              time={e.time}
              location={e.location}
              img={imgarr[index]}
              key={e.name}
              index={index}
            />
          )
        })}
      </div>
    </>
  )
}
export default Gallery
