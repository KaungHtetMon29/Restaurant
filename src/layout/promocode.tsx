import { Searchbox } from 'components/searchbox/searchbox'
import promo from '../Assets/prmo.png'
import 'Assets/styles/promo.css'
export function Getpromo() {
  return (
    <div className="flex 2xl:w-fit xl:w-fit lg:w-fit">
      <div className="relative ">
        <div className="absolute w-full flex flex-col justify-center items-center top-1/4">
          <Searchbox />
        </div>
        <div>
          <img src={promo} className=" flex z-1" loading="lazy" />
        </div>
      </div>
    </div>
  )
}
