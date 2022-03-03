import React, { useContext, useEffect, useState, useRef } from 'react'
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
    const buttonRef = useRef(null);
    var db = firebase.firestore();
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var db = firebase.firestore();
                var docRef = db.collection("users").doc(user.uid);
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        setuser(doc.data());
                    } else {
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            }
        });
    }, []);

    const addFile = () => {
        buttonRef.current.disabled = "disabled";
        db.collection("orders").add({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address: user.address,
            order: context.cart,
            time: firebase.firestore.Timestamp.fromDate(new Date()),
            total,
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
            {context.cart.length !== 0 ?
                <>
                    <Header />
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
                                        <td><FontAwesomeIcon style={{ color: "gray",cursor:"pointer" }} icon={faTrash} onClick={() => context.delCart(i)} /></td>
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
                            <button className='cart-button' onClick={addFile} ref={buttonRef}>Siparişi Ver</button>
                        </div>
                        <Link to="/" className="cart-link">Alışverişe Devam Et</Link>
                    </div>
                </> : <EmptyCart />}
        </div>
    )
}

export default Cart
