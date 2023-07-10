import CustButton from 'components/button/button'
import menu from '../Assets/Mask group.png'
import dish from '../Assets/dish-2 1.png'
import insta from '../Assets/svgs/insticon.svg'
import fb from '../Assets/svgs/fbicon.svg'
import twitter from '../Assets/svgs/twitter.svg'

export function Home() {
  return (
    <div className="flex mx-82 mb-40">
      <div className="text-7xl w-1/2 pt-60">
        <p className="tracking-wide font-semibold">
          We provide the <br /> best food for you
        </p>
        <p className="font-segoe font-normal text-xl mt-24 w-3/4 leading-10  ...">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex w-3/5 text-lg pt-10">
          <div className="w-1/3">
            <CustButton txt="Menu" clr="bg-custblack" />
          </div>
          <div className="w-2/3">
            <CustButton txt="Book a Table" clr="bg-custorange" />
          </div>
        </div>
        <div className="flex w-1/3 mt-20">
          <div className="w-1/3">
            <img src={fb} />
          </div>
          <div className="w-1/3">
            <img src={insta} />
          </div>
          <div className="w-1/3">
            <img src={twitter} />
          </div>
        </div>
      </div>
      <div className="flex m-auto mr-0 relative">
        <div className="w-11/12 m-auto mt-40 ">
          <img src={menu} alt="" />
        </div>
      </div>
      <div className="absolute bottom-0 right-1/3 ">
        <img src={dish} alt="" className="" />
      </div>
    </div>
  )
}
