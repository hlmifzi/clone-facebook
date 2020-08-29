import React from 'react'
import './login.css'
import Button from '@material-ui/core/Button'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const { _handleSignIn } = useAuth()

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

            <Button type="submit" onClick={_handleSignIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login
