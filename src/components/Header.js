import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Logo from "../assets/nasdaq-n-logo.png";
import { useActions } from './../overmind/index';
import SearchBar from './SearchBar';
const Header = () => {
    const { logOut } = useActions().user
    const logoutUser = () => {
        logOut()
        window.location.replace('/')
    }

    return (
        <AppBar variant={"elevation"} sx={{
            backgroundColor: "white",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            marginBottom: "65px"
        }} >
            <Toolbar>
                <IconButton
                    size="medium"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <img src={Logo} height={"40px"} width={"40px"} />
                    {/* <LineSegments /> */}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {/* Explore */}
                </Typography>
                <SearchBar />
                <Button color="primary" onClick={logoutUser}>Logout</Button>
            </Toolbar>
        </AppBar >
    )
}

export default Header
