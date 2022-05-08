

export const SetPass = (pass) => {
    return {
        type: "SET_PASS",
        payload: pass
    }
}

export const SetNew = (newUser) => {
    return {
        type: "SET_NEW",
        payload: newUser
    }
}

export const SetLogin = (login) => {
    return {
        type: "SET_LOGIN",
        payload: login
    }
}

export const SetUsers = (users) => {
    return {
        type: "SET_USERS",
        payload: users
    }
}