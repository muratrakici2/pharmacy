import React, { useState } from 'react'
import medicine from "../medicine.json"
import Item from './Item';

const Medicines = () => {
    const [data, setData] = useState(medicine);

    const searchMedicine=(e)=> {
        const search = e.target.value;
        const filteredUser = medicine.filter((data) => {
            return data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        });
        setData(filteredUser);
    }
    return (
        <div className="medicines-main">
            <h3>İLAÇLAR</h3>
            <input type="text" placeholder="İlaç Ara" onChange={searchMedicine} />
            <div className="medicine-contanier">
                {data.map((i) => (
                   <Item key={i.id}item={i}/>
                ))}
            </div>
        </div>
    )
}

export default Medicines
