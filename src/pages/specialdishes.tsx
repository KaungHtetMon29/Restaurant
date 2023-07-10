import dish1 from '../Assets/dish-1 1.png'
import dish2 from '../Assets/dish-3 1.png'
import dish3 from '../Assets/dish-4.png'
import dish4 from '../Assets/dish-5.png'
import dish from '../Assets/dish-2 2.png'
import CustButton from 'components/button/button'

export function Sdish() {
  return (
    <div className="flex flex-col justify-center mx-82 z-48">
      <div className="flex flex-col">
        <div className="text-7xl pt-32 text-center">
          <p>Our Special Dishes</p>
        </div>
        <div className=" pt-20 font-segoe font-light text-xl">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-32 ">
        <div className="w-1/4 relative mr-8">
          <div className=" absolute flex w-fit mx-auto left-0 right-0 bottom-60 z-10">
            <img src={dish1} className="w-full" />
          </div>
          <div className="relative flex flex-col text-center tracking-wide border-4 hover:bg-white border-white pt-52 pb-10   rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl rounded-br-4xl">
            <p className="font-bold text-xl">Lumpia with Suace</p>
            <p className=" font-segoe text-base pt-8 leading-6">
              Lorem ipsum dolor sit , <br /> consectetur adipiscing elit, sed{' '}
              <br /> do eiusmod tempor
            </p>
          </div>
        </div>
        <div className="w-1/4 relative mr-8">
          <div className=" absolute flex w-fit mx-auto left-0 right-0 bottom-60 z-10">
            <img src={dish2} className="w-full" />
          </div>
          <div className="relative flex flex-col text-center tracking-wide border-4 hover:bg-white border-white pt-52 pb-10   rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl rounded-br-4xl">
            <p className="font-bold text-xl">Fish and Veggie</p>
            <p className=" font-segoe text-base pt-8 leading-6">
              Lorem ipsum dolor sit , <br /> consectetur adipiscing elit, sed{' '}
              <br /> do eiusmod tempor
            </p>
          </div>
        </div>
        <div className="w-1/4 relative mr-8">
          <div className=" absolute flex w-fit mx-auto left-0 right-0 bottom-60 z-10">
            <img src={dish3} className="w-full" />
          </div>
          <div className="relative flex flex-col text-center tracking-wide border-4 hover:bg-white border-white pt-52 pb-10   rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl rounded-br-4xl">
            <p className="font-bold text-xl">Tofu Chili</p>
            <p className=" font-segoe text-base pt-8 leading-6">
              Lorem ipsum dolor sit , <br /> consectetur adipiscing elit, sed{' '}
              <br /> do eiusmod tempor
            </p>
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className=" absolute flex w-fit mx-auto left-0 right-0 bottom-60 z-10">
            <img src={dish4} className="w-full" />
          </div>
          <div className="relative flex flex-col text-center tracking-wide border-4 hover:bg-white border-white pt-52 pb-10   rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl rounded-br-4xl">
            <p className=" font-bold text-xl">Egg and Cocumber</p>
            <p className=" font-segoe text-base pt-8 leading-6">
              Lorem ipsum dolor sit , <br /> consectetur adipiscing elit, sed{' '}
              <br /> do eiusmod tempor
            </p>
          </div>
        </div>
      </div>
      <div className="mt-40 flex">
        <div className="flex">
          <div className="w-1/2 m-auto">
            <img src={dish} alt="" className="w-fit" />
          </div>
          <div className="w-1/2 mt-52 pl-24">
            <h1 className="text-5xl">Welcome to Our Restaurant</h1>
            <p className="font-segoe text-xl pt-8">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt <br /> ut labore et dolore magna
              aliqua.
            </p>
            <div>
              <div className="flex w-4/5 text-lg pt-10">
                <div className="w-1/3">
                  <CustButton txt="Menu" clr="bg-custblack" />
                </div>
                <div className="w-2/3">
                  <CustButton txt="Book a Table" clr="bg-custorange" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
