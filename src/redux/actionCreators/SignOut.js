function SignOut() {
    return {
        type: "SignOut",
        user: {
            email: "",
            isActivated: false,
            id: ""
        },
        isAuth: false
    };
}

export default SignOut;