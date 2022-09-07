import { Alert, Backdrop, CircularProgress, Snackbar } from '@mui/material';
import React from 'react';
import { useActions, useAppState } from '../overmind';

const UserFeedback = () => {
    const { isLoading, success, error } = useAppState()
    const { removeFeedbackIndicator } = useActions().user



    const handleClose = () => {
        console.log("Handling Close State")
        removeFeedbackIndicator()
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    This is an error message!
                </Alert>
            </Snackbar>
        </>
    )
}

export default UserFeedback
