export const setLoader = (state) => {
    console.log("Loading....")
    state.isLoading = true
}


export const removeLoader = (state) => {
    state.isLoading = false
}

export const onInitializeOvermind = async ({ state }) => {
    const isAuthed = localStorage.getItem('isLoggedIn');
    if (isAuthed) {
        state.isLoggedIn = true
    }

}

export const removeRedirection = ({ state }) => {
    state.user.redirect = false
}

export const removeFeedbackIndicator = ({ state }) => {
    if (state.error)
        state.error = false
    if (state.success)
        state.success = false
}
