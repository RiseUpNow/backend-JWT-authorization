import IUser from "../models/IUser";

let initialState = {
    pageContacts:{
        contact: [
            {id: 1, name: "Alexander Belov", role: "Boss"},
            {id: 2, name: "Cosmos", role: "Deputy Boss"},
            {id: 3, name: "Vitya Pchelkin", role: "Financier"},
            {id: 4, name: "Valera Filatov", role: "Head of security"}],
        buttonState: "Add"
    },
    login:{
        user : IUser,
        isAuth : false,
        isLoading: false
    }
}

export default initialState;