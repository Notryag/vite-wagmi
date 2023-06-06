import './App.css'
import {Connect} from "./components/connect.tsx";
import {useAccount, useBlockNumber} from "wagmi";
import {Connected} from "./components/Connected.tsx";
import {Account, NetworkSwitcher, Balance, ReadContract} from "./components";

function BlockNumber() {
  const {data} = useBlockNumber({watch: true})
  return (<><h1>BlockNumber</h1><div>{data?.toString()}</div></>)
}

function App() {
  const {isConnected} = useAccount()
  return (
    <>
      <h1>wagmi + vite</h1>
      <Connect></Connect>
      <Connected>
        <NetworkSwitcher></NetworkSwitcher>
        <Account></Account>
        <Balance></Balance>
        <BlockNumber/>
        <ReadContract></ReadContract>
      </Connected>
    </>
  )
}

export default App
