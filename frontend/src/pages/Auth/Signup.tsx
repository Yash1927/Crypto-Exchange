import { useState } from "react"

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
        <input type="text" placeholder='name' id='name' onChange={(e)=> setName(e.target.value)}/>
        <input type="text" placeholder='email' id='email' onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" placeholder='password' id='password' onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={(e)=> {
          e.preventDefault();
          fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"name":name, "email":email, "password":password})
          }).then(response => {
            return response.json()
          })
        }}>Submit</button>
    </div>
  )
}

export default Signup