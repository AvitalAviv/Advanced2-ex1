class User {
    constructor(user_name, nick_name, password, img_url) {
        this.user_name = user_name;
        this.nick_name = nick_name;
        this.password = password;
        this.img_url = img_url;

    }
    doesMe(user_name, password) {
        if (this.user_name == user_name && this.password == password) {
            return true;
        }
        return false;
    }
}

export default User;