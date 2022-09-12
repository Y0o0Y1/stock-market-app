export const setLoader = (state) => {
    state.isLoading = true
}


export const removeLoader = (state) => {
    state.isLoading = false
}

export const onInitializeOvermind = async ({ state }, overmind) => {
    const isAuthed = localStorage.getItem('isLoggedIn');
    if (isAuthed) {
        state.isLoggedIn = true
    }
    overmind.addMutationListener((mutation) => {
        console.log("MUT", mutation.path)
        if (mutation.path == "isLoggedIn") {
            console.log("MUT2, we need to persist")
            localStorage.setItem("isLoggedIn", JSON.stringify(true))
            console.log("MUT", state)
        }
    })
}
