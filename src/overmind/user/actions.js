export const register = async ({ state, effects }, data) => {
    state.isLoading = true
    const userData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
    }
    await effects.user.api.registerUser(userData, state)
        .then((response) => {
            state.isLoading = false
            state.success = true
            state.successMessage = "User Registered Successfully"
            console.log(response)
        }).catch((error) => {
            console.log({ error })
            state.errorMessage = error
            state.isLoading = false
            state.error = true
        })

}

export const logIn = async ({ state, effects, actions }) => {
    state.user.isLoggedin = true
    console.log({
        message: "From Login Action",
        state,
        effects,
        actions
    })
}


export const setError = ({ state }) => {
    state.error = true
}
export const removeFeedbackIndicator = ({ state }) => {
    state.error = false
    state.success = false
}

export const loadPosts = async ({ state, effects }, value) => {
    console.log({ value })
    console.log({ effects, state })
    state.user.posts = await effects.user.api.getPosts().then((response) => {
        console.log(response.data)
    })
}