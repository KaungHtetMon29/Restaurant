import { Params, useParams } from 'react-router-dom'
import res1 from 'Assets/res1.png'
import res2 from 'Assets/res2.png'
import res3 from 'Assets/res3.png'
import res4 from 'Assets/res4.png'
import res5 from 'Assets/res5.png'
import res6 from 'Assets/res6.png'
import data from '../JSON/Gallery.json'
import clock from 'Assets/svgs/clock.svg'
import { useEffect } from 'react'
import locate from 'Assets/svgs/location.svg'

function Gallerydetail() {
  const param = useParams()
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
  let ind: any = param.id
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="mx-82 flex flex-col justify-center items-center mt-32 font-segoe mb-20">
      <div className="">
        <img src={imgarr[ind]} className="rounded-xl" />
      </div>
      <div className="mt-14 px-24">
        <p className="font-segoe font-bold text-4xl text-custorange text-center">
          {param.name}
        </p>
        <h2 className="text-4xl text-center mt-24 font-bold font ">About</h2>
        <p className="text-2xl text-center mt-12">{data[ind].about}</p>
        <div className="flex justify-center mt-24">
          <img src={locate} width={30} className="mr-4" />
          <h2 className="text-4xl text-center font-bold font ">Location</h2>
        </div>
        <p className="text-2xl text-center mt-12">{data[ind].location}</p>
        <div className="flex justify-center mt-24">
          <img src={clock} width={35} className="mr-4" />
          <h2 className="text-4xl text-center font-bold font ">Opening Hour</h2>
        </div>

        <p className="text-2xl text-center mt-12">{data[ind].time}</p>
      </div>
    </div>
  )
}
export default Gallerydetail
