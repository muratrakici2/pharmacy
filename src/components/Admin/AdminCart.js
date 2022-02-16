import React, { useEffect, useState } from 'react'
import firebase from "../../firebase";
import Table from './Table';
import { Redirect } from 'react-router-dom';
import Loading from '../Loading';
import Header from '../Header';
import Notification from './Notification';

const AdminCart = () => {
    const [data, setData] = useState([]);
    const [checkLoad, setcheckLoad] = useState(true);
    const [checkAdmin, setcheckAdmin] = useState(false);
    const [checkMain, setcheckMain] = useState(false);

    useEffect(() => {
        //ANLIK
        const db = firebase.firestore();
        db.collection("orders")
            .orderBy("time", "desc")
            .onSnapshot((querySnapshot) => {
                setData([])
                querySnapshot.forEach((doc) => {
                    let item = doc.data();
                    let id = doc.id;
                    setData(v => ([...v, { ...item, id }]));
                    setcheckAdmin(true)
                    setcheckLoad(false)
                    setcheckMain(true)

                });
            }, (error) => {
                setcheckAdmin(false)
                setcheckMain(true)
            });
    }, [])


    return (
        <>
            <Loading main={checkMain} load={checkLoad}>
                <Header />
                {checkAdmin ?
                    <>
                        <Notification data={data} />
                        <Table data={data} />
                    </> : <Redirect to="/" />}
            </Loading>
        </>
    )
}

export default AdminCart
