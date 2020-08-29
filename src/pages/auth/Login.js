import React from 'react'
import './login.css'
import Button from '@material-ui/core/Button';
import { auth, provider } from '../../firebase'
import actionTypes from '../../context/action/actionTypes'
import { useSateValue } from '../../context/provider/StateProvider'

const Login = () => {
    const [state, dispatch] = useSateValue()
    const signIn = async () => {
        try {
            const res = await auth.signInWithPopup(provider)
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user
            })
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login
