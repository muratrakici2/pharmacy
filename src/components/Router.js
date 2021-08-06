import React, {useState } from 'react'
import Entry from './Entry';
import { BrowserRouter, Switch, Route ,Redirect} from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import CreateUser from './CreateUser';
import Cart from './Cart';
import firebase from "../firebase";
import Loading from './Loading';
const Router = () => {
    const [user, setuser] = useState(false);
    const [main, setmain] = useState(false);
    const [load, setload] = useState(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setuser(true)
      }
      setload(false);
      setmain(true);
    });
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Loading main={main} load={load}>
            {user ? <HomePage/>:<Entry/>}
            </Loading>
          </Route>
          <Route path="/login" exact>
          <Loading main={main} load={load}>
            {user ? <Redirect to="/" />:<Login/>}
            </Loading>
          </Route>
          <Route path="/create-user" exact>
            <CreateUser />
          </Route>
          <Route path="/sepet" exact>
          <Loading main={main} load={load}>
            {user ? <Cart/>:<Redirect to="/" />}
            </Loading>
          </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default Router
