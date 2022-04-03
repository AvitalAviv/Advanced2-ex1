import "./ChatItem.css";

function ChatItem({ nick_name, user_image, last_message, last_modified }) {
    return(
        <div className="chatItem">
            <img src={user_image} > </img>
            <div>nick_name</div>
            <div>time</div>
            <div>last message</div>
        </div>
    );
}

export default ChatItem;