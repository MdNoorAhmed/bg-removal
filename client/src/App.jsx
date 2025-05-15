import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentInfo from './pages/PaymentInfo'



const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
<ToastContainer position='bottom-right'/>
<Navbar/>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/result' element={<Result/>}/>
<Route path='/buy' element={<BuyCredit/>}/>
<Route path='/payment-info' element={<PaymentInfo />} />

      </Routes>
    <Footer/>
    </div>
  )
}

export default App
