import { useEffect } from "react"

const Home = () => {
    useEffect(()=>{
        fetch("http://localhost:3001/")
    })
  return (
    <div>
        
    </div>
  )
}

export default Home