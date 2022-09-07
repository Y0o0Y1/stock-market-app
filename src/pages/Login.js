import React, { useEffect } from 'react';
import { useAppState } from "../overmind";
import LoginForm from './../components/LoginForm';


const Login = () => {
    const user = useAppState((state) => {
        console.log(state)
        return state.user
    })
    useEffect(() => {
        console.log("From Login Page", user)
    }, [user.isLoggedin])

    return (
        <>

            <LoginForm />

        </>
    )
}

export default Login
