import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { useAppState } from '../overmind'

const Dashboard = () => {
    const { isLoggedIn } = useAppState()

    return (
        <div>
            <Box mb={5}>
                {isLoggedIn && <Header />}
            </Box>
            <Outlet />
        </div>
    )
}

export default Dashboard
