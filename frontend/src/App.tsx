import {Routes, Route} from 'react-router-dom'

import Signup from './pages/Auth/Signup'
import Signin from './pages/Auth/Signin'
import Home from './pages/HomePage/Home'
import Bids from './components/depth/Bids'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path = '/signup' element = {<Signup/>} />
        <Route path = '/signin' element = {<Signin/>} />
        <Route path='/bids' element= {<Bids/>}/>
      </Routes>
    </div>
  )
}

export default App