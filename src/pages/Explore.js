import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TickerCard from '../components/TickerCard';
import { useActions, useAppState } from './../overmind/index';
const Explore = () => {
    const navigate = useNavigate()
    const tickers = useAppState().tickers
    const { getTickers } = useActions().tickers
    useEffect(() => {
        getTickers({ params: { limit: 50 } })
        console.log("Tickkk", tickers)
    }, [])

    const renderTickers = () => {
        if (tickers.tickers.length > 0) {
            return tickers?.tickers?.map((ticker) => {
                return <Grid item xs={true} sm={true} md={true} lg={true} xl={true} key={Math.random()} sx={{ alignSelf: "center" }}>
                    <Box>
                        <TickerCard
                            ticker={ticker.ticker}
                            name={ticker.name}
                            active={ticker.active}
                            navigate={navigate}
                            market={ticker.market}
                            currency_name={ticker.currency_name}
                            last_updated_utc={"2022-02-09T06:03:09.534Z"}
                        />
                    </Box>
                </Grid>
            })
        }
        else {
            return <Grid item>
                <Typography>There must be an error due to api limitations</Typography>

            </Grid>
        }
    }

    return (
        <Grid
            mt={2}
            container
            direction={"row"}
            rowSpacing={2}
            columnSpacing={3}
            justifyContent={tickers?.tickers / 12 == 1 ? "center" : "flex-start"}
            padding={3}
        >
            {renderTickers()}

        </Grid >

    )
}

export default Explore