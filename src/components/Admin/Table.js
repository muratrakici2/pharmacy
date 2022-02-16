import React from 'react'
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

const Table = ({ data }) => {
    let history = useHistory();
    function detail(e) {
        const db = firebase.firestore();
        var orderRef = db.collection("orders").doc(e);
        return orderRef.update({
            read: true
        }).then(() => {
            history.push("/order-details/" + e);
        })
    }
    return (
        <div className='table-container'>
            <table>
                <tbody>
                    <tr>
                        <th>Okundu</th>
                        <th>Kişi</th>
                        <th>Tarih</th>
                        <th>Detay</th>
                    </tr>
                    {data.map((i) => (
                        <tr key={i.id}>
                            <td><div className={i.read ? "green" : "red"}></div></td>
                            <td>{i.firstName} {i.lastName}</td>
                            <td>{i.time.toDate().toLocaleString()}</td>
                            <td ><button onClick={() => detail(i.id)}>Detay</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
