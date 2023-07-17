import Gcard from 'components/resgallery card/Gallerycard'
import data from '../JSON/Gallery.json'
import res1 from 'Assets/res1.png'
import res2 from 'Assets/res2.png'
import res3 from 'Assets/res3.png'
import res4 from 'Assets/res4.png'
import res5 from 'Assets/res5.png'
import res6 from 'Assets/res6.png'
import { useEffect } from 'react'

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
    const handleWindowLoad = () => {
      console.log('Window loaded')
      // Additional actions upon window load
    }

    window.addEventListener('load', handleWindowLoad)

    return () => {
      window.removeEventListener('load', handleWindowLoad)
    }
  }, [])
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
