import React, { useContext } from 'react'
import { MedicineContext } from './Context'



const Item = ({ item,alert }) => {
    const context = useContext(MedicineContext);
    const add = (e) =>{
        alert();
        context.addCart(e);
    }


    return (
        <div className="medicine" key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.brand}</p>
            <h5>{item.price} ₺</h5>
            <button onClick={() => add(item)}>Sepete Ekle</button>
        </div>
    )
}

export default Item
