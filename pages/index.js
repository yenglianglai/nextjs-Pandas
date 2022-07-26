import Head from "next/head"
import Image from "next/image"
import Header from "../components/header"
import { useMoralis } from "react-moralis"
import pinguEatGif from "../public/nom-nom-pingu.gif"
import pinguDeliverGif from "../public/pingu-deliver.gif"

const supportedChains = ["31337", "4"] // hardhat, rinkeby

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <div>
            <Head>
                <title>Pandas</title>
                <meta name="description" content="A decentralized food delivery service" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header></Header>
                {isWeb3Enabled ? (
                    supportedChains.includes(parseInt(chainId).toString()) ? (
                        <div className="flex flex-row p-15 mt-10 place-content-around place-content-center">
                            <a
                                className="basis-1/3 entranceButton rounded-lg overflow-hidden"
                                href="/order"
                            >
                                <Image
                                    className="object-fill"
                                    src={pinguEatGif}
                                    height={450}
                                    width={400}
                                ></Image>

                                <div className="entranceBanner">I'm Hungryyyy!</div>
                            </a>
                            <a
                                className="basis-1/3 entranceButton rounded-lg overflow-hidden"
                                href="/deliver"
                            >
                                <Image
                                    className="object-fill"
                                    src={pinguDeliverGif}
                                    height={450}
                                    width={400}
                                ></Image>
                                <div className="entranceBanner">I'm ready to send Food!</div>
                            </a>
                        </div>
                    ) : (
                        <div className="font-normal">
                            {`Please switch to the supported chain ID, the supported chain IDs are: ${supportedChains}.`}
                        </div>
                    )
                ) : (
                    <div>Please connect to a Wallet</div>
                )}
            </main>
        </div>
    )
}
