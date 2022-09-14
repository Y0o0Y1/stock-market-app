import { Grid, IconButton, Stack, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StatsCard from '../components/StatsCard';
import TickerDetailsCard from './../components/TickerDetailsCard';
import { useActions, useAppState } from './../overmind/index';

const TickerDetails = () => {
    const navigate = useNavigate()
    const { ticker_id } = useParams()
    const { getTickerDetails, getTickerStats } = useActions().tickers
    const tickers = useAppState().tickers

    const navigateBack = () => {
        navigate(-1)
    }
    const getData = async () => {
        await getTickerDetails({ ticker_id })
        await getTickerStats({ ticker_id })

    }
    useEffect(() => {
        getData()
        return () => {
            console.log("Component Unmounted")
        }
    }, [])

    return (
        <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item xs={12}>
                <Stack direction={"row"} spacing={1} onClick={navigateBack} alignItems={"center"}>
                    <IconButton onClick={navigateBack}>
                        <CaretLeft size={20} />
                    </IconButton>
                    <Typography variant='subtitle2'>
                        Back
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
                <TickerDetailsCard
                    ticker={tickers?.currentTicker}
                />
            </Grid>
            {tickers.currentTicker.stats &&
                <Grid item xs={12} sm={12} md={5} lg={3}>
                    <StatsCard tickerStats={tickers.currentTicker.stats} open={"1"} close={"1"} volume={"2"} high={"5"} low={"2"} />
                </Grid>
            }
        </Grid>
    )
}

export default TickerDetails
