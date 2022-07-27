import Image from "next/image"
import pinguEatGif from "../public/nom-nom-pingu.gif"
import pinguDeliverGif from "../public/pingu-deliver.gif"
import Link from "next/link"

export default function Entrance() {
    return (
        <div className="flex flex-row my-20 place-content-around place-content-center">
            <Link href="/order">
                <div className="basis-1/3 entranceButton rounded-lg overflow-hidden">
                    <div className="entranceBanner text-center text-2xl py-2 font-medium text-sky-200 hover:text-slate-50 bg-stone-800">
                        I'm Hungryyyy!
                    </div>
                    <Image src={pinguEatGif} height={450} width={420}></Image>
                </div>
            </Link>
            <Link href="/deliver">
                <div className="basis-1/3 entranceButton rounded-lg overflow-hidden">
                    <div className="entranceBanner text-center text-2xl py-2 text-sky-200 hover:text-slate-50 bg-stone-800">
                        I'm ready to send Food!
                    </div>
                    <Image src={pinguDeliverGif} height={450} width={420}></Image>
                </div>
            </Link>
        </div>
    )
}
