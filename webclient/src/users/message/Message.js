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
        if (this.type === "text") {
            return <div>{this.value}</div>
        }
        if (this.type === "image") {
            return <img src={this.value} alt="Responsive image" class="img-thumbnail"></img>
        }
        if (this.type === "audio") {
            return <audio controls src={this.value} ></audio>
            
        }
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
        if (this.type === "video") {
            return "video"
        }
    }
    getMessageSender() {
        return this.sender;
    }
}
export default Message;