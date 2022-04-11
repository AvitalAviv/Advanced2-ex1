class Chat {
    constructor(one_user, two_user, one_user_photo, second_user_photo) {
        this.one_user = one_user;
        this.two_user = two_user;
        this.messages = []
        this.last_message = "";
        this.one_user_photo = one_user_photo;
        this.second_user_photo = second_user_photo;
        this.number = 0;

    }
    addMessage(message) {
        this.last_message = message;
        this.messages.push(message);
    }
    getMessages() {
        return this.messages;
    }
    getLastMessage() {
        return this.last_message;
    }
}
export default Chat;