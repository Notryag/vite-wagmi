import {useAccount, useConnect, useDisconnect} from "wagmi";


export function Connect() {
    const { connector, isConnected } = useAccount()
    const { connect, connectors,error, isLoading, pendingConnector} = useConnect()
    const { disconnect } = useDisconnect()
    console.log( connectors)
    return (
        <div>
            <div>
                {
                    isConnected && (
                        <button onClick={() => disconnect()}>disconnect from {connector?.name}</button>
                    )
                }
                {
                    connectors
                        .filter(x => x.ready && x.id !== connector?.id)
                        .map(x => (
                            <button key={x.id} onClick={() => connect({connector: x})}>
                                {x.name}
                                {isLoading && x.id === pendingConnector?.id && '(connecting)'}
                            </button>
                        ))
                }
            </div>
            {error  && <div>{(error as any).shortMessage}</div>}
        </div>
    )
}