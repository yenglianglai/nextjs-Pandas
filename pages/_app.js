import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import { ResponsiveFontSize } from "react-responsive-font-size"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
