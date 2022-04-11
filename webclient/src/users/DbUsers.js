import Chat from "./chat/Chat";
import User from "./User";
import Message from "./message/Message";
import omerphoto from "../usersPhotos/omer.jpg";
import avitalphoto from "../usersPhotos/avital.jpg";
import davidphoto from "../usersPhotos/david.jpg";
import dvitphoto from "../usersPhotos/dvir.jpg";
import nivphoto from "../usersPhotos/niv.jpg";
import ronphoto from "../usersPhotos/ron.jpg";


class DbUsers {
    constructor() {
        const d = new Date();
        var current = new Date();

        this.db = {
            "Omer": new User("Omer", "scrum master", "123", omerphoto),
            "Avital": new User("Avital", "Avitalos", "123", avitalphoto),
            "Ron": new User("Ron", "Ronen", "123", ronphoto),
            "Niv": new User("Niv", "NivNah", "123", nivphoto),
            "Dvir": new User("Dvir", "Dviri", "123", dvitphoto),
            "David": new User("David", "King", "123", davidphoto)

        }
        //creating chats between Omer to all parties
        var chat_one = new Chat("scrum master", "Avitalos", omerphoto, avitalphoto);
        var chat_two = new Chat("scrum master", "Ronen", omerphoto, ronphoto);
        var chat_three = new Chat("scrum master", "NivNah", omerphoto, nivphoto);
        var chat_four = new Chat("Omer", "Dviri", omerphoto, dvitphoto);
        var chat_five = new Chat("Omer", "King", omerphoto, davidphoto);

        //add messages to chat
        chat_one.addMessage("scrum master", new Message("text", "Naama!", current));
        chat_two.addMessage("Ronen", new Message("audio", "path", current));
        chat_three.addMessage("NivNah", new Message("image", "C:\Users\omera\OneDrive - Bar-Ilan University\Desktop\advance programming\Advanced2-ex1\webclient\src\signuppage\logo.png", current));
        chat_four.addMessage("Dviri", new Message("video", "path", current));
        chat_five.addMessage("King", new Message("text", "How are you? Maybe well go to drink coffe sometimes", current));

        //add chats to user
        this.db["Omer"].chats["Avitalos"] = chat_one;
        this.db["Omer"].chats["Ronen"] = chat_two;

        // this.db["Omer"].addChat(chat_two, "Ronen");
        // this.db["Omer"].addChat(chat_three, "NivNah");
        // this.db["Omer"].addChat(chat_four, "Dviri");
        // this.db["Omer"].addChat(chat_five, "King");
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
        return this.db[user_name];
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