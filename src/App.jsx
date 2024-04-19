import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Login } from './Pages/Login'
import { Cart } from './Pages/Cart'

function App() {

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category='men' />} />
        <Route path='/women' element={<ShopCategory category='women' />} />
        <Route path='/kids' element={<ShopCategory category='kids' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
