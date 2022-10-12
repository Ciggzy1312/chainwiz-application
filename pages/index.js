import Head from "next/head"
import Image from "next/image"
import bg from "../images/bg-main-desktop.png"

export default function Home() {
  return (
    <div className="relative min-h-screen font-sg">

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>

      <div className="absolute"></div>

      <div className="absolute"></div>

      <div className="flex">

        <div className="">
          <Image className="h-screen" src={bg} width="" height="" alt="alt" />
        </div>

        <div className="">
          <form className="">

            <div className="">
              <label className="block">CARDHOLDER NAME</label>
              <input className="" type="text" placeholder="e.g. Jane Appleseed" />
            </div>

            <div className="">
              <label className="block">CARD NUMBER</label>
              <input className="" type="number" placeholder="e.g. 1234 5678 9123 0000" />
            </div>

            <div className="flex">

              <div className="">
                <label className="block">EXP. DATE (MM/YY)</label>

                <div className="">
                  <input className="" type="text" placeholder="MM" />
                  <input className="" type="text" placeholder="YY" />
                </div>
              </div>

              <div className="">
                <label className="block">CVC</label>
                <input className="" type="number" placeholder="e.g. 123" />
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
