import { useEffect, useState } from "react"
interface Market {
  symbol: string,
  lastPrice: string
}
const Home = () => {
  const [data, setData] = useState<Market[]>([]);
    useEffect(()=>{
        fetch("http://localhost:3001/markets")
        .then(response => response.json())
        .then(data=> {
          setData(data)
          })
    }, [])
  return (
    <div>
        {data.map(((market, i)=> (
          <div key={i}>
            <p>
              {market.symbol}
            </p>
            <p>
              {market.lastPrice}
            </p>
          </div>
        )))}
    </div>
  )
}

export default Home