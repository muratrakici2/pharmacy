import React from 'react'
import empty from "../images/empty.png"
import { Link } from 'react-router-dom';


const EmptyCart = () => {
    return (
        <div className="emptycart-container">
            <img src={empty} alt="emptycart" />
            <p>Sepetiniz Boş</p>
            <Link to="/" className="emptycart-link">Alışverişe Devam Et</Link>
        </div>
    )
}

export default EmptyCart
