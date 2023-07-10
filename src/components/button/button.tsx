import React from 'react'
type custprops = {
  txt: string
  clr: string
}
function CustButton({ txt, clr }: custprops) {
  return (
    <div>
      <button
        className={`z-10 px-8 py-3 text-white  ${clr} rounded-br-xl rounded-tl-xl rounded-bl-sm rounded-tr-sm shadow-xl`}
      >
        {txt}
      </button>
    </div>
  )
}
export default CustButton
