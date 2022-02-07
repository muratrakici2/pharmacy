import React, { useContext, useEffect, useState } from 'react'
import { MedicineContext } from './Context'
import { Link, useHistory } from 'react-router-dom';
import firebase from "../firebase";
import EmptyCart from "./EmptyCart"
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
    const context = useContext(MedicineContext);
    let history = useHistory();
    const [user, setuser] = useState();
    const [total, setTotal] = useState("");
    var db = firebase.firestore();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setuser(user.email)
        }
    });
    const addFile = () => {
        db.collection("siparis").add({
            kisi: user,
            siparis: context.cart,
            date: new Date(),
            datetext: new Date().toLocaleString(),
            read: false,
        }).then(() => {
            alert("Siparişiniz Alınmıştır.");
        }).then(() => {
            context.clearCart();
        }).then(() => {
            history.push("/");
        });
    }
    useEffect(() => {
        let sum = context.cart.reduce(
            (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.count), 0)
        setTotal(sum.toFixed(2))
    }, [context.cart])

    return (
        <div>
            {context.cart.length !== 0 ? <Header /> : null}
            {context.cart.length !== 0 ?
                <div className="cart-container">
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Ürün</th>
                                <th>Fiyat</th>
                                <th>Adet</th>
                                <th>Toplam</th>
                            </tr>
                            {context.cart.map((i) => (
                                <tr key={i.id}>
                                    <td><FontAwesomeIcon icon={faTrash} onClick={() => context.delCart(i)} /></td>
                                    <td>{i.name}</td>
                                    <td>{i.price} ₺</td>
                                    <td>
                                        <div className="cart-quantity">
                                            <p>{i.count}</p>
                                            <div className="cart-quantity-button">
                                                <button onClick={() => context.increase(i.id)}><FontAwesomeIcon icon={faChevronUp} /></button>
                                                <button onClick={() => context.decrease(i.id)}><FontAwesomeIcon icon={faChevronDown} /></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{(i.price * i.count).toFixed(2)} ₺</td>
                                </tr>

                            ))}
                            <tr>
                                <td colSpan="5" style={{ textAlign: "end" }}>
                                    <button onClick={context.clearCart} className="cart-delete">Sepeti Boşalt</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="cart-total">
                        <h2>Sepet Toplamı</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Toplam</th>
                                    <td>{total} ₺</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={addFile}>Siparişi Ver</button>
                    </div>
                    <Link to="/" className="cart-link">Alışverişe Devam Et</Link>
                </div> : <EmptyCart />}
        </div>
    )
}

export default Cart
