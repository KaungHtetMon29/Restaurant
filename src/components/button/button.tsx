import React from 'react'
import { motion } from 'framer-motion'
type custprops = {
  txt: string
  clr: string
}
function CustButton({ txt, clr }: custprops) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <button
        className={`z-10 2xl:px-8 2xl:py-3 xl:px-4 xl:py-2  text-white  ${clr} rounded-br-2xl rounded-tl-2xl rounded-bl-md rounded-tr-md`}
      >
        {txt}
      </button>
    </motion.div>
  )
}
export default CustButton
