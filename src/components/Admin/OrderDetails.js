import React, { useEffect, useState } from 'react'
import firebase from "../../firebase";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
    const [data, setData] = useState();
    let { id } = useParams();

    useEffect(() => {
        const db = firebase.firestore();
        var docRef = db.collection("orders").doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setData(doc.data())
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [id])

    return (
        <div className="cart-container">
            {data&&<table>
                <tbody>
                    <tr>
                        <th>Ad Soyad</th>
                        <td>{data.firstName} {data.lastName}</td>
                    </tr>
                    <tr>
                        <th>Tarih</th>
                        <td>{data.time.toDate().toLocaleString()}</td>
                    </tr>
                    <tr>
                        <th>E-mail</th>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <th>Adres</th>
                        <td>{data.address}</td>
                    </tr>
                    <tr>
                        <th>Fiyat</th>
                        <td>{data.total}</td>
                    </tr>
                    <tr>
                        <th>Sipariş</th>
                        <td>
                        {data.order.map((i)=>(
                            <div key={Math.random()}>
                                <p>{i.name} - {i.count}</p>
                            </div>
                        ))}
                        </td>
                    </tr>

                </tbody>
            </table>}
        </div>
    )
}

export default OrderDetails
