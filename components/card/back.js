import Image from "next/image";
import skeleton from "../../images/skeleton.png";

export default function Back({cvc}) {
    return (
        <div className="relative w-[24rem] h-[13rem] rounded-lg shadow-2xl bg-gradient-to-tl from-[#d3d4d9] via-[#edecf0] to-[#ffffff] 2xs:w-[20rem] 2xs:h-[11rem]">

            <div className="py-4">
                <div className="bg-[#2f2f2f] w-full h-10 py-6"></div>
            </div>

            <div className="">
                <div className="bg-[#adb5bf] mx-10 rounded">
                    <div className="px-4 py-1 text-right text-base text-white">{cvc ? cvc : "000"}</div>
                </div>
            </div>

            <div className="relative px-10">
                <Image src={skeleton} layout="fill" alt="" />
            </div>

        </div>
    )
}