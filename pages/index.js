import Head from "next/head"
import Entrance from "../components/entrance"
import Header from "../components/header"
import Welcome from "../components/welcome"
import { useMoralis } from "react-moralis"
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

            <main className="relative">
                <Header></Header>
                <Welcome></Welcome>
                {isWeb3Enabled ? (
                    supportedChains.includes(parseInt(chainId).toString()) ? (
                        <Entrance></Entrance>
                    ) : (
                        <div>
                            <BannerStrip
                                text={`Please switch to the supported chain, the supported chain IDs are: ${supportedChains}.`}
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
