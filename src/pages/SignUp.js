import { Grid } from '@mui/material';
import React from 'react';
import SignUpForm from './../components/signup-form/SignUpForm';

const SignUp = () => {
    return (
        <Grid
            container
            className="login-page-wrapper"
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
        >
            <Grid item xs={6} md={6}>
                <SignUpForm />
            </Grid>
        </Grid>
    )
}

export default SignUp
