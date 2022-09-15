import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faMapLocation,  faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="RAMCHANDRA RADHEYSHYAM JAISWAL" />

        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to ="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to ="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/nirajjaiswal.jaiswal.33"
                >
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/+919415048278"
                >
                    <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e' />
                </a>
                <a
                 target="_blank"
                 rel="noreferrer"
                 href="https://goo.gl/maps/hid6W5AnBDrkxbhH7"
                 >
                    <FontAwesomeIcon icon={faMapLocation} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar