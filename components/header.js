import { ConnectButton } from "web3uikit"
import Image from "next/image"
import IconPNG from "../public/icon.png"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="pt-10 pl-5 border-b-2 flex flex-row">
            <Link href="/">
                <div className="w-20 h-20">
                    <Image
                        className="cursor-pointer object-contain"
                        src={IconPNG}
                        height={50}
                        width={50}
                    ></Image>
                </div>
            </Link>
            <div className="ml-auto px-4" id="connectButton">
                <ConnectButton moralisAuth={false} size="small" />
            </div>
        </nav>
    )
}
