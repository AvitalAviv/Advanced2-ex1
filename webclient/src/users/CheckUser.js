function CheckUser(userName, userPassword) {
    const db = [{ name: "Omer", password: "12345678Aa" }, { name: "Avital", password: "87654321Aa" }];
    for (var i = 0; i < 2; i++) {
        if (db[i].name == userName && db[i].password == userPassword) {
            return true;
        }
    }
    return false;
}
export default CheckUser;