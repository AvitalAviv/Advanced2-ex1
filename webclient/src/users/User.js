//User object
class User {
    constructor(user_name, nick_name, password, img_url) {
        this.user_name = user_name;
        this.nick_name = nick_name;
        this.password = password;
        this.img_url = img_url;
        this.chats = [];
    }
    //check if the input is myself
    doesMe(user_name, password) {
        if (this.user_name === user_name && this.password === password) {
            return true;
        }
        return false;
    }
    printName() {
        console.log(this.user_name);
    }
    getPassword() {
        return this.password;
    }
    //search the chat with the other user name
    searchChat(other_user_name) {
        debugger;
        for (var i = 0; i < this.chats.length; i++) {
            if (this.chats[i].two_user === other_user_name || this.chats[i].one_user === other_user_name) {
                return true;
            }
        }
        return false;
    }
}

export default User;