import Chat from "./chat/Chat";
import User from "./User";

class DbUsers {
    constructor() {
        this.db = [new User("Omer", "scrum master", "123", "None"),
        new User("Avital", "Avitalos", "123", "None"),];
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
    printDb() {
        for (var i = 0; i < this.db.length; i++) {
            console.log(this.db[i].user_name);
        }
    }
    findUser(user_name) {
        for (var i = 0; i < this.db.length; i++) {
            if (this.db[i].user_name === user_name) {
                return this.db[i];
            }
        }
        return null;
    }
    findUserByNickname(nickname) {
        for (var i = 0; i < this.db.length; i++) {
            if (this.db[i].nick_name === nickname) {
                return true;
            }
        }
        //display error
        return false;
    }
}
export default DbUsers;