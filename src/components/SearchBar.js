import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MagnifyingGlass } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { useActions } from './../overmind/index';

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
const SearchBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    // const { currentTicker } = useAppState().tickers
    const [searchTerm, setSearchTerm] = useState("")
    const [value] = useDebounce(searchTerm, 1000);
    const { searchForTicker } = useActions().tickers
    useEffect(() => {
        if (location.pathname !== "/explore")
            navigate("/explore")
        console.log(value)
        searchForTicker({ params: { ticker: value.toUpperCase() } })

    }, [value])

    // useEffect(() => {
    //     console.log({ location })
    // }, [currentTicker])
    return (
        <Search>
            <SearchIconWrapper>
                <MagnifyingGlass color={"#0996c7"} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                onChange={(e) => { setSearchTerm(e.target.value) }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}

export default SearchBar
