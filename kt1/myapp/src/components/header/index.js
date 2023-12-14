import React from 'react';
import Styles from './module.css';
import logo from './img/logo.png';




function Header() {
    return (
        <header className={Styles.Header}>
            <div className='mainblock'>
                <img src={logo} />
                <nav>
                    <ul>
                        <li>О нас</li>
                        <li>Услуги</li>
                        <li>Аренда</li>
                    </ul>
                </nav>

                <button>Связаться</button>
            </div>
        </header>
    );
};

export default Header;