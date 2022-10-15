import Image from "next/image"
import bg from "../../images/bg-card-front.png"

export default function Front(){
    return (
        <div className="relative w-[24rem] h-[13rem] rounded-lg shadow-2xl bg-[url('../images/bg-card-front.png')]">
            
            <div className="flex items-center py-6 px-4">
                <div className="w-11 h-11 rounded-full bg-white mx-4"></div>
                <div className="w-5 h-5 rounded-full border border-white"></div>
            </div>

            <div className="py-5 px-4">
                <div className="text-[26px] tracking-wider text-center text-white">0000 0000 0000 0000</div>
            </div>

            <div className="px-8 text-white flex justify-between">
                <div className="">Jane Appleseed</div>
                <div className="">00/00</div>
            </div>

        </div>
    )
}