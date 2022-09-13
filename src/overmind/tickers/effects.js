
import { Api } from '../../API/TickerApi'
export const api = {
    getTickers(options) {
        return Api.get("/v3/reference/tickers", { params: options.params })
    },
    getTicker(options) {
        return Api.get(`/v3/reference/tickers/${options.ticker_id}`, { params: options.params })
    },
    searchForTicker(options) {
        return Api.get(`/v3/reference/tickers`, { params: options.params })
    },
    getTickerStats(options) {
        console.log(options)
        return Api.get(`/v2/aggs/ticker/${options.ticker_id}/prev`, { params: {} })
    },
    getTickerLogo(options) {
        return Api.get(options.logo_url)
    }
}
