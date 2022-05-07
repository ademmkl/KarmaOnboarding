


const INITIAL_STATE={
    pass: false,
    user:[
        {
            id: 0,
            username: "karma",
            password: "karma",
            birthday: new Date(2021, 6, 19)
        }
    ],
    newUser:{}
}


export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_PASS":
            return {...state, pass: action.payload}
        case "SET_NEW":
            return {...state, newUser: action.payload}
        default:
            return state;
    }
}