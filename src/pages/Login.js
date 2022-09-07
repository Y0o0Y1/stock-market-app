import { Grid } from '@mui/material';
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
            <Grid
                container
                className="login-page-wrapper"
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
            >
                <Grid item xs={6} sm={6} md={6} >
                    <LoginForm />
                </Grid>
            </Grid>
        </>
    )
}

export default Login
