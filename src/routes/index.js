import Explore from './../pages/Explore';
import Login from './../pages/Login';
import SignUp from './../pages/SignUp';
import TickerDetails from './../pages/TickerDetails';
//Login Screen Route
//Explore Screen Route
//Company Details Screen Route
//Sign Up Screen Route


export const pages = [
    {
        name: "Explore",
        path: "/explore",
        element: <Explore />,
        permission: true,
        id: "1"
    },
    {
        name: "Ticker Details",
        path: "/tickers/:ticker_id",
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
        path: "/sign-up",
        element: <SignUp />,
        permission: false,
        id: "4"
    },

]