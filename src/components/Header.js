import React, { useContext, useState } from 'react'
import firebase from "../firebase";
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { MedicineContext } from './Context'
import elogo from "../images/e.png"
import HamburgerMenu from './HamburgerMenu';



const Header = () => {
    const [state, setstate] = useState();
    const context = useContext(MedicineContext);
    let { path } = useRouteMatch();
    let result = path.match("admin");

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setstate(user.displayName)
        }
    });

    function userexit() {
        firebase.auth().signOut().then(() => {
            window.location = '/';
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="header">
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={elogo} alt="logo" height={65} />
                <Link to="/" className="header-name">Eczacı</Link>
            </div>
            {result !== null ? null :
                <Link to="/cart" className="header-link">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {context.cart.length === 0 ? " Sepet Boş" : ` Sepet'te ${context.cart.length} ürün var`}
                </Link>
            }
            <div className="header-user">
                <p className="header-link">Hoşgeldin {state}</p>
                <button className="header-button" onClick={userexit} type="button" >Exit <FontAwesomeIcon icon={faSignOutAlt} /></button>
            </div>
            <div className="header-hamburger">
                <HamburgerMenu>
                    <div className="hamburger-user">
                        <div>
                            <p>Hoşgeldin</p>
                            <p>{state}</p>
                        </div>
                        <button className="hamburger-button" onClick={userexit} type="button" >Exit <FontAwesomeIcon icon={faSignOutAlt} /></button>
                    </div>
                    <Link to="/cart" className="hamburger-link">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {context.cart.length === 0 ? " Sepet Boş" : ` Sepet'te ${context.cart.length} ürün var`}
                    </Link>
                </HamburgerMenu>
            </div>

        </div>
    )
}

export default Header
