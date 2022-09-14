import { Chip, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const StatsCard = ({ tickerStats }) => {
    return (
        <Grid
            // component={Paper}
            container
            rowSpacing={1}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            sx={{
                // padding: "20px 24px",
                borderRadius: "16px",
                width: "auto",
                height: "100%"
            }}
            align={"left"}
            spacing={2}
        >
            <Grid item xs={12} align={"left"}>
                <Typography>Previous Close Stats</Typography>
            </Grid>
            <Grid item xs={2} >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography>Open</Typography>
                    <Chip label={tickerStats?.o} size={"medium"}
                        sx={{
                            backgroundColor: "rgba(229, 21, 21,0.1)",
                            color: "red"
                        }}
                    />
                </Stack>
            </Grid>
            <Grid item xs={2} >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography>Close</Typography>
                    <Chip label={tickerStats?.c} size={"medium"}
                        sx={{
                            backgroundColor: "rgba(90, 171, 96,0.1)",
                            // border: "1px solid green",
                            color: "green"
                        }}
                    />
                </Stack>
            </Grid>
            <Grid item xs={2} >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography>low</Typography>
                    <Chip label={tickerStats?.l} size={"medium"}
                        sx={{
                            backgroundColor: "rgba(90, 171, 96,0.1)",
                            color: "green"
                        }}
                    />
                </Stack>
            </Grid>
            <Grid item xs={2} >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography>high</Typography>
                    <Chip label={tickerStats?.h} size={"medium"}
                        sx={{
                            backgroundColor: "rgba(229, 21, 21,0.1)",
                            color: "red"
                        }}
                    />
                </Stack>
            </Grid>
            <Grid item xs={2} >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography>Volume</Typography>
                    <Chip label={tickerStats?.v} size={"medium"}
                        sx={{
                            backgroundColor: "rgba(21, 39, 51,0.1) ",
                            color: "rgba(21, 39, 51,1)   "
                        }}
                    />
                </Stack>
            </Grid>
        </Grid >
    )
}

export default StatsCard
