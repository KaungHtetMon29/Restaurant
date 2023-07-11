import CustButton from 'components/button/button'
import menu from '../Assets/Mask group.png'
import dish from '../Assets/dish-2 1.png'
import insta from '../Assets/svgs/insticon.svg'
import fb from '../Assets/svgs/fbicon.svg'
import twitter from '../Assets/svgs/twitter.svg'

export function Home() {
  return (
    <div className="flex relative 2xl:mx-82 2xl:mb-40 xl:mx-52 xl:mb-20">
      <div className="2xl:text-7xl w-1/2 2xl:pt-60 xl:pt-60 xl:text-5xl">
        <p className="tracking-wide font-semibold">
          We provide the <br /> best food for you
        </p>
        <p className="font-segoe font-normal 2xl:text-xl 2xl:mt-24 xl:text-lg xl:mt-12 w-3/4 2xl:leading-10 xl:leading-8  ...">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex w-3/5 2xl:text-lg 2xl:pt-10 xl:text-lg xl:pt-10">
          <div className="w-1/3">
            <CustButton txt="Menu" clr="bg-custblack" />
          </div>
          <div className="w-2/3">
            <CustButton txt="Book a Table" clr="bg-custorange" />
          </div>
        </div>
        <div className="flex w-1/3 2xl:mt-20 xl:mt-10 xl:w-1/2">
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
        <div className="w-11/12 m-auto 2xl:mt-40 xl:mt-36 xl:w-10/12">
          <img src={menu} alt="" />
        </div>
      </div>
      <div className="absolute 2xl:-bottom-16 right-1/3  bottom-0 w-80">
        <img src={dish} alt="" className="" />
      </div>
    </div>
  )
}
