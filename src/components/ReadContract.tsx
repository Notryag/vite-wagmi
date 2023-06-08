
export function ReadContract() {
  return (
    <div>
      <h1>Read Contract</h1>
      <div>
        <TotalSupply/>
        <br/>
        <BalanceOf></BalanceOf>
      </div>
    </div>
  )
}

function TotalSupply() {
  // useContractRead
  return (
    <div>
      total supply
    </div>
  )
}

function BalanceOf() {
  return (
    <div>
      balance of
    </div>
  )
}