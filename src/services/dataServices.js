export const dataService = {
    findUser(moment, users) {
        for (let user of users) {
            if (parseInt(user.id) === parseInt(moment.userId)) return (user);
        }
    }
}