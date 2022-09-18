import { Chip, Stack, Typography } from '@mui/material'
import React from 'react'

const TickerStatTag = ({ variant, number, text }) => {
    return <>
        <Stack direction={"column"} alignItems={"center"} spacing={1}>
            <Typography >{text}</Typography>
            <Chip label={number} size={"medium"}
                sx={{
                    backgroundColor: variant === "green" ? "rgba(90, 171, 96,0.1)" : "rgba(229, 21, 21,0.1)",
                    color: variant === "green" ? "green" : "red"
                }}
            />
        </Stack>
    </>


}

export default TickerStatTag