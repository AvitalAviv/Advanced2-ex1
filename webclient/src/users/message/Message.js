
/**
 * Message Object
 */
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
    /**
     * function that return the html code , depending the type
     * @returns html code
     */
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
        if (this.type === "video") {
            return (
                <video width="320" height="240" controls>
                    <source src={this.value} type="video/mp4" />
                </video>
            );
        }
        return this.value;
    }
    /**
     * message preview - for chat item - presenting the message according to the type
     * @returns - text
     */
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
            return "video";
        }
        if (this.type === "image") {
            return "image";
        }
    }
    getMessageSender() {
        return this.sender;
    }
}

export default Message;