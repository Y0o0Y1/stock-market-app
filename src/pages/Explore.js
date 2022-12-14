import { Box, ClickAwayListener, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import TickerCard from '../components/TickerCard';
import TickerDetailsDrawer from '../components/TickerDetailsDrawer';
import { useActions, useAppState } from './../overmind/index';

const Explore = () => {
    const navigate = useNavigate()
    const { isLoading } = useAppState()
    const [drawerOpenState, setDrawerOpenState] = useState(false)
    const tickers = useAppState().tickers
    const { getTickers, getTickerDetails, getTickerStats } = useActions().tickers
    const openDetailsDrawer = async (ticker) => {
        console.log(ticker, tickers.currentTicker)
        await getData(ticker).then((response) => console.log(response))
        setDrawerOpenState(true)
    }
    const getData = async (ticker_id) => {
        await getTickerDetails({ ticker_id })
        await getTickerStats({ ticker_id })

    }
    const closeDrawer = () => {
        console.log("closing")
        setDrawerOpenState(false)
    }
    const renderTickers = () => {
        if (tickers.tickers.length > 0) {
            return tickers?.tickers?.map((ticker) => {
                return <Grid item xs={true} sm={true} md={true} lg={true} xl={true} key={Math.random()} sx={{ alignSelf: "center" }}>
                    <Box onClick={() => openDetailsDrawer(ticker.ticker)}>
                        <TickerCard
                            ticker={ticker.ticker}
                            name={ticker.name}
                            active={ticker.active}
                            navigate={navigate}
                            market={ticker.market}
                            currency_name={ticker.currency_name}
                            last_updated_utc={ticker.last_updated_utc}
                        />
                    </Box>
                </Grid>
            })
        }
        else {
            return !isLoading && <Grid item>
                <Typography>There must be an error due to api limitations</Typography>
            </Grid >
        }
    }
    useEffect(() => {
        getTickers({ params: { limit: 50 } })
    }, [])
    return (
        <>
            <Helmet>
                <title>NASDAQ - Explore Tickers</title>
            </Helmet>
            <ClickAwayListener onClickAway={closeDrawer}>
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
                </Grid>
            </ClickAwayListener>
            <TickerDetailsDrawer open={drawerOpenState} setOpenState={setDrawerOpenState} />
        </>

    )
}

export default Explore