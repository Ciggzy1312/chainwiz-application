import Image from "next/image"
import bg from "../../images/bg-card-front.png"

export default function Front({ name, number, year, month}){
    return (
        <div className="relative w-[24rem] h-[13rem] rounded-lg shadow-2xl bg-[url('../images/bg-card-front.png')]">
            
            <div className="flex items-center py-6 px-4">
                <div className="w-11 h-11 rounded-full bg-white mx-4"></div>
                <div className="w-5 h-5 rounded-full border border-white"></div>
            </div>

            <div className="py-5 px-4">
                <div className="mx-4 text-[26px] tracking-wider text-left text-white">{number ? number.substring(0, 4) + " " + number.substring(4, 8) + " " + number.substring(8, 12) + " " + number.substring(12, 16)  : "0000 0000 0000 0000"}</div>
            </div>

            <div className="px-8 text-white flex justify-between">
                <div className="">{name ? name : "Jane Appleseed"}</div>
                <div className="">{month ? month : "00"}/{year ? year : "00"}</div>
            </div>

        </div>
    )
}