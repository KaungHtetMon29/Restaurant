import dish4 from 'Assets/dish-4.png'
import dish3 from 'Assets/dish-1 1.png'
import 'Assets/styles/customer.css'
import customer from 'Assets/Customer.png'
export function Customercard() {
  var i = 0
  const left = () => {
    let test = document.getElementById('test')!
    i = i - 1200
    test.style.left = `${i}px`
    console.log(test.clientWidth)
  }
  const right = () => {
    let test = document.getElementById('test')!
    i = i + 1200
    test.style.left = `${i}px`
    console.log(test.clientWidth)
  }
  return (
    <div className="flex  relative ">
      <div className="flex relative 2xl:mx-82 xl:mx-64 overflow-hidden">
        <div className=" flex relative pb-72 ..." id="test">
          <div className="relative flex mr-5">
            <div className="absolute 2xl:w-fit xl:w-fit m-auto left-0 right-0 top-10">
              <img src={customer} />
            </div>
            <div className="bg-white shadow-md mt-24 2xl:pt-32 xl:pt-28 2xl:pb-8 xl:pb-6 justify-center font-segoe rounded-tl-4xl rounded-tr-3xl rounded-bl-3xl rounded-br-4xl">
              <div className="px-4">
                <p className="text-center font-normal leading-6 px-4 2xl:text-sm xl:text-sm ...">
                  Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam
                  sit. Vitae congue ultrices neque penatibus mi in quisque. Leo
                  in cursus enim magnis ante. Proin iaculis platea ipsum
                  sagittis ac eu aliquam quis. Ornare tincidunt tempus semper
                </p>
                <p className="text-center font-bold pt-6">Ama Ampomah</p>
                <p className="text-center text-sm">CEO & Founder Inc </p>
              </div>
            </div>
          </div>
          <div className="relative flex mr-5">
            <div className="absolute 2xl:w-fit xl:w-fit m-auto left-0 right-0 top-10">
              <img src={customer} />
            </div>
            <div className="bg-white shadow-md mt-24 2xl:pt-32 xl:pt-28 2xl:pb-8 xl:pb-6 justify-center font-segoe rounded-tl-4xl rounded-tr-3xl rounded-bl-3xl rounded-br-4xl">
              <div className="px-4">
                <p className="text-center font-normal leading-6 px-4 2xl:text-sm xl:text-sm ...">
                  Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam
                  sit. Vitae congue ultrices neque penatibus mi in quisque. Leo
                  in cursus enim magnis ante. Proin iaculis platea ipsum
                  sagittis ac eu aliquam quis. Ornare tincidunt tempus semper
                </p>
                <p className="text-center font-bold pt-6">Ama Ampomah</p>
                <p className="text-center text-sm">CEO & Founder Inc </p>
              </div>
            </div>
          </div>
          <div className="relative flex mr-5">
            <div className="absolute 2xl:w-fit xl:w-fit m-auto left-0 right-0 top-10">
              <img src={customer} />
            </div>
            <div className="bg-white shadow-md mt-24 2xl:pt-32 xl:pt-28 2xl:pb-8 xl:pb-6 justify-center font-segoe rounded-tl-4xl rounded-tr-3xl rounded-bl-3xl rounded-br-4xl">
              <div className="px-4">
                <p className="text-center font-normal leading-6 px-4 2xl:text-sm xl:text-sm ...">
                  Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam
                  sit. Vitae congue ultrices neque penatibus mi in quisque. Leo
                  in cursus enim magnis ante. Proin iaculis platea ipsum
                  sagittis ac eu aliquam quis. Ornare tincidunt tempus semper
                </p>
                <p className="text-center font-bold pt-6">Ama Ampomah</p>
                <p className="text-center text-sm">CEO & Founder Inc </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}