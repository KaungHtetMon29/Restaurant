import chieftable from 'Assets/Chief table.jpg'
import fund from 'Assets/Fundrising.jpg'
import hh from 'Assets/Happy_hour.png'
import lm from 'Assets/Live Music.jpg'
function EventPage() {
  return (
    <div className="relative flex flex-col items-center max-w-6xl mx-auto">
      <div className="my-64  text-custblack font-segoe  items-center gap-12 flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-center font-bold text-6xl">Events</h1>
          <hr className="border-4 rounded-xl border-custorange w-64" />
        </div>
        <div className="flex flex-col items-center gap-6">
          <p className="text-4xl font-bold text-custorange text-center leading-relaxed">
            Welcome to our event page, where a world of exciting opportunities
            awaits you!
          </p>
          <p className="text-center text-lg text-custblack leading-9">
            Our website's event section is a treasure trove of diverse and
            captivating experiences, designed to cater to every interest and
            passion. Whether you're a music enthusiast, a fitness junkie, a
            foodie, or an art connoisseur, we have something special for you.
            From live concerts that will make your heart race to wellness
            workshops that will soothe your soul, our events cover a spectrum of
            interests and bring together like-minded individuals to connect,
            learn, and celebrate. Dive into our event hero session to discover a
            rich tapestry of activities, each carefully curated to provide
            unforgettable moments and unforgettable memories. Join us on this
            exciting journey of exploration, learning, and fun – there's always
            something happening here, and we can't wait to share it with you!
          </p>
        </div>
      </div>
      <div className="mt-0 mb-96 gap-48 flex flex-col">
        <div className="flex gap-12">
          <div className="font-segoe w-1/2 flex flex-col gap-8 justify-center">
            <h2 className="text-5xl font-bold text-custorange">Chef's Table</h2>
            <p className="text-lg">
              Welcome to the Chief's Table Gala, a culinary extravaganza like no
              other. Prepare to embark on a tantalizing journey of taste and
              sophistication as our master chefs weave their culinary magic into
              a carefully curated multi-course menu, showcasing the finest
              ingredients and innovative techniques. This exclusive event
              promises a night of exquisite flavors, impeccable service, and a
              captivating ambiance that will leave you with unforgettable
              memories. Join us Now!!!
            </p>
          </div>
          <div className="w-1/2">
            <div className="object-fill">
              <img
                src={chieftable}
                alt=""
                className="h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="w-1/2">
            <div className="object-fill">
              <img src={fund} alt="" className="h-96 w-full object-cover" />
            </div>
          </div>
          <div className="font-segoe w-1/2 flex flex-col gap-8 justify-center">
            <h2 className="text-5xl font-bold text-custorange">
              Fundrising Event
            </h2>
            <p className="text-lg">
              Join us at [Restaurant Name] for an evening of culinary
              enchantment with a purpose! Our Fundraising Event promises an
              extraordinary dining experience that blends gastronomic excellence
              with the spirit of giving. On [Event Date], immerse yourself in an
              exquisite menu prepared by our talented chefs, specially curated
              to delight your senses. By attending, you're not only treating
              your palate to a memorable feast but also supporting a noble cause
              close to our hearts. Let's come together for an unforgettable
              night of delicious food, compassion, and community.
            </p>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="font-segoe w-1/2 flex flex-col gap-8 justify-center">
            <h2 className="text-5xl font-bold text-custorange">Happy Hour</h2>
            <p className="text-lg">
              Get ready to elevate your evenings with our Happy Hour event! Join
              us every day from 6pm to 9pm for a fantastic celebration of good
              times and great deals. Sip on refreshing cocktails expertly
              crafted by our mixologists, savor a wide selection of discounted
              appetizers, and enjoy the lively ambiance that's perfect for
              catching up with friends or unwinding after a busy day. Our Happy
              Hour promises to add an extra layer of happiness to your day, so
              mark your calendar and join us for the ultimate evening of
              relaxation and enjoyment.
            </p>
          </div>
          <div className="w-1/2">
            <div className="object-fill">
              <img src={hh} alt="" className="h-96 w-full object-cover" />
            </div>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="w-1/2">
            <div className="object-fill">
              <img src={lm} alt="" className="h-96 w-full object-cover" />
            </div>
          </div>
          <div className="font-segoe w-1/2 flex flex-col gap-8 justify-center">
            <h2 className="text-5xl font-bold text-custorange">Live Music</h2>
            <p className="text-lg">
              Immerse yourself in the perfect blend of dining and entertainment
              at Our Restaurant as we present our Live Music Event. Join us
              everyday for an unforgettable night filled with captivating
              melodies and exquisite flavors. Our talented musicians will set
              the stage for an enchanting evening, serenading you with a diverse
              repertoire while you savor our culinary delights and sip on your
              favorite beverages. Whether you're sharing a romantic dinner or
              enjoying a night out with friends, our Live Music Event promises
              to be a harmonious experience that will leave you with cherished
              memories. Come, unwind, and let the music transport you to a world
              of pure delight.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EventPage
