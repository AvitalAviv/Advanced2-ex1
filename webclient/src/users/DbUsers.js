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
        var current = new Date();
        var time_now = current.getHours() + ':' + current.getMinutes();


        this.db = {
            //key user(me), value - user (object).
            //in the user - chat is a field.
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
        chat_one.addMessage(new Message("Avitalos", "text", "Naama!", time_now));
        chat_two.addMessage(new Message("Ronen", "audio", "path", time_now));
        chat_three.addMessage(new Message("NivNah", "image", "C:\Users\omera\OneDrive - Bar-Ilan University\Desktop\advance programming\Advanced2-ex1\webclient\src\signuppage\logo.png", time_now));
        chat_four.addMessage(new Message("Dviri", "video", "path", time_now));
        chat_five.addMessage(new Message("King", "text", "How are you? Maybe well go to drink coffe sometimes", time_now));

        //add chats to user
        this.db["Omer"].chats.set("Avitalos", chat_one);
        this.db["Avital"].chats.set("scrum master", chat_one);
        this.db["Omer"].chats.set("Ronen", chat_two);

        // this.db["scrum master"].chats["Avitalos"] = chat_one;
        // this.db["Avital"].chats["scrum master"] = chat_one;
        // this.db["scrum master"].chats["Ronen"] = chat_two;
        // this.db["Omer"].addChat(chat_two, "Ronen");
        // this.db["Omer"].addChat(chat_three, "NivNah");
        // this.db["Omer"].addChat(chat_four, "Dviri");
        // this.db["Omer"].addChat(chat_five, "King");
    }

    //need to check again   
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