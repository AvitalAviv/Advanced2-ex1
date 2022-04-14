import Chat from "./chat/Chat";
import User from "./User";
import Message from "./message/Message";
import omerphoto from "../usersPhotos/omer.jpg";
import avitalphoto from "../usersPhotos/avital.jpg";
import davidphoto from "../usersPhotos/david.jpg";
import dvitphoto from "../usersPhotos/dvir.jpg";
import nivphoto from "../usersPhotos/niv.jpg";
import ronphoto from "../usersPhotos/ron.jpg";
import mario from "../usersPhotos/mario.mp4";

/**
 * The db of the project 
 */
class DbUsers {
    constructor() {
        var current = new Date();
        var time_now = current.getHours() + ':' + current.getMinutes();

        this.db = new Map();
        this.db.set("Omer", new User("Omer", "scrum master", "123", omerphoto));
        this.db.set("Avital", new User("Avital", "Avitalos", "123", avitalphoto));
        this.db.set("Ron", new User("Ron", "Ronen", "123", ronphoto));
        this.db.set("Niv", new User("Niv", "NivNah", "123", nivphoto));
        this.db.set("Dvir", new User("Dvir", "Dviri", "123", dvitphoto));
        this.db.set("David", new User("David", "King", "123", davidphoto));

        this.user_nickname_db = new Map();
        this.user_nickname_db.set("Omer", "scrum master");
        this.user_nickname_db.set("Ron", "Ronen");
        this.user_nickname_db.set("Niv", "NivNah");
        this.user_nickname_db.set("Dvir", "Dviri");
        this.user_nickname_db.set("David", "King");
        this.user_nickname_db.set("Avital", "Avitalos");


        //creating chats between Omer to all parties
        var chat_one = new Chat("scrum master", "Avitalos", omerphoto, avitalphoto);
        var chat_two = new Chat("scrum master", "Ronen", omerphoto, ronphoto);
        var chat_three = new Chat("scrum master", "NivNah", omerphoto, nivphoto);
        var chat_four = new Chat("Omer", "Dviri", omerphoto, dvitphoto);
        var chat_five = new Chat("Omer", "King", omerphoto, davidphoto);

        //add messages to chat
        chat_one.addMessage(new Message("Avitalos", "text", "Naama!", time_now));
        chat_two.addMessage(new Message("Ronen", "audio", "path", time_now));
        chat_three.addMessage(new Message("NivNah", "image", nivphoto, time_now));
        chat_four.addMessage(new Message("Dviri", "video", mario, time_now));
        chat_five.addMessage(new Message("King", "text", "How are you? Maybe well go to drink coffe sometimes", time_now));

        //add chats to user
        this.db.get("Omer").chats.push(chat_one);
        this.db.get("Avital").chats.push(chat_one);
        this.db.get("Omer").chats.push(chat_three);
        this.db.get("Omer").chats.push(chat_four);
        this.db.get("Omer").chats.push(chat_five);

        this.db.get("Niv").chats.push(chat_three);
        this.db.get("Dvir").chats.push(chat_four);
        this.db.get("David").chats.push(chat_five);
    }

    //need to check again   
    addUser(user) {
        this.db.set(user.user_name, user);
    }
    checkUser(user_name, password) {

        for (var i = 0; i < this.db.length; i++) {
            if (this.db[i].doesMe(user_name, password)) {
                return true;
            }
        }
        return false;
    }

    findUser(user_name) {
        return this.db.get(user_name);
    }
    findUserByName(name) {
        return false;
    }
}
export default DbUsers;