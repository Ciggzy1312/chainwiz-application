import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Back from "../components/card/back"
import Front from "../components/card/front"
import bg from "../images/bg-main-desktop.png"
import Complete from "../images/icon-complete.svg"

export default function Home() {

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [cvc, setCvc] = useState("")

  const [success, setSuccess] = useState(false)

  const [errors, setErrors] = useState({})

  const errorValid = {
    name,
    number,
    month,
    year,
    cvc,
  }

  const handleErrors = (e) => {

    e.preventDefault()

    const errors = {
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    }

    if(!errorValid.name) {
      errors.name = "Can't be blank"
    }

    if(!errorValid.number) {
      errors.number = "Can't be blank"
    }
    else if (isNaN(+errorValid.number)) {
      errors.number = "Wrong format, must be a number"
    }
    else if(errorValid.number.length !== 16) {
      errors.number = "Wrong format, must be 16 digits"
    }

    if(!errorValid.month) {
      errors.month = "Can't be blank"
    }
    else if (isNaN(+errorValid.month)) {
      errors.month = "Wrong format, must be a number"
    }
    else if(errorValid.month.length>12 || errorValid.month.length<1) {
      errors.month = "Wrong format, must be between 1 and 12"
    }

    if(!errorValid.year) {
      errors.year = "Can't be blank"
    }
    else if (isNaN(+errorValid.year)) {
      errors.year = "Wrong format, must be a number"
    }

    if(!errorValid.cvc) {
      errors.cvc = "Can't be blank"
    }
    else if (isNaN(+errorValid.cvc)) {
      errors.cvc = "Wrong format, must be a number"
    }
    else if(errorValid.cvc.length !== 3) {
      errors.cvc = "Wrong format, must be 3 digits"
    }

    setErrors(errors)
    
    if(!errors.name && !errors.number && !errors.month && !errors.year && !errors.cvc) {
      console.log("Submitted")
      setSuccess(true)
    }
  }

  return (
    <div className="relative min-h-screen font-sg text-lg">

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>

      <div className="absolute bottom-[18rem] left-[16rem] z-10 md:top-[6rem] md:left-[20rem] sm:top-[6rem] sm:left-[16rem] xs:top-[4rem] xs:left-[12rem]  2xs:top-[4rem] 2xs:left-[12rem]">
        <Back cvc={cvc} />
      </div>

      <div className="absolute top-[16rem] left-[12rem] z-10 md:top-[14rem] md:left-[10rem] sm:top-[14rem] sm:left-[8rem] xs:top-[11rem] xs:left-[4rem] 2xs:top-[11rem] 2xs:left-[4rem]">
        <Front name={name} number={number} month={month} year={year} />
      </div>

      <div className="flex h-screen md:flex-col sm:flex-col xs:flex-col 2xs:flex-col">
        <div className="w-[35%] h-full relative md:w-full md:h-[40%] sm:w-full sm:h-[40%] xs:w-full xs:h-[35%] 2xs:w-full 2xs:h-[30%]">
          <Image className="" src={bg} layout="fill" alt="alt" />
        </div>

        <div className="flex justify-center items-center mx-auto w-[28%] md:w-[60%] md:my-14 sm:w-[60%] sm:my-14 xs:w-[60%] xs:my-14  2xs:w-[80%] 2xs:my-24">
          {success ? <div className="w-full text-center">
            <div className="my-10">
              <svg className="mx-auto" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)" /><path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3" /><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stopColor="#6348FE" /><stop offset="1" stop-color="#610595" /></linearGradient></defs></svg>
            </div>

            <div className="my-2 text-2xl text-[#21092F] text-center">THANK YOU</div>
            <div className="text-[#8E8593] text-base">We have added your card details</div>

            <div className="text-white text-center bg-[#21092F] rounded-md w-full mx-2 my-8 py-2">Continue</div>
          </div> : <form className="" onSubmit={handleErrors}>

            <div className="my-5">
              <label className="block text[#21092F] my-2 text-base tracking-widest">CARDHOLDER NAME</label>
              <input className={`border-[1.5px] rounded-md px-4 py-1.5 w-full placeholder:text-[#8E8593] focus:outline-none ${errors.name ? "border-[#FF5252]" : "border-[hsl(270, 3%, 87%)] focus:border-[#600594]"}`} type="text" placeholder="e.g. Jane Appleseed" value={name} onChange={(e)=> setName(e.target.value)} />
              <p className="text-[#FF5252] text-xs py-1">{errors.name}</p>
            </div>

            <div className="my-5">
              <label className="block text[#21092F] my-2 text-base tracking-widest">CARD NUMBER</label>
              <input className={`border rounded-md px-4 py-1.5 w-full placeholder:text-[#8E8593] focus:outline-none ${errors.number ? "border-[#FF5252]" : "border-[hsl(270, 3%, 87%)] focus:border-[#600594]"}`} type="text" placeholder="e.g. 1234 5678 9123 0000" value={number} onChange={(e) => setNumber(e.target.value)} />
              <p className="text-[#FF5252] text-xs py-1">{errors.number}</p>
            </div>

            <div className="my-5 flex">

              <div className="">
                <label className="block text[#21092F] my-2 text-base tracking-widest">EXP. DATE (MM/YY)</label>

                <div className="w-full flex">

                  <div className="w-[50%] pr-2">
                    <input className={`w-full border rounded-md px-4 py-1.5 placeholder:text-[#8E8593] focus:outline-none ${errors.month ? "border-[#FF5252]" : "border-[hsl(270, 3%, 87%)] focus:border-[#600594]"}`} type="text" placeholder="MM" value={month} onChange={(e) => setMonth(e.target.value)} />
                    <p className="text-[#FF5252] text-xs py-1">{errors.month}</p>
                  </div>

                  <div className="w-[50%] pr-2 mr-2">
                    <input className={`w-full border rounded-md px-4 py-1.5 placeholder:text-[#8E8593] focus:outline-none ${errors.year ? "border-[#FF5252]" : "border-[hsl(270, 3%, 87%)] focus:border-[#600594]"}`} type="text" placeholder="YY" value={year} onChange={(e) => setYear(e.target.value)} />
                    <p className="text-[#FF5252] text-xs py-1">{errors.year}</p>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label className="block text[#21092F] my-2 text-base tracking-widest">CVC</label>
                <input className={`w-full border rounded-md px-4 py-1.5 placeholder:text-[#8E8593] focus:outline-none ${errors.cvc ? "border-[#FF5252]" : "border-[hsl(270, 3%, 87%)] focus:border-[#600594]"}`} type="text" placeholder="e.g. 123" value={cvc} onChange={(e) => setCvc(e.target.value)} />
                <p className="text-[#FF5252] text-xs py-1">{errors.cvc}</p>
              </div>
            </div>

            <div className="my-3">
              <button className="text-white bg-[#21092F] rounded-md w-full py-2">Confirm</button>
            </div>
          </form>}
        </div>
      </div>
    </div>
  )
}
