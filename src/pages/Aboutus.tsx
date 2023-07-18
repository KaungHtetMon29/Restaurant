import burger from '../Assets/burger.png'
import sburger from 'Assets/svgs/Burger.svg'
import Adv from './Adv'
import data from '../JSON/advs.json'
import cookie from 'Assets/svgs/cookie.svg'
import waiter from 'Assets/svgs/avatar.svg'
import heart from 'Assets/svgs/heart.svg'
import { useEffect } from 'react'
function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let icon = [cookie, waiter, heart]
  return (
    <div className="pt-32 flex flex-col items-center">
      <div className="flex mb-48 mx-82">
        <div className="flex flex-col grow  font-segoe  mt-20 w-1/2 pr-10">
          <div className="flex text-5xl font-bold  text-custorange">
            <div>About us</div>
            <div className="ml-4">
              <img src={sburger} width={50} />
            </div>
          </div>
          <div className="mt-12 text-2xl tracking-widest leading-10   ">
            <span className="font-bold text-3xl">
              Welcome to{' '}
              <span className="text-custorange">Delicious Bites</span>
            </span>{' '}
            - where culinary passion meets warm hospitality. Our diverse menu
            features <span className="font-bold"> delightful dishes</span>{' '}
            prepared with the finest local ingredients. From classic favorites
            to innovative creations, we offer something for every taste. Join us
            for a memorable dining experience that will leave you craving for
            more.{' '}
            <span className=" text-custorange">
              We can't wait to serve you!
            </span>
          </div>
        </div>
        <div className="flex w-1/2 pt-20">
          <div className="w-full ">
            {' '}
            <img src={burger} width={3000} />
          </div>
        </div>
      </div>
      <div className="bg-custgray w-full mx-82 flex flex-col items-center pb-48">
        <div className="text-5xl font-bold font-segoe  mt-32">
          <h1>Advantages of dining at our restaurant</h1>
        </div>
        <div className="flex mx-82 mt-48">
          {data.map((e, index) => {
            return <Adv img={icon[index]} head={e.title} para={e.content} />
          })}
        </div>
      </div>
      <div></div>
    </div>
  )
}
export default Aboutus
