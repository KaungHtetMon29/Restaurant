export function Searchbox() {
  return (
    <div className="flex  font-segoe flex-col ">
      <p className="text-5xl text-center text-white pb-12">
        Get Our Promo Code by Subscribing To our Newsletter
      </p>
      <div className=" bg-white py-4 px-4 rounded-xl flex w-fit m-auto">
        <div className="flex">
          <form action="">
            <input placeholder="Enter Your Email" className="py-2 px-2 w-96" />
          </form>
          <button className="bg-custorange py-2 px-3 rounded-lg font-semibold text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
