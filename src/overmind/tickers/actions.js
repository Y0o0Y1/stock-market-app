export const getTickers = async ({ state, effects }, options) => {
    await effects.tickers.api.getTickers(options).then((response) => {
        console.log(response)
        state.tickers.data = response.data.results
    })

}

export const getTickerDetails = async () => {

}

