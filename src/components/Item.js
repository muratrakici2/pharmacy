import React, { useContext, useRef } from "react";
import { MedicineContext } from "./Context";

const Item = ({ items }) => {
  const context = useContext(MedicineContext);
  const myAlert = useRef(null);
  const add = (e) => {
    context.addCart(e);
    myAlert.current.classList.remove("animasyon");
    setTimeout(() => {
      myAlert.current.classList.add("animasyon");
    }, 1);
  };
 
  return (
    <React.Fragment>
      <div ref={myAlert} className="myalert">
        Ürün Sepete Eklendi &#10003;
      </div>
      {items.map((item) => (
        <div className="medicine" key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.brand}</p>
          <h5>{item.price} ₺</h5>
          <button onClick={() => add(item)}>Sepete Ekle</button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Item;
