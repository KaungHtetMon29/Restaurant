type adv = {
  img: any
  head: string
  para: string
}
function Adv({ img, head, para }: adv) {
  return (
    <div className="flex flex-col w-1/3 mx-4 rounded-2xl shadow-xl border-custorange bg-white px-12 py-8 font-segoe items-center">
      <div>
        <img src={img} width={100} />
      </div>
      <div className="font-bold text-2xl text-center mt-12">
        <h1>{head}</h1>
      </div>
      <div className="text-center mt-12 leading-7 text-md">
        <p>{para}</p>
      </div>
    </div>
  )
}
export default Adv
