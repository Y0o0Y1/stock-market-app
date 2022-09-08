import { Grid, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ClockClockwise, CurrencyCircleDollar } from 'phosphor-react'
import React, { useState } from 'react'

const TickerCard = ({ ticker, active, name, currency_name, last_updated_utc }) => {
    const date = { last_updated_utc }
    console.log(date)
    const [hover, setHover] = useState(false)
    const isActive = active
    console.log(isActive)
    return (

        <Grid
            component={Paper}
            elevation={0}
            container
            padding={3}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            rowSpacing={0}
            sx={{
                width: "320px",
                borderRadius: "16px",
                height: "auto",
                alignItems: "center",
                border: "1px solid rgba(0, 0, 0, 0.1);",
                cursor: "pointer",
                boxShadow: `${hover && "0px 0px 12px 0px rgba(0, 0, 0, 0.12);"}`,
                transform: `${hover && "scale(1.1)"}`,
                transition: " all 0.3s ease-in-out"
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography color="black" sx={{
                        fontSize: "18px"
                    }}>
                        {ticker}
                        <Typography color="primary" sx={{
                            fontSize: "16px"
                        }}>
                            {name}
                        </Typography>

                    </Typography>
                </Stack>

            </Grid>
            <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
                        <CurrencyCircleDollar size={20} />
                        <Box>
                            <Typography sx={{ fontSize: "14px" }}>
                                {currency_name}
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack justifyContent={"flex-end"} direction={"row"} spacing={0.5} alignItems={"center"}>
                        <ClockClockwise size={20} color={"#adadad"} />
                        <Typography sx={{
                            fontSize: "14px",
                            color: "#adadad"
                        }}>
                            02 FEB, 6:03
                        </Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={2}>
                <Typography>
                </Typography>
            </Grid>
            <Grid item xs={8}>

            </Grid>
        </Grid>
    )
}

export default TickerCard
