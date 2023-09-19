import { Getpromo } from 'layout/promocode'
import React from 'react'
import Avatar from 'components/Avatar'
import CustButton from '../components/button/button'
import NavBar from 'layout/navbar'
import { Home } from 'pages/home'
import { Sdish } from 'pages/specialdishes'
import Chef from 'pages/chef'
import circle from '../Assets/svgs/circles.svg'
import textcircle from '../Assets/svgs/textcircle.svg'
import leavehome from '../Assets/svgs/leaveshome.svg'
import dish from '../Assets/svgs/dish.svg'
import onion from '../Assets/svgs/chef.svg'
import { Slider } from 'utils/slider'
import { Hcustomer } from 'pages/happycustomer'
import customer from '../Assets/svgs/customer.svg'
import { Foter } from 'pages/footer'
function Main() {
  return (
    <div className="">
      <div className="absolute w-96">
        <img src={circle} />
      </div>
      <div className="absolute 2xl:left-20 2xl:top-60 xl:left-22 xl:top-32 lg:top-24 lg:left-10 xl:w-24 lg:w-24 ...">
        <img src={textcircle} />
      </div>
      <div className="absolute 2xl:right-36 2xl:mt-36 xl:right-36 xl:mt-32 xl:w-2/5 lg:right-36 lg:mt-32 lg:w-2/5">
        <img src={leavehome} />
      </div>
      <div className="">
        <div className="">
          <Home />
        </div>
        <div className="bg-custgray ">
          <img
            src={dish}
            className="absolute 2xl:right-0 2xl:w-fit xl:w-4/5 xl:right-0 xl:mt-10 2xl:mt-0 lg:right-0 lg:w-3/5 lg:mt-10"
          />
          <div className="relative">
            <Sdish />
          </div>
        </div>
        <div className="relative">
          <img src={onion} className="absolute top-0 left-0" />
          <Chef />
        </div>

        <div className="relative">
          <div className="bg-custgray ">
            <div className="absolute mt-32">
              <img src={customer} />
            </div>
            <Hcustomer />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main
