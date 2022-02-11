import React from 'react';
import firebase from "../firebase";
import list from "../images/list.png"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateUser = () => {

    function adduser({ firstName, lastName, email, password, address }) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                const db = firebase.firestore();
                db.collection("users").doc(res.user.uid).set({
                    firstName,
                    lastName,
                    email,
                    address,
                    time: firebase.firestore.Timestamp.fromDate(new Date())
                }).then(() => {
                    const user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName: `${firstName} ${lastName}`,
                    })
                }).then(() => {
                    window.location = '/';
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                });
            }).catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'İsim Çok Kısa')
            .max(50, 'İsim Çok Uzun')
            .required('Bir İsim Yazınız'),
        lastName: Yup.string()
            .min(2, 'Soyisim Çok Kısa')
            .max(50, 'Soyisim Çok Uzun')
            .required('Bir Soyisim Yazınız'),
        email: Yup.string()
            .email("Geçerli Bir E-mail Adresi Yazınız")
            .required('Geçerli Bir E-mail Adresi Yazınız'),
        password: Yup.string()
            .min(8, "Parola En Az 8 Karakterli Olmalı")
            .required("Bir Parola Belirleyiniz"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Parola Eşleşmedi")
            .required("Parolayı Tekrar Giriniz"),
        address: Yup.string()
            .min(10, 'Adres Çok Kısa')
            .max(110, 'Adres Çok Uzun')
            .required('Bir Adres Yazınız'),
    });

    return (
        <div className="login-container">
            <img src={list} alt="list" />
            <div className="login-form">
                <h2>Kayıt Ol</h2>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: "",
                        address: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        adduser(values);
                    }}
                >
                    <Form>
                        <Field name="firstName" placeholder="İsim" className="form-input" />
                        <ErrorMessage name="firstName" component="span" className='form-error' />

                        <Field name="lastName" placeholder="Soyisim" className="form-input" />
                        <ErrorMessage name="lastName" component="span" className='form-error' />

                        <Field name="email" type="email" placeholder="E-mail" className="form-input" />
                        <ErrorMessage name="email" component="span" className='form-error' />

                        <Field name="password" type="password" placeholder="Parola" className="form-input" />
                        <ErrorMessage name="password" component="span" className='form-error' />

                        <Field name="confirmPassword" type="password" placeholder="Parola Onayı" className="form-input" />
                        <ErrorMessage name="confirmPassword" component="span" className='form-error' />

                        <Field as="textarea" name="address" placeholder="Adres" className="form-input address" />
                        <ErrorMessage name="address" component="span" className='form-error' />

                        <button type="submit" className='form-button'>Submit</button>
                    </Form>
                </Formik>

            </div>
        </div>

    )
}

export default CreateUser
