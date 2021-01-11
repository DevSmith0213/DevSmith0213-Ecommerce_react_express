import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { signin } from '../actions.js/userActions'
import Loadingbox from "../components/LoadingBox";
import Messagebox from "../components/MessageBox";

export default function Signinscreen(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userSignin = useSelector((state) => (state.userSignin));
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        //TODO: signin action
        dispatch(signin(email, password));
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo])

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <Loadingbox></Loadingbox>}
                {error && <Messagebox variant="danger">{error}</Messagebox>}
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type='email'
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type='password'
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Sign In
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        New customer? {' '}
                        <Link to="/register">Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
