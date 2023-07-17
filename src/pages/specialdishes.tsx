import dish1 from '../Assets/dish-1 1.png'
import dish2 from '../Assets/dish-3 1.png'
import dish4 from '../Assets/dish-4.png'
import dish3 from '../Assets/dish-5.png'
import dish from '../Assets/dish-2 2.png'
import CustButton from 'components/button/button'
import { motion } from 'framer-motion'

export function Sdish() {
  return (
    <div className="flex flex-col justify-center 2xl:mx-82 2xl:z-48 2xl:pb-40 xl:mx-60 xl:z-48 xl:pb-40 ">
      <div className="flex flex-col">
        <div className="2xl:text-7xl 2xl:pt-32 xl:text-7xl xl:pt-32 text-center">
          <p>Our Special Dishes</p>
        </div>
        <div className=" 2xl:pt-20 font-segoe font-light 2xl:text-xl xl:text-xl xl:pt-20">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt
          </p>
        </div>
      </div>
      <div className="flex justify-center 2xl:mt-32 xl:mt-40">
        <motion.div
          className="2xl:w-1/4 relative 2xl:mr-8 xl:mr-4 xl:w-1/4"
          whileHover={{ scale: 1.1, transition: { delay: 0 } }}
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', delay: 0 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className=" absolute flex w-fit mx-auto left-0 right-0 2xl:bottom-60 z-10 xl:bottom-40">
            <img src={dish1} className="2xl:w-full xl:w-44" loading="lazy" />
          </div>
          <div className="relative flex flex-col text-center tracking-wide border-4 hover:bg-white border-white 2xl:pt-52 2xl:pb-10 xl:pt-32 xl:pb-10   rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl rounded-br-4xl">
            <p className="font-bold 2xl:text-xl xl:text-lg">
              Lumpia with Suace
            </p>
            <p className=" font-segoe 2xl:text-base 2xl:pt-8 xl:pt-8 xl:px-2 xl:text-xs leading-6">
              Lorem ipsum dolor sit , <br /> consectetur adipiscing elit, sed{' '}
              <br /> do eiusmod tempor
            </p>
          </div>
        </motion.div>
        <motion.div
          className="2xl:w-1/4 relative 2xl:mr-8 xl:mr-4 xl:w-1/4"
          whileHover={{ scale: 1.1, transition: { delay: 0 } }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: 'spring', delay: 0.1 }
          }}
          initial={{ y: 100, opacity: 0 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className=" absolute flex w-fit mx-auto left-0 right-0 2xl:bottom-60 z-10 xl:bottom-40">
            <img src={dish2} className="2xl:w-full xl:w-44" loading="lazy" />
          </div>
          <div className="relative flex flex-col text-center tracking-wide border-4 hover:bg-white border-white 2xl:pt-52 2xl:pb-10 xl:pt-32 xl:pb-10   rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl rounded-br-4xl">
            <p className="font-bold 2xl:text-xl xl:text-lg">Fish and Veggie</p>
            <p className=" font-segoe 2xl:text-base 2xl:pt-8 xl:pt-8 xl:px-2 xl:text-xs leading-6">
              Lorem ipsum dolor sit , <br /> consectetur adipiscing elit, sed{' '}
              <br /> do eiusmod tempor
            </p>
          </div>
        </motion.div>
        <motion.div
          className="2xl:w-1/4 relative 2xl:mr-8 xl:mr-4 xl:w-1/4"
          whileHover={{ scale: 1.1, transition: { delay: 0 } }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: 'spring', delay: 0.2 }
          }}
          initial={{ y: 100, opacity: 0 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className=" absolute flex w-fit mx-auto left-0 right-0 2xl:bottom-60 z-10 xl:bottom-40">
            <img src={dish3} className="2xl:w-full xl:w-44" loading="lazy" />
          </div>
          <div className="relative flex flex-col text-center tracking-wide border-4 hover:bg-white border-white 2xl:pt-52 2xl:pb-10 xl:pt-32 xl:pb-10   rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl rounded-br-4xl">
            <p className="font-bold 2xl:text-xl xl:text-lg">Tofu Chili</p>
            <p className=" font-segoe 2xl:text-base 2xl:pt-8 xl:pt-8 xl:px-2 xl:text-xs leading-6">
              Lorem ipsum dolor sit , <br /> consectetur adipiscing elit, sed{' '}
              <br /> do eiusmod tempor
            </p>
          </div>
        </motion.div>
        <motion.div
          className="2xl:w-1/4 relative 2xl:mr-8 xl:mr-4 xl:w-1/4"
          whileHover={{ scale: 1.1, transition: { delay: 0 } }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: 'spring', delay: 0.3 }
          }}
          initial={{ y: 100, opacity: 0 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className=" absolute flex w-fit mx-auto left-0 right-0 2xl:bottom-60 z-10 xl:bottom-40">
            <img src={dish4} className="2xl:w-full xl:w-44" loading="lazy" />
          </div>
          <div className="relative flex flex-col text-center tracking-wide border-4 hover:bg-white border-white 2xl:pt-52 2xl:pb-10 xl:pt-32 xl:pb-10   rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl rounded-br-4xl">
            <p className="font-bold 2xl:text-xl xl:text-lg">Egg and Cocumber</p>
            <p className=" font-segoe 2xl:text-base 2xl:pt-8 xl:px-2 xl:pt-8 xl:text-xs leading-6">
              Lorem ipsum dolor sit , <br /> consectetur adipiscing elit, sed{' '}
              <br /> do eiusmod tempor
            </p>
          </div>
        </motion.div>
      </div>
      <div className="2xl:mt-40 xl:mt-12 flex">
        <div className="flex ">
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
          <div className="w-1/2 2xl:mt-52 2xl:pl-24 xl:mt-24 xl:pl-14 2xl:mr-0 ">
            <h1 className="2xl:text-5xl xl:text-4xl">
              Welcome to Our Restaurant
            </h1>
            <p className="font-segoe 2xl:text-xl xl:text-md 2xl:pt-8 xl:pt-6">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt <br /> ut labore et dolore magna
              aliqua.
            </p>
            <div>
              <div className="flex 2xl:w-fit xl:q-5/6 text-lg pt-10">
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
