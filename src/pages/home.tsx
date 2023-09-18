import CustButton from 'components/button/button'
import menu from '../Assets/Mask group.png'
import dish from '../Assets/dish-2 1.png'
import insta from '../Assets/svgs/insticon.svg'
import fb from '../Assets/svgs/fbicon.svg'
import twitter from '../Assets/svgs/twitter.svg'
import { motion, spring } from 'framer-motion'
import { useEffect } from 'react'

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flex relative 2xl:mx-82 2xl:mb-40 xl:mx-60 xl:mb-20 lg:mx-32 lg:mb-20">
      <div className="2xl:text-6xl w-1/2 2xl:pt-60 xl:pt-60 xl:text-5xl lg:pt-52 lg:text-4xl flex flex-col gap-8">
        <motion.p
          className="tracking-wide font-semibold "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
        >
          We provide the <br /> best food for you
        </motion.p>
        <motion.p
          className="font-segoe font-normal 2xl:text-xl 2xl:mt-24 xl:text-lg lg:text-lg xl:mt-12 w-3/4 2xl:leading-10 xl:leading-8 lg:leading-8 ..."
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.1 } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.div
          className="flex 2xl:text-lg 2xl:pt-10 xl:text-lg xl:pt-10 gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
        >
          <div className=" 2xl:pr-4 xl:w-fit lg:w-fit lg:text-base xl:text-lg">
            <CustButton txt="Menu" clr="bg-custblack" />
          </div>
          <div className="2xl:w-fit lg:w-fit lg:text-base xl:text-lg">
            <CustButton txt="Book a Table" clr="bg-custorange" />
          </div>
        </motion.div>
        <motion.div
          className="flex 2xl:w-1/3 2xl:mt-20 xl:mt-10 xl:w-1/2 lg:w-1/2 lg:mt-3 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
        >
          <div className="flex m-0">
            <img src={fb} />
          </div>
          <div className="flex m-0">
            <img src={insta} />
          </div>
          <div className="flex m-0">
            <img src={twitter} />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex m-auto mr-0 relative items-center justify-center  w-fit"
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: { duration: 0.6, type: 'spring' }
        }}
      >
        <div className="2xl:w-11/12 justify-end 2xl:mt-40 xl:m-auto xl:mt-36 xl:w-10/12  xl:mr-0 lg:m-auto lg:mt-32 lg:w-96 flex">
          <img src={menu} alt="" loading="lazy" className="object-contain" />
        </div>
      </motion.div>
      <motion.div
        className="absolute 2xl:bottom-0 2xl:right-1/4 xl:right-1/4 xl:bottom-0 lg:bottom-0 lg:right-1/4"
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: { duration: 0.4, type: 'spring', delay: 0.2 }
        }}
      >
        <img src={dish} alt="" className="xl:w-full lg:w-80" loading="lazy" />
      </motion.div>
    </div>
  )
}
