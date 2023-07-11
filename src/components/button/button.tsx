import React from 'react'
type custprops = {
  txt: string
  clr: string
}
function CustButton({ txt, clr }: custprops) {
  return (
    <div>
      <button
        className={`z-10 2xl:px-8 2xl:py-3 xl:px-4 xl:py-2  text-white  ${clr} rounded-br-2xl rounded-tl-2xl rounded-bl-md rounded-tr-md shadow-xl`}
      >
        {txt}
      </button>
    </div>
  )
}
export default CustButton
