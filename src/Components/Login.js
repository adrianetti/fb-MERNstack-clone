import React, { useState } from 'react'
import './Login.css'
import { provider, auth } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { useHistory } from 'react-router'


function Login() {
    const [{}, dispatch] = useStateValue();
    const [processing, setProcessing] = useState(false);

    const history = useHistory();

    const signIn = () => {
        setProcessing(true);
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,

                })
                history.push("/feed");
            })
            .catch(error => {
                alert(error.message);
                setProcessing(false)
            })
    }

    return (
        <div className="login">
            <div className="login__box">
                <img alt="fb-logo" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"/>

                <button onClick={signIn} disabled={processing}>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default Login
