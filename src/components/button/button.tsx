import React from 'react'
type custprops = {
  txt: string
  clr: string
}
function CustButton({ txt, clr }: custprops) {
  return (
    <div>
      <button
        className={`z-10 px-8 py-3 text-white  ${clr} rounded-br-2xl rounded-tl-2xl rounded-bl-md rounded-tr-md shadow-xl`}
      >
        {txt}
      </button>
    </div>
  )
}
export default CustButton
