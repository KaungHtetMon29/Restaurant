export function Searchbox() {
  return (
    <div className="flex  font-segoe flex-col ">
      <p className="2xl:text-5xl xl:text-2xl text-center text-white 2xl:pb-12 xl:pb-6 font-David 2xl:px-14 xl:px-6 leading-10 ... ">
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
