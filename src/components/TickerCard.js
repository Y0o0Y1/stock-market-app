import { Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { format, parseISO } from 'date-fns';
import { ClockClockwise, CurrencyCircleDollar } from 'phosphor-react';
import React, { useState } from 'react';

const TickerCard = ({ ticker, name, currency_name, last_updated_utc }) => {
    const [hover, setHover] = useState(false)
    const formatDate = () => {
        return format(parseISO(last_updated_utc), "yy MMM dd hh:mm")
    }
    console.log()
    return (
        <Grid
            component={Paper}
            elevation={0}
            container
            padding={3}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            rowSpacing={0.5}
            sx={{
                width: "320px",
                maxWidth: "320px",
                maxHeight: "122px",
                height: "auto",
                alignItems: "center",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                cursor: "pointer",
                boxShadow: `${hover && "0px 0px 12px 0px rgba(0, 0, 0, 0.12)"}`,
                transform: `${hover && "scale(1.130)"}`,
                transition: " all 0.3s ease-in-out"
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        // onClick={openDrawer}
        >
            <Grid item xs={12}>
                <Stack direction={"column"} justifyContent={"space-between"} alignItems={"flex-start"} spacing={0.2}>
                    <Typography color="black" sx={{
                        fontSize: "18px"
                    }}>
                        {ticker}
                    </Typography>
                    <Typography color="primary" sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        maxWidth: "260px",
                        textOverflow: "ellipsis",
                        fontSize: "16px"
                    }}>
                        {name}

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
                            {formatDate()}
                            {/* 02 FEB, 6:03 */}
                        </Typography>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default TickerCard
