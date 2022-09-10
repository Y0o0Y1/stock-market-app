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
            state.user.redirect = true
            state.successMessage = "User Registered Successfully"
            console.log(response)
            return response
        }).catch((error) => {
            console.log({ errorStatus: error })
            state.errorMessage = error
            state.isLoading = false
            state.error = true
            return error
        })

}

export const logIn = async ({ state, effects }, userData) => {
    state.isLoading = true
    await effects.user.api.logIn(userData).then((response) => {
        state.user.isLoggedin = true
        state.isLoading = false
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
    console.log({
        message: "From Login Action",
    })
}


export const setError = ({ state }) => {
    state.error = true
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

export const loadPosts = async ({ state, effects }, value) => {
    console.log({ value })
    console.log({ effects, state })
    state.user.posts = await effects.user.api.getPosts().then((response) => {
        console.log(response.data)
    })
}

// export const onInitializeOvermind = async ({ state, localStorage }, overmind) => {
//     overmind.addMutationListener((mutation) => {
//         if (mutation.path.indexOf('user') === 0)
//             localStorage.set('user', state.user)

//     })
// }