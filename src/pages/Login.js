import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from "../overmind";
import LoginForm from './../components/LoginForm';


const Login = () => {
    const navigate = useNavigate()
    const { isLoggedIn } = useAppState()
    useEffect(() => {
        if (isLoggedIn)
            navigate("/explore")
    }, [isLoggedIn])

    return (
        <>
            <LoginForm />
        </>
    )
}

export default Login
