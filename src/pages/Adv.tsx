import { motion } from 'framer-motion'
type adv = {
  img: any
  head: string
  para: string
}
function Adv({ img, head, para }: adv) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { delay: 0 } }}
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', delay: 0 }}
      exit={{ y: 100, opacity: 0 }}
      className="flex flex-col w-1/3 mx-4 rounded-2xl shadow-xl border-custorange bg-white px-12 py-8 font-segoe items-center"
    >
      <div>
        <img src={img} width={100} />
      </div>
      <div className="font-bold text-2xl text-center mt-12">
        <h1>{head}</h1>
      </div>
      <div className="text-center mt-12 leading-7 text-md">
        <p>{para}</p>
      </div>
    </motion.div>
  )
}
export default Adv
