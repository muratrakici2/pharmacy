import React, { useState } from 'react';
import firebase from "../firebase";
import list from "../images/list.png"

const CreateUser = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [userName, setuserName] = useState();
    
    function adduser() {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = firebase.auth().currentUser;
                user.updateProfile({
                  displayName: userName,
                  photoURL: "ndsfkjlfhdsafhlısgdgıjlsgşjsadgjş",
                  phoneNumber: 123456789,
                })
            })
            .then(() => {
                alert("Başarı ile Kayıt Olundu");
                window.location = '/';
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <div className="login-container">
            <img src={list} alt="list"/>
            <div className="login-form">
                <h2>Kayıt Ol</h2>
                <input type="email" className="form-input" placeholder="E-Mail" onChange={(e)=>setemail(e.target.value)} />
                <input type="text" className="form-input" placeholder="User Name" onChange={(e)=>setuserName(e.target.value)} />
                <input type="password" className="form-input" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
                <button onClick={adduser} className="form-button">Kayıt Ol</button>
            </div>
        </div>

    )
}

export default CreateUser
