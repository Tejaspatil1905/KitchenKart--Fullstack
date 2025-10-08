import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Navbar from './components/navbar/navbar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'

  import { ToastContainer} from 'react-toastify';

const App = () => {

  const url = "http://localhost:4000"
  

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add url={url}/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/" element={<Add/>}/>
      </Routes>

      </div>

    </div>
  )
}

export default App
