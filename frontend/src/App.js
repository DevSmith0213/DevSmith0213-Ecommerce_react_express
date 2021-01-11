import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { signout } from './actions.js/userActions';
import Cartscreen from './screens/CartScreen';
import Homescreen from './screens/HomeScreen';
import { Paymentmethodscreen } from './screens/PaymentMethodScreen';
import Productscreen from './screens/ProductScreen';
import Registerscreen from './screens/RegisterScreen';
import { Shiippingaddressscreen } from './screens/ShiippingAddressScreen';
import Signinscreen from './screens/SigninScreen';

function App() {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => (state.userSignin));
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    }

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link to="/" className="brand">Amazona</Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            Cart
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                        {
                            userInfo ? (
                                <div className="dropdown">
                                    <Link to="#">
                                        {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                                    </Link>
                                    <ul className="dropdown-content">
                                        <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                                    </ul>
                                </div>
                            ) : (
                                    <Link to="/signin">Sign in</Link>
                                )
                        }

                    </div>
                </header>
                <main>
                    <Route path="/cart/:id?" component={Cartscreen}></Route>
                    <Route path="/product/:id" component={Productscreen}></Route>
                    <Route path='/signin' component={Signinscreen}></Route>
                    <Route path="/register" component={Registerscreen} exact></Route>
                    <Route path="/shipping" component={Shiippingaddressscreen} exact></Route>
                    <Route path="/payment" component={Paymentmethodscreen} exact></Route>
                    <Route path="/" component={Homescreen} exact></Route>
                </main>
                <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>

    );
}

export default App;
