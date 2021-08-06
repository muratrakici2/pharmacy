import React from 'react'
import elogo from "../images/e.png"
import entry from "../images/entry.png"
import { Link } from 'react-router-dom';


const Entry = () => {
    return (
        <div className="entry-container">
            <div className="entry-header">
                <img src={elogo} alt="logo"/>
                <h1>ECZACI</h1>
            </div>
            <div className="entry-main">
                <img src={entry} alt="entry"/>
                <div className="entry-text">
                    <h2>SAĞLIK DEPOSU</h2>
                    <h3>En yakın eczaneniz...</h3>
                    <div className="entry-button">
                    <Link to="/login" className="entry-link">Giriş</Link>
                    <Link to="/create-user" className="entry-link">Kayıt</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entry
