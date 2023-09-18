import burger from '../Assets/burger.png'
import sburger from 'Assets/svgs/Burger.svg'
import Adv from './Adv'
import data from '../JSON/advs.json'
import cookie from 'Assets/svgs/cookie.svg'
import waiter from 'Assets/svgs/avatar.svg'
import heart from 'Assets/svgs/heart.svg'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let icon = [cookie, waiter, heart]
  return (
    <div className="pt-32 flex flex-col items-center mb-64">
      <div className="flex mb-48 xl:mx-82 lg:mx-24 items-center">
        <motion.div
          className="flex flex-col grow  font-segoe  mt-20 w-1/2 pr-10 "
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delay: 0.1 }
          }}
        >
          <div className="flex xl:text-5xl lg:text-4xl font-bold  text-custorange">
            <div>About us</div>
            <div className="ml-4">
              <img src={sburger} width={50} />
            </div>
          </div>
          <div className="mt-12 xl:text-2xl lg:text-lg xl:tracking-widest lg:tracking-normal leading-10 pr-8 ">
            <span className="font-bold xl:text-3xl lg:text-xl">
              Welcome to{' '}
              <span className="text-custorange">Delicious Bites</span>
            </span>{' '}
            - where culinary passion meets warm hospitality. Our diverse menu
            features delightful dishes prepared with the finest local
            ingredients. From classic favorites to innovative creations, we
            offer something for every taste. Join us for a memorable dining
            experience that will leave you craving for more.{' '}
            <span className=" text-custorange">
              We can't wait to serve you!
            </span>
          </div>
        </motion.div>
        <div className="flex w-1/2 pt-20">
          <motion.div
            className="w-full "
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          >
            {' '}
            <img src={burger} width={3000} />
          </motion.div>
        </div>
      </div>
      <div className="bg-custgray w-full mx-82 flex flex-col items-center pb-48">
        <div className="text-5xl font-bold font-segoe  mt-48">
          <h1>What You Will Get</h1>
        </div>
        <div className="flex xl:mx-82 lg:mx-24 mt-24">
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
