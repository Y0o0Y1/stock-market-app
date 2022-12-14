import { Grid, IconButton, Stack, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
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

    return (<>
        <Helmet>
            <title>NASDAQ - {ticker_id}</title>
        </Helmet>
        <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item xs={12} mb={2}>
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

        </Grid>
    </>
    )
}

export default TickerDetails
