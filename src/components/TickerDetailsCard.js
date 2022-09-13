import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';





const TickerDetailsCard = ({ ticker }) => {

    return (
        <Grid
            component={Paper}
            container
            rowSpacing={1}

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
            <Grid item xs={12}>
                <Typography variant={"description"}>
                    {ticker?.description}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Typography variant="subtitle1">
                            {ticker?.address && ticker.address.city + ", " + ticker?.address.address1}
                            <br />
                            (408) 996-1010
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default TickerDetailsCard
