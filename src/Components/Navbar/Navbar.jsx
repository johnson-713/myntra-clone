import './Navbar.css'
import logo from '../Assets/myntra.svg'
import cart_logo from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu, setMenu] = useState('shop')

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link to='/'><img src={logo} alt='logo' width={80} /></Link>
        </div>
        <ul className="nav-menu">
            <li onClick={() => setMenu('shop')}><Link style={{textDecoration: 'none', color: '#626262'}} to='/'>Shop{menu === 'shop' ? <hr /> : <></>}</Link></li>
            <li onClick={() => setMenu('men')}><Link style={{textDecoration: 'none', color: '#626262'}} to='/men'>Men{menu === 'men' ? <hr /> : <></>}</Link></li>
            <li onClick={() => setMenu('women')}><Link style={{textDecoration: 'none', color: '#626262'}} to='/women'>Women{menu === 'women' ? <hr /> : <></>}</Link></li>
            <li onClick={() => setMenu('kids')}><Link style={{textDecoration: 'none', color: '#626262'}} to='/kids'>Kids{menu === 'kids' ? <hr /> : <></>}</Link></li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_logo} alt='cart-image' /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
