import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

import logo from "../assets/apple-logo.svg";

const description = "Apple designs a wide variety of consumer electronic devices, including smartphones (iPhone), tablets (iPad), PCs (Mac), smartwatches (Apple Watch), AirPods, and TV boxes (Apple TV), among others. The iPhone makes up the majority of Apple's total revenue. In addition, Apple offers its customers a variety of services such as Apple Music, iCloud, Apple Care, Apple TV+, Apple Arcade, Apple Card, and Apple Pay, among others. Apple's products run internally developed software and semiconductors, and the firm is well known for its integration of hardware, software and services. Apple's products are distributed online as well as through company-owned stores and third-party retailers. The company generates roughly 40% of its revenue from the Americas, with the remainder earned internationally."



const TickerDetailsCard = () => {
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
                        <Typography variant={"title1"}>Apple Inc.</Typography>
                        <Typography variant={"subtitle2"}>
                            ELECTRONIC COMPUTERS
                        </Typography>
                    </Box>
                    <Typography variant={"subtitle1"}>AAPL</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={"description"}>
                    {description}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Typography variant="subtitle1">
                            CA, Cupertino, One Apple Park Way
                            <br />
                            (408) 996-1010
                        </Typography>
                    </Box>
                    <img src={logo} width="50px" height="50px" alt="Logo"/>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default TickerDetailsCard
