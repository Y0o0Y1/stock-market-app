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
                justifyContent={"space-evenly"}
                spacing={2}
                padding={2}
                sx={{
                    height: "100%"
                }}
            >
                <Stack
                    direction={"column"}
                    spacing={2}
                    justifySelf={"flex-start"}
                >
                    <Box className="logo-wrapper">
                        <img
                            src={logo}
                            alt={"logo"}
                            width={280}
                            height={80}
                        />
                    </Box>
                    <Typography className="slogan" color="primary">
                        {slogan}
                    </Typography>
                </Stack>
                <Box
                    sx={{
                        width:"80%"
                    }}
                >
                    {children}
                </Box>
            </Stack>
        </Paper>
    )
}

export default AuthLayout
