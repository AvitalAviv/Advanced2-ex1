class Message {
    constructor(nick_name, type, value, time) {
        this.type = type;
        this.value = value;
        this.time = time;
        this.nick_name = nick_name;
    }
    getType() {
        return this.type;
    }
    getValue() {
        return this.value;
    }
    getMessageForRevirew() {
        if (this.type === "text") {
            if (this.value.length > 25) {
                return this.value.slice(0, 25) + "...";
            }
            return this.value;
        }
        if (this.type === "audio") {
            return "audio";
        }
        return "photo";
    }
    getMessageSender() {
        return this.sender;
    }
}
export default Message;