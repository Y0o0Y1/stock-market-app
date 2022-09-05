import { Grid } from '@mui/material';
import React from 'react';
import LoginForm from './../components/LoginForm';

const Login = () => {
    return (
        <>
            <Grid
                container
                className="login-page-wrapper"
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
            >
                {/* <Grid item xs={true} className="background-color">
                    <Box>
                        Lottie Space
                    </Box>
                </Grid> */}
                <Grid item xs={6} sm={6} md={6} >
                    <LoginForm />
                </Grid>
            </Grid>
        </>
    )
}

export default Login
