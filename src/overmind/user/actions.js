import { removeLoader, setLoader } from './../actions';
export const register = async ({ state, effects }, data) => {
    const userData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
    }
    await effects.user.api.registerUser(userData, state)
        .then((response) => {
            state.success = true
            state.user.redirect = true
            state.successMessage = "User Registered Successfully"
            console.log(response)
            return response
        }).catch((error) => {
            console.log({ errorStatus: error })
            state.errorMessage = error
            state.error = true
            return error
        })

}

export const logIn = async ({ state, effects }, userData) => {
    setLoader(state)
    await effects.user.api.logIn(userData).then((response) => {
        removeLoader(state)
        authenticateUser(state, response)
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
    console.log({
        message: "From Login Action",
    })
}
const authenticateUser = (state, userData) => {
    state.user.userData = userData
    state.isLoggedIn = true
}

export const logOut = async ({ state }) => {
    setLoader(state)
    state.user.userData = null
    state.isLoggedIn = false

    removeLoader(state)

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

// export const onInitializeOvermindUserBranch = async ({ state, localStorage }, overmind) => {
//     localStorage.set("state", state.user)
//     overmind?.addMutationListener((mutation) => {
//         console.log("on init", mutation, state)
//     })
// }