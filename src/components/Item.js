import React, {  useContext } from 'react'
import { MedicineContext } from './Context'



const Item = ({item}) => {
    function add(e) {
       context.addCart(e);
       document.getElementById(e.id).classList.add("addAnimasyon");
       setTimeout(
        () => document.getElementById(e.id).classList.remove("addAnimasyon"), 
        1500
      );
    }
    const context = useContext(MedicineContext);
   
        
    return (
        <div className="medicine" key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.brand}</p>
            <h5>{item.price} ₺</h5>
            <button onClick={() => add(item)}>Sepete Ekle</button>
            <div className="additem" id={item.id}>
                <p>Sepete Eklendi</p>
                <p style={{fontSize:50}}>&#10003;</p>
            </div>
        </div>
    )
}

export default Item
