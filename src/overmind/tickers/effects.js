
import { Api } from '../../API/TickerApi'
export const api = {
    getTickers(options) {
        return Api.get("", { params: options.params })
    },
    getTicker(options) {
        return Api.get(`/${options.ticker_id}`, { params: options.params })
    }
}
