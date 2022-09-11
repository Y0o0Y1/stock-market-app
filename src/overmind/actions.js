export const setLoader = (state) => {
    state.isLoading = true
}


export const removeLoader = (state) => {
    state.isLoading = false
}

export const authenticateUser = (state) => {
    state.isLoggedIn = true
}