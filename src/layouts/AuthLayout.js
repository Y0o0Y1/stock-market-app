import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from "../assets/nasdaq-logo.png"

import "./AuthLayout.css"
const AuthLayout = ({ children, slogan }) => {
    return (
        <Paper
            elevation={10}
            className={"form-wrapper"}
        >
            <Stack
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={5}
                sx={{
                    height: "100%"
                }}
            >
                <Stack
                    direction={"column"}
                    spacing={2}
                >
                    <Box className="logo-wrapper">
                        <img
                            src={logo}
                            alt={"logo"}
                            loading="lazy"
                            width={280}
                            height={80}
                        />
                    </Box>
                    <Typography className="slogan">
                        {slogan}
                    </Typography>
                </Stack>
                <Box
                    sx={{
                        width: "75%"
                    }}>
                    {children}
                </Box>
            </Stack>
        </Paper>
    )
}

export default AuthLayout
