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

      <div className="flex">

        <div className="">
          <Image className="" src={bg} width="" height="" alt="alt" />
        </div>

        <div className="flex justify-center items-center w-full">
          <form className="m-6">

            <div className="">
              <label className="block">CARDHOLDER NAME</label>
              <input className="border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-full placeholder:text-[hsl(270, 3%, 87%)]" type="text" placeholder="e.g. Jane Appleseed" />
            </div>

            <div className="">
              <label className="block">CARD NUMBER</label>
              <input className="border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-full placeholder:text-[hsl(270, 3%, 87%)]" type="number" placeholder="e.g. 1234 5678 9123 0000" />
            </div>

            <div className="flex">

              <div className="">
                <label className="block">EXP. DATE (MM/YY)</label>

                <div className="">
                  <input className="mr-2 border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-1/5 placeholder:text-[hsl(270, 3%, 87%)]" type="text" placeholder="MM" />
                  <input className="mr-2 border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-1/5 placeholder:text-[hsl(270, 3%, 87%)]" type="text" placeholder="YY" />
                </div>
              </div>

              <div className="">
                <label className="block">CVC</label>
                <input className="border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-full placeholder:text-[hsl(270, 3%, 87%)]" type="number" placeholder="e.g. 123" />
              </div>
            </div>

            <div className="my-3">
              <button className="text-white bg-[#21092F] rounded-md w-full py-2">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
