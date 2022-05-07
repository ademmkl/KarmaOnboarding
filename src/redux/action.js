

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