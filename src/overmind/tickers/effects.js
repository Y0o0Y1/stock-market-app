
import { Api } from '../../API/TickerApi'
export const api = {
    getTickers(options) {
        return Api.get("", { params: options.params })
    }

}
