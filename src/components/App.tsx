/* eslint-disable prettier/prettier */
import React from 'react'
import Avatar from 'components/Avatar'
import CustButton from './button/button'
import NavBar from 'layout/navbar'
import { Home } from 'pages/home'
import { Sdish } from 'pages/specialdishes'
import { Chef } from 'pages/chef'
import circle from '../Assets/svgs/circles.svg'
import textcircle from '../Assets/svgs/textcircle.svg'
import leavehome from '../Assets/svgs/leaveshome.svg'
import dish from '../Assets/svgs/dish.svg'
import onion from '../Assets/svgs/chef.svg'
import { Slider } from 'utils/slider'
import { Hcustomer } from 'pages/happycustomer'
import customer from '../Assets/svgs/customer.svg'
import { Foter } from 'pages/footer'
import { Getpromo } from 'layout/promocode'

function App() {
  return (
    <div className="">
      <div className="absolute">
        <img src={circle} />
      </div>
      <div className="absolute left-48 top-60  ...">
        <img src={textcircle} />
      </div>
      <div className="absolute right-36 mt-36">
        <img src={leavehome} />
      </div>
      <div className="">
        <NavBar />
        <div className="">
          <Home />
        </div>
        <div className="bg-custgray ">
          <img src={dish} className="absolute right-0" />
          <div className="relative">
            <Sdish />
          </div>
        </div>
        <div className="relative">
          <img src={onion} className="absolute top-0 left-0" />
          <Chef />
        </div>
        <div className="bg-custgray ">
          <div className="absolute mt-32">
            <img src={customer} />
          </div>

          <Hcustomer />
        </div>

        <div>
          <Foter />
        </div>
      </div>
    </div>
  )
}

export default App
