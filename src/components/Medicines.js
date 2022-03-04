import React, { useState } from 'react'
import medicine from "../medicine.json"
import Item from './Item';

const Medicines = () => {
    const [data, setData] = useState(medicine);
    const [myAlert, setmyAlert] = useState(false)

    const searchMedicine = (e) => {
        const search = e.target.value;
        const filteredUser = medicine.filter((data) => {
            return data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        });
        setData(filteredUser);
    }
    const cartAlert = () => {
        setmyAlert(true)
        setTimeout(() => {
            setmyAlert(false)
        }, 2000);
    }
    return (
        <div className="medicines-main">
            {myAlert&&<div className='myalert'>Ürün Sepete Eklendi &#10003;</div>}
            <h3>İLAÇLAR</h3>
            <input type="text" placeholder="İlaç Ara" onChange={searchMedicine} />
            <div className="medicine-contanier">
                {data.map((i) => (
                    <Item key={i.id} item={i} alert={cartAlert} />
                ))}
            </div>
        </div>
    )
}

export default Medicines
