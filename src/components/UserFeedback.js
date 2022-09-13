import { Alert, Backdrop, CircularProgress, Snackbar, Typography } from '@mui/material';
import React from 'react';
import { useActions, useAppState } from '../overmind';

const UserFeedback = () => {
    const { isLoading, success, error, successMessage, errorMessage } = useAppState()
    const { removeFeedbackIndicator } = useActions()
    const handleClose = () => {
        removeFeedbackIndicator()
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#0996C7', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" thickness={5.5} />
            </Backdrop>
            <Snackbar open={success} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', padding: "18px" }}>
                    <Typography>

                        {successMessage}
                    </Typography>
                </Alert>
            </Snackbar>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%', padding: "18px" }}>
                    <Typography>

                        {errorMessage}
                    </Typography>
                </Alert>
            </Snackbar>
        </>
    )
}

export default UserFeedback
