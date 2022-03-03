import React, { useContext } from 'react'
import { MedicineContext } from './Context'



const Item = ({ item }) => {
    const context = useContext(MedicineContext);
console.log("çalıştı")
    const add = (e) =>{
        context.addCart(e);
        document.getElementById(e.id).classList.add("addAnimasyon");
        document.querySelector(".blok").style.display = "block";
        setTimeout(() => {
            document.getElementById(e.id).classList.remove("addAnimasyon")
            document.querySelector(".blok").style.display = "none";
        }, 1800);
    }


    return (
        <div className="medicine" key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.brand}</p>
            <h5>{item.price} ₺</h5>
            <button onClick={() => add(item)}>Sepete Ekle</button>
            <div className="additem" id={item.id}>
                <p>Sepete Eklendi</p>
                <p style={{ fontSize: 50 }}>&#10003;</p>
            </div>
            <div className='blok'></div>
        </div>
    )
}

export default Item
