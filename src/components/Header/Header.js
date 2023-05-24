import { Link } from 'react-router-dom';

import LOGO from '../images/logo-header.jpg';
import './Header.css';

const Header = () => {
    return (
        
        <header>
            {/* <div className="container"> */}
            <img src={LOGO} alt="header-logo" className="header-logo"/>
            <nav>
                <Link className='heder-link'>Наши услуги</Link>
                <Link className='heder-link'>Наши цены</Link>
                <Link className='heder-link'>Отзывы</Link>
                <Link className='heder-link'>Наши работы</Link>
            </nav>
            <a className='heder-tel' href="tel:+79002902923">+7(900)290-29-23</a>
            {/* </div> */}
        </header>
        


    )
}

export default Header;
