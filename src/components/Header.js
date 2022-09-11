import { AppBar, Button, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import Logo from "../assets/nasdaq-n-logo.png";
import { useActions } from './../overmind/index';
const Header = () => {
    const { logOut } = useActions().user
    const logoutUser = () => {
        logOut()
        window.location.replace('/')
    }
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '30ch',
                },
            },
        },
    }));
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: "16px",
        color: "black",
        border: "1px solid rgba(0, 0, 0, 0.1);",
        backgroundColor: "#fafafafa",
        '&:hover': {
            boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
            backgroundColor: "#fafafafa",
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(1),
            width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

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
                <Search>
                    <SearchIconWrapper>
                        <MagnifyingGlass color={"#0996c7"} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Button color="primary" onClick={logoutUser}>Logout</Button>
            </Toolbar>
        </AppBar >
    )
}

export default Header
