import { Grid } from '@mui/material'
import React from 'react'
import TickerCard from '../components/TickerCard'
const array = [1, 1, 2, 123, 4, 4, 4, 4, 4, 3,  ]
const Explore = () => {
    return (
        <Grid
            container
            direction={"row"}
            spacing={2}
            justifyContent={array / 12 == 1 ? "center" : "flex-start"}
            padding={3}
        >
            {
                array.map(() => {
                    return <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={Math.random()} sx={{ alignSelf: "center" }}>
                        <TickerCard
                            ticker={"AABVF"}
                            name={"ABERDEEN INTL INC"}
                            active={"true"}
                            market={"otc"}
                            currency_name={"USD"}
                            last_updated_utc={"2022-02-09T06:03:09.534Z"}
                        />
                    </Grid>
                })
            }


        </Grid >

    )
}

export default Explore