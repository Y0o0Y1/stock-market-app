import { Button, Checkbox, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import "./LoginForm.css"
const LoginForm = () => {
    return (
        <AuthLayout
            slogan={<>Purchase Today <br /> For Secured Tomorrow</>}
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
                    <TextField variant='outlined' label="Email" fullWidth />
                    <TextField variant='outlined' label="Password" type={"password"} fullWidth />
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                    >
                        <Checkbox
                            label={"Remember Me"}
                            sx={{
                                margin: 0,
                                padding: 0
                            }} />
                        <Typography component={"span"}>Remember Me</Typography>
                    </Stack>
                </Stack>
                <Button color='primary' variant="contained" fullWidth>Sign In</Button>
                <Typography>
                    I`m a new member
                    <Typography component="span" color={"primary"} sx={{
                        cursor: "pointer",
                        marginLeft: "3px"
                    }} >
                        Sign up
                    </Typography>
                </Typography>
            </Stack>
        </AuthLayout>
    )
}

export default LoginForm
