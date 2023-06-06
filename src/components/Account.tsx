import {useAccount, useEnsName} from "wagmi";


export function Account() {
  const {address} = useAccount()
  const {data: ensName} = useEnsName()

  return (
    <div>
      <h1>Account</h1>
      {ensName ?? address}
      {ensName ? `(${address})` : null}
    </div>
  )
}