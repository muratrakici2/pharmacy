import React, { useEffect, useState } from 'react'
import firebase from "../../firebase";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
    const [data, setData] = useState();
    let { id } = useParams();
    var a = useParams();
    console.log(a)

    useEffect(() => {
        const db = firebase.firestore();
        var docRef = db.collection("siparis").doc(id);
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

    console.log(data)
    return (
        <div className="cart-container">
            {data&&<table>
                <tbody>
                    <tr>
                        <th>Ad Soyad</th>
                        <td>{data.kisi}</td>
                    </tr>
                    <tr>
                        <th>Tarih</th>
                        <td>{data.datetext}</td>
                    </tr>
                    <tr>
                        <th>Sipariş</th>
                        <td>
                        {data.siparis.map((i)=>(
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
