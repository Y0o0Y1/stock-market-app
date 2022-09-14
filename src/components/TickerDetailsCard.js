import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import StatsCard from './StatsCard';





const TickerDetailsCard = ({ ticker }) => {

    return (
        <Grid
            component={Paper}
            container
            rowSpacing={3}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
                padding: "15px 25px",
                borderRadius: "16px",
                width: "100%",
                height: "auto"
            }}
        >
            <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Box>
                        <Typography variant={"title1"}>{ticker?.name}</Typography>
                        <Typography variant={"subtitle2"}>
                            {ticker?.market}
                        </Typography>
                    </Box>
                    <Typography variant={"subtitle1"}>{ticker?.ticker}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} container justifyContent={"flex-start"} align={"left"}>
                {ticker.stats &&
                    <StatsCard tickerStats={ticker.stats} open={"1"} close={"1"} volume={"2"} high={"5"} low={"2"} />
                }
            </Grid>

            <Grid item xs={12}>
                <Stack spacing={0.5}>
                    <Typography variant="subtitle2" sx={{lineHeight:"25px"}}> About</Typography>
                    <Typography variant={"description"}>
                        {ticker?.description}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Typography variant="subtitle1">
                            {ticker?.address && ticker.address.city + ", " + ticker?.address.address1}
                            <br />
                            {ticker?.phone_number}
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default TickerDetailsCard
