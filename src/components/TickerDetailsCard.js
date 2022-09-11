import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { axios } from 'axios';
import React, { useEffect, useState } from 'react';





const TickerDetailsCard = ({ ticker }) => {
    const [logo, setLogo] = useState(null)
    useEffect(() => {
        if (ticker?.branding) {
            // eslint-disable-next-line no-undef
            const apiToken = process.env.REACT_APP_POLYGON_API_TOKEN

            axios.get(`${ticker.branding.logo_url}`, {
                headers: { "Authorization": `Bearer ${apiToken}` }
            }).then((response) => {
                console.log(response)
                setLogo("")
            })
        }
    }, [])
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
                    <img src={logo} width="50px" height="50px" alt="Logo" />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default TickerDetailsCard
