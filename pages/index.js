import Head from "next/head"
import Image from "next/image"
import Header from "../components/header"
import Welcome from "../components/welcome"
import { useMoralis } from "react-moralis"
import pinguEatGif from "../public/nom-nom-pingu.gif"
import pinguDeliverGif from "../public/pingu-deliver.gif"
import Link from "next/link"
import { BannerStrip } from "web3uikit"

const supportedChains = ["31337", "4"] // hardhat, rinkeby

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <div>
            <Head>
                <title>Penguine</title>
                <meta name="description" content="A decentralized food delivery service" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header></Header>
                <Welcome></Welcome>
                {isWeb3Enabled ? (
                    supportedChains.includes(parseInt(chainId).toString()) ? (
                        <div className="flex flex-row my-20 place-content-around place-content-center">
                            <Link href="/order">
                                <div className="basis-1/3 entranceButton rounded-lg overflow-hidden">
                                    <div className="entranceBanner">I'm Hungryyyy!</div>
                                    <Image src={pinguEatGif} height={450} width={420}></Image>
                                </div>
                            </Link>
                            <Link href="/deliver">
                                <div className="basis-1/3 entranceButton rounded-lg overflow-hidden">
                                    <div className="entranceBanner">I'm ready to send Food!</div>
                                    <Image src={pinguDeliverGif} height={450} width={420}></Image>
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <BannerStrip
                                text={`Please switch to the supported chain ID, the supported chain IDs are: ${supportedChains}.`}
                                type="warning"
                            />
                        </div>
                    )
                ) : (
                    <div>
                        <BannerStrip text="Please connect to a wallet." type="error" />
                    </div>
                )}
            </main>
        </div>
    )
}
