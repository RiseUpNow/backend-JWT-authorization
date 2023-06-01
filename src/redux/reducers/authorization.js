import initialState from "../initialState";
export default function authorization(state = initialState.login, action) {
    switch(action.type) {
        case "SignIn":
            return Object.assign({}, state, {
                user: action.user,
                isAuth: action.isAuth
            });
        case "SignOut":
            return Object.assign({}, state, {
                user: action.user,
                isAuth: action.isAuth
            });
        case "checkAuth":
            return Object.assign({}, state, {
                user: action.user,
                isAuth: action.isAuth
            });
        case "checkLoading":
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        default: return state;
    }
}