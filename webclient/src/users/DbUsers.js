import Chat from "./chat/Chat";
import User from "./User";
import Message from "./message/Message";
import omerphoto from "../usersPhotos/omer.jpg";
import avitalphoto from "../usersPhotos/avital.jpg";
import davidphoto from "../usersPhotos/david.jpg";
import dvitphoto from "../usersPhotos/dvir.jpg";
import nivphoto from "../usersPhotos/niv.jpg";
import ronphoto from "../usersPhotos/ron.jpg";
import avatarphoto from "../usersPhotos/avatar.jpg";
import zukophoto from "../usersPhotos/zuko.jpg";
import mario from "../usersPhotos/mario.mp4";
import birdsSinging from "../usersPhotos/BirdsSinging.mp3";

/**
 * The db of the project 
 */
class DbUsers {
    constructor() {
        var current = new Date();
        var minute = current.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        var time_now = current.getHours() + ':' + minute;

        this.db = new Map();
        this.db.set("Omer_Apla", new User("Omer_Apla", "scrum master", "12345678Aa", omerphoto));
        this.db.set("Avital_os", new User("Avital_os", "Avitalos", "87654321Aa", avitalphoto));
        this.db.set("Ron_banini", new User("Ron_banini", "Ronen_even", "12345678Aa", ronphoto));
        this.db.set("NivNahman", new User("NivNahman", "NivNah", "12345678Aa", nivphoto));
        this.db.set("Dvir_amram", new User("Dvir_amram", "Dviri8080", "12345678Aa", dvitphoto));
        this.db.set("David_IS", new User("David_IS", "KingDavid", "12345678Aa", davidphoto));
        this.db.set("Avatar_Aang", new User("Avatar_Aang", "AvatarAng", "12345678Aa", avatarphoto));
        this.db.set("Zuko_fire", new User("Zuko_fire", "ZukoSonOfOzay", "12345678Aa", zukophoto));


        this.user_nickname_db = new Map();
        this.user_nickname_db.set("Omer_Apla", "scrum master");
        this.user_nickname_db.set("Ron_banini", "Ronen_even");
        this.user_nickname_db.set("NivNahman", "NivNah12");
        this.user_nickname_db.set("Dvir_amram", "Dviri8080");
        this.user_nickname_db.set("David_IS", "KingDavid");
        this.user_nickname_db.set("Avital_os", "Avitalos");
        this.user_nickname_db.set("Avatar_Aang", "AvatarAng");
        this.user_nickname_db.set("Zuko_fire", "ZukoSonOfOzay");


        //creating chats between Omer to all parties
        var chat_one = new Chat("scrum master", "Avitalos", omerphoto, avitalphoto);
        var chat_two = new Chat("scrum master", "Ronen_even", omerphoto, ronphoto);
        var chat_three = new Chat("scrum master", "NivNah12", omerphoto, nivphoto);
        var chat_four = new Chat("Omer_Apla", "Dviri8080", omerphoto, dvitphoto);
        var chat_five = new Chat("Omer_Apla", "KingDavid", omerphoto, davidphoto);

        //add messages to chat
        chat_one.addMessage(new Message("Avitalos", "text", "Naama!", time_now));
        chat_one.addMessage(new Message("Avitalos", "image", avitalphoto, time_now));
        chat_two.addMessage(new Message("Ronen_even", "text", "listen to the birds singing.. :)", time_now));
        chat_two.addMessage(new Message("Ronen_even", "audio", birdsSinging, time_now));
        chat_three.addMessage(new Message("NivNah12", "image", nivphoto, time_now));
        chat_four.addMessage(new Message("Dviri8080", "video", mario, time_now));
        chat_four.addMessage(new Message("Dviri8080", "text", "mario was a nice game!", time_now));
        chat_four.addMessage(new Message("Dviri8080", "text", "don't you think so?", time_now));
        chat_five.addMessage(new Message("KingDavid", "text", "How are you? Maybe well go to drink coffe sometimes", time_now));

        //add chats to user
        this.db.get("Omer_Apla").chats.push(chat_one);
        this.db.get("Omer_Apla").chats.push(chat_two);

        this.db.get("Avital_os").chats.push(chat_one);
        this.db.get("Omer_Apla").chats.push(chat_three);
        this.db.get("Omer_Apla").chats.push(chat_four);
        this.db.get("Omer_Apla").chats.push(chat_five);

        this.db.get("NivNahman").chats.push(chat_three);
        this.db.get("Dvir_amram").chats.push(chat_four);
        this.db.get("David_IS").chats.push(chat_five);
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