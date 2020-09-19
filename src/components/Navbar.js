import React from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {

    //since my react -v is new i had to use React.useState instead of useState only
    const [click, setClick] = React.useState(false);
    //
    const [button, setButton] = React.useState(true);



    //
    //when the click happends the setClick state is changed as opposite to relative to what it was
    const handleClick = () => setClick(!click);

    //when you click on button
    const closeMobileMenu = () => setClick(false);


    //
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

   

    window.addEventListener('resize',showButton);


    return (

        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <MdFingerprint className='navbar-icon' />
                 LAVISH
             </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/services' className="nav-links" onClick={closeMobileMenu}>Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/products' className="nav-links" onClick={closeMobileMenu}>Products</Link>
                            </li>

                            <li className="nav-btn">
                                {button ? (
                                    <Link to='/sign-up' className="btn-link">
                                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                    </Link>
                                ) : (
                                        <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'> SIGN UP</Button>
                                        </Link>
                                    )}
                            </li>

                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
