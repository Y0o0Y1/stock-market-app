
export const register = async ({ state, effects, }, data) => {
    state.isLoading = true

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
            state.isLoading = false
            state.successMessage = "User Registered Successfully"
            console.log(response)
            return response
        }).catch((error) => {
            console.log({ errorStatus: error })
            state.errorMessage = error.message
            state.error = true
            state.isLoading = false

            return error
        })

}

export const logIn = async ({ state, effects }, userData) => {
    state.isLoading = true
    await effects.user.api.logIn(userData).then((response) => {
        state.success = true
        state.successMessage = "Logged In Successfully"
        state.isLoading = false
        authenticateUser(state, response)
        console.log(response)
    }).catch((error) => {
        state.isLoading = false
        state.error = true
        state.errorMessage = error.message
        console.log({ error: error })
    })

}
const authenticateUser = (state, userData) => {
    state.user.userData = userData
    state.isLoggedIn = true
    localStorage.setItem('isLoggedIn', 'true');

}

export const logOut = async ({ state }) => {
    state.user.userData = null
    state.isLoggedIn = false
    localStorage.removeItem('isLoggedIn');
}

