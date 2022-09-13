export const getTickers = async ({ state, effects }, options) => {
    state.isLoading = true
    await effects.tickers.api.getTickers(options).then((response) => {
        state.isLoading = false
        console.log(response)
        state.tickers.data = response.results
    }).catch((error) => {
        state.isLoading = false
        state.errorMessage = error.error
        console.log(error)
        console.log(error)
    })

}

export const getTickerDetails = async ({ state, effects }, options) => {
    state.isLoading = true
    await effects.tickers.api.getTicker(options).then((response) => {
        state.tickers.currentTicker = response.results
        console.log(response)
    }).catch((error) => {
        state.isLoading = false
        console.log(error)
        state.errorMessage = error.error
        console.log(error)
    })
}


export const searchForTicker = async ({ state, effects }, options) => {
    state.isLoading = true

    await effects.tickers.api.searchForTicker(options).then((response) => {
        console.log(response)
        state.isLoading = false

        state.tickers.data = response.results

    }).catch((error) => {
        state.isLoading = false
        state.error = true
        state.errorMessage = error.error
        console.log(error)

    })
}
