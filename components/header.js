import { ConnectButton } from "web3uikit"
import Image from "next/image"
import IconPNG from "../public/icon.png"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row">
            {/* <h1 className="py-4 px-4 font-semibold text-2xl md:text-3xl"> Feed the Penguine</h1> */}
            <Image src={IconPNG} height={25} width={25}></Image>
            <div className="ml-auto py-2 px-4" id="connectButton">
                <ConnectButton moralisAuth={false} size="small" />
            </div>
        </nav>
    )
}
