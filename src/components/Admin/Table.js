import React from 'react'
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

const Table = ({data}) => {
    let history = useHistory();
    function detail(e) {
        const db = firebase.firestore();
        var orderRef = db.collection("siparis").doc(e);
        return orderRef.update({
            read: true
        }).then(() => {
            history.push("/order-details/"+e);
        })
    }
    return (
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
                            <td><div className={i.read?"green":"red"}></div></td>
                            <td>{i.kisi}</td>
                            <td>{i.datetext}</td>
                            <td ><button onClick={() => detail(i.id)}>Detay</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}

export default Table
