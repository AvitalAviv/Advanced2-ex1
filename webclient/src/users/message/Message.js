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
}
export default Message;