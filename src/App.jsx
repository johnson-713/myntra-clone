import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Login } from './Pages/Login'
import { Cart } from './Pages/Cart'
import { Footer } from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category='men' />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App
