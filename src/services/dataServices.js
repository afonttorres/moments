export const dataService = {
    findUser(moment, users) {
        for (let user of users) {
            if (parseInt(user.id) === parseInt(moment.userId)) return (user);
        }
    },
    getLoggedUser() {
        const log = JSON.parse(localStorage.getItem('log'));
        if (!log) return 1;
        return log.log_id;
    }
}