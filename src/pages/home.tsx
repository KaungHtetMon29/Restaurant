import CustButton from 'components/button/button'
import menu from '../Assets/Mask group.png'
import dish from '../Assets/dish-2 1.png'

export function Home() {
  return (
    <div className="flex mx-82">
      <div className="text-7xl w-1/2 pt-60">
        <p className="tracking-wide font-semibold">
          We provide the <br /> best food for you
        </p>
        <p className="font-segoe font-normal text-xl mt-24 w-3/4 leading-10 bg-cust  ...">
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
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22.5" cy="22.5" r="22" stroke="#101A24" />
              <rect x="8" y="8" width="29" height="29" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image0_3_2035" transform="scale(0.01)" />
                </pattern>
                <image
                  id="image0_3_2035"
                  width="100"
                  height="100"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3TtrFFEchvEnIYIGooh3EBELC0FQsLQXq5Q2gqClCn4BP4GWYm1jIZYWImKXTyBiaZHFgIsWahSNohYzhYjuODvn8v533x8MYcnsOYd9mJm9kYCZmZmZmVlZC7UXkNl24BRwEjgC7AdWgCXgG7DZ7vcV+Nxub9ttDLwDNtqfNqXdwFXgKbAF/By43Su5+KWSk2V2CLgJXAKWK69lri0CN2hOP0OPBh8hA+0CHgDnai8klchB9gHPaC7YM2Ox9gKmtAI8YcZiQNwgd4HTtReRQ8QgF4CLtReRS7Qgy8Dt2ovIKVqQy8Dh2ovIKVqQ67UXkFukIGeA47UXkVukIKu1F1BCpBeGZxON8wG4D6wBo/b2xwn7T/rd3FqgeWCGvi+1BuwpvPaZdJDhMTaBA6UX3leUa8jRBGM8At4kGCerKEF2JhjjeYIxsosSJMUHTu8TjJFdlCDbEowR4tlSlCApfKm9gP8xT0FCcBAxDiLGQcQ4iBgHEeMgYmq9/X4F2Ntj/xRf91kFjk1xvx/ArQTzS3tBnq995tg2Mj0Gf+VTVrdRyckcpNt6yckcpJuPEDEOIsanLDE+QsQ4iJAtCn8xwkEme03zSr0YB5ms6AUdHKRL0esHOEgXHyFifISIcRAxxYPU+mtAJ4Adv93+RPOc/1/OA3cGznkNeNzzPuvA94Hz9lLrE8OXPfcfJ5hzDLxKME5WPmWJcRAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiImyj8FGwEPE4xhZmZmZmZmf/gFZOa1CGaEgBcAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </div>
          <div className="w-1/3">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22.5" cy="22.5" r="22" stroke="#101A24" />
              <path
                d="M18 14C15.243 14 13 16.243 13 19V27C13 29.757 15.243 32 18 32H26C28.757 32 31 29.757 31 27V19C31 16.243 28.757 14 26 14H18ZM18 16H26C27.654 16 29 17.346 29 19V27C29 28.654 27.654 30 26 30H18C16.346 30 15 28.654 15 27V19C15 17.346 16.346 16 18 16ZM27 17C26.7348 17 26.4804 17.1054 26.2929 17.2929C26.1054 17.4804 26 17.7348 26 18C26 18.2652 26.1054 18.5196 26.2929 18.7071C26.4804 18.8946 26.7348 19 27 19C27.2652 19 27.5196 18.8946 27.7071 18.7071C27.8946 18.5196 28 18.2652 28 18C28 17.7348 27.8946 17.4804 27.7071 17.2929C27.5196 17.1054 27.2652 17 27 17ZM22 18C19.243 18 17 20.243 17 23C17 25.757 19.243 28 22 28C24.757 28 27 25.757 27 23C27 20.243 24.757 18 22 18ZM22 20C23.654 20 25 21.346 25 23C25 24.654 23.654 26 22 26C20.346 26 19 24.654 19 23C19 21.346 20.346 20 22 20Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="w-1/3">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22.5" cy="22.5" r="22" stroke="#101A24" />
              <rect x="8" y="8" width="29" height="29" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image0_0_1" transform="scale(0.01)" />
                </pattern>
                <image
                  id="image0_0_1"
                  width="100"
                  height="100"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
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
