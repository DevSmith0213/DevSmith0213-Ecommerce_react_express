import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Cartscreen from './screens/CartScreen';
import Homescreen from './screens/HomeScreen';
import Productscreen from './screens/ProductScreen';

function App() {

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

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
                        <Link to="/signin">Sign in</Link>
                    </div>
                </header>
                <main>
                    <Route path="/cart/:id?" component={Cartscreen}></Route>
                    <Route path="/product/:id" component={Productscreen}></Route>
                    <Route path="/" component={Homescreen} exact></Route>
                </main>
                <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>
        
    );
}

export default App;
