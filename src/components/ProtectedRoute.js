import { Navigate } from "react-router-dom";
import { useAppState } from "../overmind";

const ProtectedRoute = ({ permission, children }) => {
    const { isLoggedIn } = useAppState()
    let pass = false;
    if (permission === null || permission === false) {
        pass = true
    }

    else if (permission === isLoggedIn) {
        pass = true
    }
    else {
        pass = false
    }

    return pass ? (children)
        : <>
            <Navigate to="/403" />
            <h1>Permission Required</h1>
        </>
}

export default ProtectedRoute
