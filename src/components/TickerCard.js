import { Chip, Grid, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const TickerCard = ({ ticker, active, name, market, currency_name, last_updated_utc }) => {

    const [hover, setHover] = useState(false)
    const isActive = active
    console.log(isActive)
    return (

        <Grid
            component={Paper}
            elevation={hover ? 15 : 0}
            container
            padding={2}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            rowSpacing={2}
            sx={{
                maxWidth: "420px",
                borderRadius: "16px",
                height: "220px",
                alignItems: "center",
                border: "1px solid #0996C7",
                cursor: "pointer",
                transform: `${hover && "scale(1.2)"}`,
                transition: " all 0.3s ease-in-out"
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography color="primary" variant='h5'>
                        {ticker}
                    </Typography>
                    <Chip label={currency_name} variant={"outlined"} color={"primary"} />
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Typography color="primary">
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography>
                    {market.toUpperCase()}
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Stack justifyContent={"flex-end"} alignItems={"flex-end"}>
                    <Typography>Last Updated At</Typography>
                    <Typography>
                        {last_updated_utc}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default TickerCard
