export const getTickers = async ({ state, effects }, options) => {
    await effects.tickers.api.getTickers(options).then((response) => {
        console.log(response)
        state.tickers.data = response.results
    })

}

export const getTickerDetails = async ({ state, effects }, options) => {
    await effects.tickers.api.getTicker(options).then((response) => {
        state.tickers.currentTicker = response.results
        console.log(response)

    })
}


export const searchForTicker = async ({ state, effects }, options) => {
    await effects.tickers.api.searchForTicker(options).then((response) => {
        console.log(response)
        state.tickers.data = response.results

    })
}
