import { useState } from "react";


const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    return (
        <div>
            <input type="text" placeholder='email' onChange={(e)=> setEmail(e.target.value)} />
            <input type="text" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={(e)=> {
                e.preventDefault();
                fetch("http://localhost:3000/signin", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"email": email, "password": password})
                }).then(response => {
                    return response.json()
                })
            }}>Submit</button>
        </div>
    )
}

export default Signin