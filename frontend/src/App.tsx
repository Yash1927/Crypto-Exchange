import {Routes, Route} from 'react-router-dom'

import Signup from './pages/Auth/Signup'
import Signin from './pages/Auth/Signin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/signup' element = {<Signup/>} />
        <Route path = '/signin' element = {<Signin/>} />
      </Routes>
    </div>
  )
}

export default App