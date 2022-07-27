import { ConnectButton } from "web3uikit"
import Image from "next/image"
import IconPNG from "../public/icon.png"
import OrderInfo from "../components/orderInfo"
import Link from "next/link"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Order from "../pages/order"

const supportedChains = ["31337", "4"] // hardhat, rinkeby

export default function Header() {
    const router = useRouter()
    const { isWeb3Enabled, chainId } = useMoralis()

    async function returnHome() {
        router.push("/")
    }

    useEffect(() => {
        if (!isWeb3Enabled || !supportedChains.includes(parseInt(chainId).toString())) {
            returnHome()
        }
    }, [isWeb3Enabled, chainId])

    return (
        <div className="sticky top-0 z-50 py-5 pl-10 flex flex-row bg-stone-800">
            <Link href="/">
                <div className="w-10 h-10">
                    <Image
                        className="cursor-pointer object-contain hover:brightness-150"
                        src={IconPNG}
                        height={50}
                        width={50}
                    ></Image>
                </div>
            </Link>
            <div className="ml-auto px-4 flex flex-row">
                <ConnectButton moralisAuth={false} size="small" />
                {isWeb3Enabled ? <OrderInfo></OrderInfo> : <></>}
            </div>
        </div>
    )
}
