import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import ForgetPassword from './Pages/ForgetPass'
import PassReset from './Pages/PassReset'
import PassResSuc from './Pages/PassResSuc' 


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
        <Route path='/PassReset' element={<PassReset />} />
        <Route path="/PassResSuc" element={<PassResSuc />} />

      </Routes>
    
    </>
  )
}

export default App
