import React from 'react'
import TickerCard from '../components/TickerCard'

const Explore = () => {
    return (
        <div>
            <TickerCard
                ticker={"AABVF"}
                name={"ABERDEEN INTL INC"}
                active={"true"}
                market={"otc"}
                currency_name={"USD"}
                last_updated_utc={"2022-02-09T06:03:09.534Z"}
            />
        </div>
    )
}

export default Explore