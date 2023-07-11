import { Searchbox } from 'components/searchbox/searchbox'
import promo from '../Assets/prmo.png'
import 'Assets/styles/promo.css'
export function Getpromo() {
  return (
    <div className="flex">
      <div className="relative w-full m-auto flex left-1/2 flex-col">
        <Searchbox />
      </div>
      <img src={promo} className=" flex z-1" />
    </div>
  )
}
