import {configureChains, createConfig, mainnet} from "wagmi";
import {goerli} from 'wagmi/chains'
import { MetaMaskConnector} from 'wagmi/connectors/metaMask'
import {sepolia} from 'wagmi/chains'

import {alchemyProvider} from 'wagmi/providers/alchemy'
import  {infuraProvider} from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
const { chains, publicClient, webSocketPublicClient} = configureChains(
    [mainnet, ...(import.meta.env.DEV ? [goerli, sepolia] : [])],
    [
        alchemyProvider({apiKey: import.meta.env.VITE_ALCHEMY_API_KEY}),
        infuraProvider({apiKey: import.meta.env.VITE_ALCHEMY_API_KEY}),
        publicProvider()
    ]
)
console.log(import.meta.env.VITE_ALCHEMY_API_KEY, 'import.meta.env.VITE_ALCHEMY')
export const config = createConfig({
    autoConnect: false,
    // Connectors used for linking accounts
    connectors: [
        new MetaMaskConnector({chains})
    ],
    publicClient,
    webSocketPublicClient
})