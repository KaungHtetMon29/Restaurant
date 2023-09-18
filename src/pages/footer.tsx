import logo from 'Assets/svgs/logo.svg'
import insta from '../Assets/svgs/insticon.svg'
import fb from '../Assets/svgs/fbicon.svg'
import twitter from '../Assets/svgs/twitter.svg'
export function Foter() {
  return (
    <div className="flex flex-col 2xl:mx-82 xl:mx-60 lg:mx-32 2xl:pt-40 xl:pt-40 lg:pt-40 pb-52">
      <div className="flex 2xl:pt-40 xl:pt-12 lg:pt-12">
        <div className="flex flex-col w-1/2 ">
          <div>
            <img src={logo} alt="" />
            <p className="pt-12 font-segoe">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore .Learn more
            </p>
          </div>
          <div className="mt-20">
            <h2 className="font-segoe font-bold">OPENING HOURS</h2>
            <div className="flex font-segoe mt-12 2xl:text-md xl:text-xs">
              <div className="flex flex-col 2xl:mr-12 xl:mr-6">
                <div>
                  <p>Monday - Friday</p>
                </div>
                <div className="pt-2">
                  <p>8:00 am to 9:00 pm</p>
                </div>
              </div>
              <div className="flex flex-col 2xl:mr-12  xl:mr-6">
                <div>
                  <p>Monday - Friday</p>
                </div>
                <div className="pt-2">
                  <p>8:00 am to 9:00 pm</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <p>Sunday</p>
                </div>
                <div className="pt-2">
                  <p>CLOSED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex mt-12 mx-12 font-segoe 2xl:text-lg xl:text-sm">
          <div className="w-1/2 flex flex-col">
            <div className="font-bold pb-6">
              <p>NAVIGATION</p>
            </div>
            <div className=" pb-6">
              <p>Menu</p>
            </div>
            <div className=" pb-6">
              <p>AboutUs</p>
            </div>
            <div className=" pb-6">
              <p>Contact Us</p>
            </div>
            <div className=" pb-6">
              <p>Main Dishes</p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="font-bold pb-6">
              <p>Dishes</p>
            </div>
            <div className=" pb-6">
              <p>Fish&Veggie</p>
            </div>
            <div className=" pb-6">
              <p>Tofu Chill</p>
            </div>
            <div className=" pb-6">
              <p>Egg & Cocumber</p>
            </div>
            <div className=" pb-6">
              <p>Lumpia w/Suace</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 font-segoe mt-12">
          <div className="font-bold 2xl:text-lg xl:text-md">
            <p>Follow Us</p>
          </div>
          <div className="flex mt-6">
            <img src={fb} alt="" className="w-16 pr-4" />
            <img src={insta} alt="" className="w-16 pr-4" />
            <img src={twitter} alt="" className="w-16 pr-4" />
          </div>
        </div>
      </div>
      <hr className="border-2 mt-24" />
      <div className="flex font-segoe mt-12">
        <div className="flex-grow">
          <p>
            &copy; 2022 Restaurants. All Right Reserved. Designed by{' '}
            <span className="font-bold"> Isaac</span>
          </p>
        </div>
        <div className="flex left-0">
          <div className="w-fit pr-12">Terms of Service </div>
          <div className="w-fit">Privacy Policy</div>
        </div>
      </div>
    </div>
  )
}
