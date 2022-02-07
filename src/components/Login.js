import React, { useState } from 'react';
import { Link ,useRouteMatch } from 'react-router-dom';
import firebase from "../firebase";
import medicine from "../images/medicine.png"

const Login = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
   
    let {path} = useRouteMatch();
    function loginuser() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                //window.location = '/';
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (
        <div className="login-container">
            <img src={medicine} alt="medicine"/>
            <div className="login-form">
                {path==="/admin"?<h2>Admin Girişi</h2>:<h2>Üye Girişi</h2>}
                <input type="email" className="form-input" placeholder="E-Mail" onChange={(e)=>setemail(e.target.value)} />
                <input type="password" className="form-input" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
                <button onClick={loginuser} className="form-button">Giriş Yap</button>
                {path==="/admin"?null:<Link to="/create-user" className="form-link">Kayıt Ol</Link>}

                
            </div>
        </div>
    )
}

export default Login
