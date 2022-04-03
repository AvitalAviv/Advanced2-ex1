function ChatItem({ nick_name, user_image, last_message, last_modified }) {
    return(
        <div className="chatItem">
            <img src={user_image} > </img>
        </div>
    );
}

export default ChatItem;