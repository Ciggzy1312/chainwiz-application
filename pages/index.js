import Head from "next/head"
import Image from "next/image"
import bg from "../images/bg-main-desktop.png"

export default function Home() {
  return (
    <div className="relative min-h-screen font-sg text-lg">

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex h-screen">

        <div className="w-[35%] h-full relative">
          <Image className="" src={bg} layout="fill" alt="alt" />
        </div>

        <div className="flex justify-center items-center mx-auto w-[28%]">
          <form className="">

            <div className="my-5">
              <label className="block text[#21092F] my-2 text-base tracking-widest">CARDHOLDER NAME</label>
              <input className="border-[1.5px] border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-full placeholder:text-[#8E8593]" type="text" placeholder="e.g. Jane Appleseed" />
            </div>

            <div className="my-5">
              <label className="block text[#21092F] my-2 text-base tracking-widest">CARD NUMBER</label>
              <input className="border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-full placeholder:text-[#8E8593]" type="number" placeholder="e.g. 1234 5678 9123 0000" />
            </div>

            <div className="my-5 flex">

              <div className="">
                <label className="block text[#21092F] my-2 text-base tracking-widest">EXP. DATE (MM/YY)</label>

                <div className="">
                  <input className="w-[40%] mr-2 border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-1/5 placeholder:text-[#8E8593]" type="text" placeholder="MM" />
                  <input className="w-[40%] mr-2 border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-1/5 placeholder:text-[#8E8593]" type="text" placeholder="YY" />
                </div>
              </div>

              <div className="w-full">
                <label className="block text[#21092F] my-2 text-base tracking-widest">CVC</label>
                <input className="w-full border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-full placeholder:text-[#8E8593]" type="number" placeholder="e.g. 123" />
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
