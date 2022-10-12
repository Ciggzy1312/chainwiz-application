import Image from "next/image"
import bg from "../images/bg-main-desktop.png"

export default function Home() {
  return (
    <div className="relative min-h-screen">

      <div className="absolute"></div>

      <div className="absolute"></div>

      <div className="flex">

        <div className="">
          <Image className="h-screen" src={bg} width="" height="" alt="alt" />
        </div>

        <div className="">
          <form className="">

            <div className="">
              <label className="">CARDHOLDER NAME</label>
              <input className="" type="text" />
            </div>

            <div className="">
              <label className="">CARD NUMBER</label>
              <input className="" type="number" />
            </div>

            <div className="">

              <div className="">
                <label className="">EXP. DATE (MM/YY)</label>

                <div className="">
                  <input className="" type="text" />
                  <input className="" type="text" />
                </div>
              </div>

              <div className="">
                <label className="">CVC</label>
                <input className="" type="number" />
              </div>
            </div>

            <div className="">
              <button className="">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
