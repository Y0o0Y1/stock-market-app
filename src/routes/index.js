import React from 'react';


const Explore = React.lazy(() => import('./../pages/Explore'));
const Login = React.lazy(() => import('./../pages/Login'));
const SignUp = React.lazy(() => import('./../pages/SignUp'));
const TickerDetails = React.lazy(() => import('./../pages/TickerDetails'));




export const pages = [
    {
        name: "Explore",
        parent: "/",
        path: "/explore",
        element: <Explore />,
        permission: true,
        id: "1"
    },
    {
        name: "Ticker Details",
        parent: "/",
        path: "tickers/:ticker_id",
        element: <TickerDetails />,
        permission: true,
        id: "2"
    },
    {
        name: "Log In",
        path: "/",
        element: <Login />,
        permission: false,
        id: "3"
    },
    {
        name: "Sign Up",
        path: "sign-up",
        element: <SignUp />,
        permission: false,
        id: "4"
    },
]