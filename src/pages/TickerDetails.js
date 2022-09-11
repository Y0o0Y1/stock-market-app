import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StatsCard from '../components/StatsCard';
import TickerDetailsCard from './../components/TickerDetailsCard';
import { useActions, useAppState } from './../overmind/index';

const TickerDetails = () => {
    const { ticker_id } = useParams()
    const { currentTicker } = useAppState().tickers
    const { getTickerDetails } = useActions().tickers
    useEffect(async () => {
        await getTickerDetails({ ticker_id })
        console.log(currentTicker?.name)
    }, [])
    return (
        <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
                <TickerDetailsCard
                    name={currentTicker?.name}
                    ticker={currentTicker?.ticker}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={3}>
                <StatsCard open={"1"} close={"1"} volume={"2"} high={"5"} low={"2"} />
            </Grid>
        </Grid>
    )
}

export default TickerDetails
