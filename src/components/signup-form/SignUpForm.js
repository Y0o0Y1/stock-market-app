import { Button, Checkbox, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import "./SignUpForm.css";


const SignUpForm = () => {
    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/login')
    }
    return (

        <AuthLayout
            slogan={<>Move forward <br />to be financially constant</ >}
        >
            <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
                sx={{
                    height: "100%"
                }}
            >
                <Stack
                    direction={"column"}
                    spacing={2}
                    sx={{
                        width: "100%"
                    }}
                >
                    <TextField
                        variant='outlined'
                        type={"text"}
                        name={"full-name"}
                        label="Full Name"
                        fullWidth
                    />
                    <TextField
                        variant='outlined'
                        name={"email"}

                        label="Email"
                        fullWidth
                    />
                    <TextField
                        variant='outlined'
                        label="Password"
                        type={"password"}
                        fullWidth
                    />
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                    >
                        <Checkbox
                            sx={{
                                margin: 0,
                                padding: 0
                            }} />
                        <Typography component={"span"} fontSize={"13px"}>
                            I agree to all statemments included in
                            <Typography component={"span"} color="primary" ml={0.5} fontSize={"13px"} sx={{ cursor: "pointer" }}>
                                Terms of use
                            </Typography>
                        </Typography>
                    </Stack>
                </Stack>
                <Button color='primary' variant="contained" fullWidth>Join Now</Button>
                <Typography>
                    Already a member
                    <Typography
                        component="span"
                        color={"primary"}
                        onClick={navigateToLogin}
                        sx={{
                            cursor: "pointer",
                            marginLeft: "3px"
                        }}
                    >
                        Sign in here
                    </Typography>
                </Typography>
            </Stack>
        </AuthLayout >
    )

}

export default SignUpForm
