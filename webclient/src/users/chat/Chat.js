class Chat {
    constructor(one_user, two_user) {
        this.one_user = one_user;
        this.two_user = two_user;
        this.one_user_message = [];
        this.two_user_message = [];
        this.last_message = "";
    }
    addMessage(user_name, message) {
        if (this.one_user.user_name === user_name) {
            this.one_user_message.push(message);
        }
        else {
            this.two_user_message.push(message);
        }
        this.last_message = message;
    }
    getOneMessages() {
        return this.one_user_message;
    }
    getTwoMessages() {
        return this.two_user_message;
    }
    getLastMessage() {
        return this.last_message;
    }
}
export default Chat;