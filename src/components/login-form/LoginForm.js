import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import logo from "../../assets/nasdaq-logo.png"
import "./LoginForm.css"
const LoginForm = () => {
    return (
        <Paper
            elevation={6}
            className={"login-form-wrapper"}
            component={Stack}
            direction={"column"}
            alignItems={"center"}
            spacing={4}

            sx={{
                height: "100%"
            }}
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
                <Box>
                    <Box className="logo-wrapper">
                        <img
                            src={logo}
                            alt={"logo"}
                            loading="lazy"
                            width={320}
                            height={97}
                        />
                    </Box>
                    <Typography className="slogan">
                        Purchase today <br /> For secured tomorrow
                    </Typography>
                </Box>
                <TextField variant='outlined' label="Email" fullWidth />
                <TextField variant='outlined' label="Password" type={"password"} fullWidth />
                <Button color='primary' variant="contained" fullWidth>Sign In</Button>
                
            </Stack>
        </Paper>
    )
}

export default LoginForm
