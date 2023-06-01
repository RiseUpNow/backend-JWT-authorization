function checkAuth(user) {
    return {
        type: "checkAuth",
        user: user,
        isAuth: true
    };
}

export default checkAuth;