import { Customercard } from 'components/customercards/customercard'

export function Hcustomer() {
  return (
    <div className="pb-20">
      <div>
        <div className="2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl pt-32 text-center">
          <p>Our Happy Customers</p>
        </div>
        <div className=" lg:pt-20 md:pt-10 font-segoe 2xl:font-light xl:font-normal md:font-normal text-xl">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Customercard />
      </div>
    </div>
  )
}
