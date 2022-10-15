import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Back from "../components/card/back"
import Front from "../components/card/front"
import bg from "../images/bg-main-desktop.png"

export default function Home() {

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [cvc, setCvc] = useState("")

  return (
    <div className="relative min-h-screen font-sg text-lg">

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>


      <div className="absolute top-[16rem] left-[16rem] z-10">
        <Front name={name} number={number} month={month} year={year} />
      </div>

      <div className="absolute bottom-[18rem] left-[20rem] z-10">
        <Back cvc={cvc} />
      </div>

      <div className="flex h-screen">
        <div className="w-[35%] h-full relative">
          <Image className="" src={bg} layout="fill" alt="alt" />
        </div>

        <div className="flex justify-center items-center mx-auto w-[28%]">
          <form className="">

            <div className="my-5">
              <label className="block text[#21092F] my-2 text-base tracking-widest">CARDHOLDER NAME</label>
              <input className="border-[1.5px] border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-full placeholder:text-[#8E8593]" type="text" placeholder="e.g. Jane Appleseed" value={name} onChange={(e)=> setName(e.target.value)} />
            </div>

            <div className="my-5">
              <label className="block text[#21092F] my-2 text-base tracking-widest">CARD NUMBER</label>
              <input className="border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-full placeholder:text-[#8E8593]" type="number" placeholder="e.g. 1234 5678 9123 0000" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>

            <div className="my-5 flex">

              <div className="">
                <label className="block text[#21092F] my-2 text-base tracking-widest">EXP. DATE (MM/YY)</label>

                <div className="">
                  <input className="w-[40%] mr-2 border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 placeholder:text-[#8E8593]" type="text" placeholder="MM" value={month} onChange={(e) => setMonth(e.target.value)} />
                  <input className="w-[40%] mr-2 border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 placeholder:text-[#8E8593]" type="text" placeholder="YY" value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
              </div>

              <div className="w-full">
                <label className="block text[#21092F] my-2 text-base tracking-widest">CVC</label>
                <input className="w-full border border-[hsl(270, 3%, 87%)] rounded-md px-4 py-1.5 w-full placeholder:text-[#8E8593]" type="number" placeholder="e.g. 123" value={cvc} onChange={(e) => setCvc(e.target.value)} />
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
