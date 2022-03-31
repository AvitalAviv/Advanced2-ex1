import User from "./User";

class DbUsers {
    constructor() {
        this.db = [new User("Omer", "scrum master", "123", "None"),
        new User("Avital", "Avitlos", "123", "None")];
    }
    addUser(user) {
        this.db.push(user);
    }
    checkUser(user_name, password) {
        for (var i = 0; i < this.db.length; i++) {
            if (this.db[i].doesMe(user_name, password)) {
                return true;
            }
        }
        return false;
    }
}
export default DbUsers;