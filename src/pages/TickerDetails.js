import React from 'react'
import { useParams } from 'react-router-dom'

const TickerDetails = () => {
    const { ticker_id } = useParams()
    return (
        <div>
            TickerDetails {ticker_id}
            TickerDetails {ticker_id}
            TickerDetails {ticker_id}
            TickerDetails {ticker_id}
        </div>
    )
}

export default TickerDetails
