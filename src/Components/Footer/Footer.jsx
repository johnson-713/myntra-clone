import './Footer.css'
import footer_logo from '../Assets/myntra.svg'
import instagram from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintrest_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt='' width={60} />
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className="footer-icons-container">
                <img src={instagram} alt='' />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest} alt='' />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt='' />
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}
