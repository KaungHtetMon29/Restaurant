import CustButton from 'components/button/button'
import menu from '../Assets/Mask group.png'
import dish from '../Assets/dish-2 1.png'
import insta from '../Assets/svgs/insticon.svg'
import fb from '../Assets/svgs/fbicon.svg'
import twitter from '../Assets/svgs/twitter.svg'
import { motion, spring } from 'framer-motion'

export function Home() {
  return (
    <div className="flex relative 2xl:mx-82 2xl:mb-40 xl:mx-60 xl:mb-20">
      <div className="2xl:text-7xl w-1/2 2xl:pt-60 xl:pt-60 xl:text-5xl overflow-hidden">
        <motion.p
          className="tracking-wide font-semibold "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
        >
          We provide the <br /> best food for you
        </motion.p>
        <motion.p
          className="font-segoe font-normal 2xl:text-xl 2xl:mt-24 xl:text-lg xl:mt-12 w-3/4 2xl:leading-10 xl:leading-8 ..."
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.1 } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.div
          className="flex w-2/3 2xl:text-lg 2xl:pt-10 xl:text-lg xl:pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
        >
          <div className="w-1/3 ">
            <CustButton txt="Menu" clr="bg-custblack" />
          </div>
          <div className="w-2/3">
            <CustButton txt="Book a Table" clr="bg-custorange" />
          </div>
        </motion.div>
        <motion.div
          className="flex 2xl:w-1/3 2xl:mt-20 xl:mt-10 xl:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
        >
          <div className="xl:w-1/3 ">
            <img src={fb} />
          </div>
          <div className="xl:w-1/3 ">
            <img src={insta} />
          </div>
          <div className="xl:w-1/3 ">
            <img src={twitter} />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex m-auto mr-0 relative  w-fit"
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: { duration: 0.6, type: 'spring' }
        }}
      >
        <div className="2xl:w-11/12 2xl:m-auto 2xl:mt-40 xl:m-auto xl:mt-36 xl:w-10/12  xl:mr-0">
          <img src={menu} alt="" />
        </div>
      </motion.div>
      <motion.div
        className="absolute 2xl:bottom-0 2xl:right-1/4 xl:right-1/4 xl:bottom-0"
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: { duration: 0.4, type: 'spring', delay: 0.2 }
        }}
      >
        <img src={dish} alt="" className="" />
      </motion.div>
    </div>
  )
}
