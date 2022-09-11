import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
        <Grid container>
            <Grid item xs={7}>
                <TickerDetailsCard
                    name={currentTicker?.name}
                    ticker={currentTicker?.ticker}
                />
            </Grid>

        </Grid>
    )
}

export default TickerDetails
