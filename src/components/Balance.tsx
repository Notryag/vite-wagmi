import {Address, useAccount, useBalance} from "wagmi";
import {useState} from "react";

export function Balance() {
  return (
    <>
      <h1>Balance</h1>
      <div>
        <AccountBalance></AccountBalance>
      </div>
      <div>
        <FineBalance/>
      </div>
    </>
  )
}

export function AccountBalance() {
  const {address} = useAccount()
  const {data, refetch} = useBalance({
    address
  })
  return (
    <div>
      {data?.formatted ?? 'none'}
      <button onClick={() => refetch()}>refresh</button>
    </div>
  )
}

export function FineBalance() {
  const [address, setAddress] = useState('')
  const {data, isLoading, refetch, error} = useBalance({
    address: address as Address
  })

  const [value, setValue] = useState('')
  return (
    <div>
      Find Balance : {' '}
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder='wallet address'
        value={value}
      />
      <button onClick={() => (value === address ? refetch() : setAddress(value))}>
        {isLoading ? 'fetching' : 'fetch'}
      </button>
      <div>{data?.formatted}</div>
      <div>{error?.message}</div>
    </div>
  )
}