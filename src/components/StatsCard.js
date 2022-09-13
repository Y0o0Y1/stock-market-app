import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const StatsCard = ({ tickerStats }) => {
    return (
        <Grid
            component={Paper}
            container
            rowSpacing={1}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                padding: "20px 24px",
                borderRadius: "16px",
                width: "auto",
                height: "100%"
            }}
            align={"center"}
        >
            <Grid item xs={12}>
                <Typography>Previous Close Stats</Typography>
            </Grid>
            <Grid item xs={5} >
                <Box>
                    <Typography>Open</Typography>
                    <Chip label={tickerStats?.o} size={"medium"}
                        sx={{
                            backgroundColor: "white",
                            border: "1px solid red",
                            color: "red"
                        }}
                    />
                </Box>
            </Grid>
            <Grid item xs={5} >
                <Box>
                    <Typography>Close</Typography>
                    <Chip label={tickerStats?.c} size={"medium"}
                        sx={{
                            backgroundColor: "white",
                            border: "1px solid green",
                            color: "green"
                        }}
                    />
                </Box>
            </Grid>
            <Grid item xs={5} >
                <Box>
                    <Typography>low</Typography>
                    <Chip label={tickerStats?.l} size={"medium"}
                        sx={{
                            backgroundColor: "white",
                            border: "1px solid green",
                            color: "green"
                        }}
                    />
                </Box>
            </Grid>
            <Grid item xs={5} >
                <Box>
                    <Typography>high</Typography>
                    <Chip label={tickerStats?.h} size={"medium"}
                        sx={{
                            backgroundColor: "white",
                            border: "1px solid red",
                            color: "red"
                        }}
                    />
                </Box>
            </Grid>
            <Grid item xs={5} >
                <Box>
                    <Typography>Volume</Typography>
                    <Chip label={tickerStats?.v} size={"medium"}
                        sx={{
                            backgroundColor: "white",
                            border: "1px solid blue",
                            color: "blue"
                        }}
                    />
                </Box>
            </Grid>
        </Grid >
    )
}

export default StatsCard
