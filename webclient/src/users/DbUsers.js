import Chat from "./chat/Chat";
import User from "./User";
import Message from "./message/Message";

class DbUsers {
    constructor() {
        const d = new Date();
        var time = d.getTime();

        this.db = [
            new User("Omer", "scrum master", "123", "None"),
            new User("Avital", "Avitalos", "123", "None"),
            new User("Ron", "Ronen", "123", "None"),
            new User("Niv", "NivNah", "123", "None"),
            new User("Dvir", "Avitalos", "123", "None"),
            new User("David", "King", "123", "None"),
        ];
        //creating chats between Omer to all parties
        var chat_one = new Chat("Omer", "Avital");
        var chat_two = new Chat("Omer", "Ron");
        var chat_three = new Chat("Omer", "Niv");
        var chat_four = new Chat("Omer", "Dvir");
        var chat_five = new Chat("Omer", "David");

        //add messages to chat
        chat_one.addMessage("Omer", new Message("text", "Naama!", time));
        chat_two.addMessage("Ron", new Message("audio", "path", time));
        chat_three.addMessage("Niv", new Message("image", "C:\Users\omera\OneDrive - Bar-Ilan University\Desktop\advance programming\Advanced2-ex1\webclient\src\signuppage\logo.png", time));
        chat_four.addMessage("Dvir", new Message("video", "path", time));
        chat_five.addMessage("David", new Message("text", "How are you? Maybe well go to drink coffe sometimes", time));

        //add chats to user
        this.db[0].addChat(chat_one);
        this.db[0].addChat(chat_two);
        this.db[0].addChat(chat_three);
        this.db[0].addChat(chat_four);
        this.db[0].addChat(chat_five);
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