import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {WagmiConfig} from "wagmi";
import {config} from "./wagmi.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <WagmiConfig config={config}>
            <App/>
        </WagmiConfig>
    </React.StrictMode>,
)
