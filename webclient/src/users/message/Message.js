class Message {
    constructor(type, value, time) {
        this.type = type;
        this.value = value;
        this.time = time;
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
}
export default Message;