export const AuthService = {
    saveLog(data) {
        this.saveAuthJson(this.setAuthJson(data));
    },
    setAuthJson(auth) {
        const authJson = {
            id: auth.id,
            token: auth.token,
            username: auth.username
        }
        return authJson;
    },
    saveAuthJson(authJson) {
        localStorage.setItem('auth', JSON.stringify(authJson));
    },
    getAuth() {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (!auth) return false;
        return auth;
    },
    findUser(moment, users) {
        for (let user of users) {
            if (parseInt(user.id) === parseInt(moment.userId)) return (user);
        }
    },
    isCreator(moment) {
        if (moment.creator.id !== this.getAuth().id) return false;
        return true;
    },
    logOut() {
        localStorage.removeItem('auth');
    }
}