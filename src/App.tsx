import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import ForgetPassword from './Pages/ForgetPass'
import PassReset from './Pages/PassReset'
import PassResSuc from './Pages/PassResSuc' 
import VerifyCode from './Pages/Auth/VerifyCode'
import Securehealth from './Pages/SecurHealth'
import SecureYAccess from './Pages/SecureYAccess'
import AcctReady from './Pages/AcctReady'
import DocumentRoute from '../src/Pages/DocumentRou'
import AIRouting from '../src/Pages/AIRouting'
import DashBoardLand from './Pages/DashBoardLand'


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
        <Route path="/VerifyCode" element={<VerifyCode />} />
        <Route path="/SecureHealth" element={<Securehealth />} />
        <Route path="/SecureYAccess" element={<SecureYAccess />} />
        <Route path="/AcctReady" element={<AcctReady />} />
        <Route path="/DepartmentPage" element={<DocumentRoute />} />
        <Route path="/ai-support" element={<AIRouting />} />
        <Route path='/DashBoardLand' element={<DashBoardLand />} />
        
       </Routes>

    </>
  )
}

export default App
