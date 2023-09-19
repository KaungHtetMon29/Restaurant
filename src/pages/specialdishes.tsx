import dish1 from '../Assets/dish-1 1.png'
import dish2 from '../Assets/dish-3 1.png'
import dish4 from '../Assets/dish-4.png'
import dish3 from '../Assets/dish-5.png'
import dish from '../Assets/dish-2 2.png'
import CustButton from 'components/button/button'
import { motion } from 'framer-motion'

export function Sdish() {
  const photoarr = [dish1, dish2, dish3, dish4]
  const titles = [
    'Lumpia with Suace',
    'Fish and Veggie',
    'Tofu Chili',
    'Egg and Cocumber'
  ]
  return (
    <div className="flex flex-col justify-center 2xl:mx-82 2xl:z-48 2xl:pb-40 xl:mx-32 z-48 xl:pb-40 lg:mx-32 lg:pb-40 ">
      <div className="flex flex-col">
        <div className="2xl:text-7xl 2xl:pt-32 xl:text-7xl xl:pt-32 lg:pt-32 lg:text-6xl text-center">
          <p className="xl:text-6xl lg:text-5xl">Our Special Dishes</p>
        </div>
        <div className=" 2xl:pt-20 font-segoe font-light 2xl:text-xl xl:text-xl xl:pt-20 lg:pt-12">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt
          </p>
        </div>
      </div>
      <div className="flex justify-center 2xl:mt-32 xl:mt-40 gap-4 lg:mt-32">
        {photoarr.map((e, i) => (
          <motion.div
            className="2xl:w-1/4 relative xl:w-1/4 lg:w-fit"
            whileHover={{ scale: 1.1, transition: { delay: 0 } }}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', delay: 0 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <div className=" absolute flex w-fit mx-auto left-0 right-0 2xl:bottom-60 z-10 xl:bottom-40 lg:bottom-36">
              <img
                src={e}
                className="2xl:w-full xl:w-44 lg:w-32"
                loading="lazy"
              />
            </div>
            <div className="relative flex flex-col text-center tracking-wide border-4 hover:bg-white border-white 2xl:pt-52 2xl:pb-10 xl:pt-32 xl:pb-10 lg:pt-24 lg:pb-10  rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl rounded-br-4xl">
              <p className="font-bold 2xl:text-xl xl:text-lg lg:text-base">
                {titles[i]}
              </p>
              <p className=" font-segoe 2xl:text-base 2xl:pt-8 xl:pt-8 xl:px-2 xl:text-xs lg:text-xs lg:px-3 leading-6">
                Lorem ipsum dolor sit ,consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="2xl:mt-40 xl:mt-12 lg:mt-32 flex">
        <div className="flex items-center justify-center">
          <motion.div
            className="w-1/2 m-auto flex grow"
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{
              scale: 1,
              rotate: 0,
              transition: { duration: 0.4, type: 'spring' }
            }}
          >
            <img src={dish} alt="" className="w-fit" loading="lazy" />
          </motion.div>
          <div className="w-1/2 2xl:pl-24 xl:pl-14 2xl:mr-0 gap-4 flex flex-col  ">
            <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl">
              Welcome to Our Restaurant
            </h1>
            <p className="font-segoe 2xl:text-xl xl:text-md 2xl:pt-8 xl:pt-6 lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <div className="flex 2xl:w-fit xl:q-5/6 text-lg gap-4">
                <div className="2xl:w-fit 2xl:pr-4 xl:w-fit xl:pr-3">
                  <CustButton txt="Menu" clr="bg-custblack" />
                </div>
                <div className="2xl:w-fit xl:w-fit">
                  <CustButton txt="Book a Table" clr="bg-custorange" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
