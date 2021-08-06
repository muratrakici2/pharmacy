import React, { useState } from 'react'
import firebase from "../firebase";


const Recete = () => {
    const [tcno, settcno] = useState("");
    const [receteno, setreceteno] = useState("");
    const [user, setuser] = useState();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setuser(user.email)
        }
    });
    var db = firebase.firestore();
    const addFile = (e) => {
        if (tcno.length === 11 && receteno.length === 7) {
            db.collection("recete").add({
                tc: tcno,
                recete: receteno,
                user: user,
                date: new Date(),
            })
            settcno("");
            setreceteno("");
        } else {
            alert("Girilen Bilgiler Eksik")
        }
    }
    const changeInput = (e) => {
        if (e.target.name === "tc") {
            settcno(e.target.value)
        } else {
            setreceteno(e.target.value)
        }
    }
    return (
        <div className="home-main-right">
            <div className="form">
                <div className="title">E-Reçete</div>
                <div className="subtitle">E-Reçete'nizi buradan gönderiniz...</div>
                <div className="input-container ic1">
                    <input autoComplete="off" className="input" type="text" placeholder=" " onChange={changeInput} name="tc" value={tcno} maxLength="11" />
                    <div className="cut"></div>
                    <label className="placeholder">Tc Kimlik Numarası</label>
                </div>
                <div className="input-container ic2">
                    <input autoComplete="off" className="input" type="text" placeholder=" " onChange={changeInput} name="recete" value={receteno} maxLength="7" />
                    <div className="cut"></div>
                    <label className="placeholder">E-Reçete Kodu</label>
                </div>
                <button onClick={addFile} type="text" className="submit">Gönder</button>
            </div>
        </div>
    )
}

export default Recete
