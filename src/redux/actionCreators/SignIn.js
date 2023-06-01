function SignIn(user) {
    return {
        type: "SignIn",
        user: user,
        isAuth: true
    };
}

export default SignIn;