export const register = async () => {

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

export const loadPosts = async ({ state, effects }) => {
    console.log({ effects, state })
    state.user.posts = await effects.user.api.getPosts().then((response) => {
        console.log(response.data)
    })
}