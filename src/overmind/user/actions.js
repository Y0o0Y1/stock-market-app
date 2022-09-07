export const register = async ({ state, effects }, data) => {
    state.user.isLoading = true
    await effects.user.api.registerUser({
        email: data.email,
        password: data.password,
    }).then((response) => {
        state.user.isLoading = false
        console.log(response)
    }).catch((error) => {
        console.log(error)
        state.user.isLoading = false

    })
    state.user.isLoading = false

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

export const loadPosts = async ({ state, effects }, value) => {
    console.log({ value })
    console.log({ effects, state })
    state.user.posts = await effects.user.api.getPosts().then((response) => {
        console.log(response.data)
    })
}