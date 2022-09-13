
import { Api } from '../../API/TickerApi'
export const api = {
    getTickers(options) {
        return Api.get("/tickers", { params: options.params })
    },
    getTicker(options) {
        return Api.get(`/tickers/${options.ticker_id}`, { params: options.params })
    },
    searchForTicker(options) {
        return Api.get(`/tickers`, { params: options.params })
    },
    getTickerStats(options){
        return Api.get("/tickers",{})
    }
}
