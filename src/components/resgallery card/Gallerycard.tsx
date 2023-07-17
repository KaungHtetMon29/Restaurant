import res1 from 'Assets/res1.jpg'
import { motion } from 'framer-motion'

type Ginput = {
  name: string
  about: string
  img: any
}
function Gcard({ name, about, img }: Ginput) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { delay: 0 } }}
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', delay: 0 }}
      exit={{ y: 100, opacity: 0 }}
      className=" mx-2 my-4  flex flex-col bg-white px-4 py-8 w-1/4 shadow-xl rounded-xl"
    >
      <div className="">
        <img src={img} className="rounded-xl" loading="lazy" />
      </div>
      <div className="">
        <h1 className="font-segoe font-bold text-custorange py-2 text-xl">
          {name}
        </h1>
        <p className="font-segoe tracking-tight leading-5 text-xs text-custblack">
          {about}
        </p>
      </div>
    </motion.div>
  )
}
export default Gcard
