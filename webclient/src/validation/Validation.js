/**
 * Validation function for signing in
 * @param {*} userName 
 * @param {*} nickName 
 * @param {*} passwordFirst 
 * @param {*} passwordSecond 
 * @param {*} file 
 * @returns - true or false
 */
function Validation(userName, nickName, passwordFirst, passwordSecond, file) {
    if (userName === "") {
        alert("Please enter user name");
        return false;
    }
    if (nickName === "") {
        alert("Please enter display name");
        return false;
    }
    if (passwordFirst === "" || passwordSecond === "") {
        alert("Password is empty");
        return false;
    }
    if (userName.length < 8) {
        alert("User name less than 8 characters");
        return false;
    }
    if (passwordFirst.length < 8) {
        alert("Password less than 8 characters");
        return false;
    }
    if (nickName.length < 8) {
        alert("Display name less than 8 characters");
        return false;
    }
    var regexLetterAndNumber = /^[A-Za-z0-9]*$/;
    if (!regexLetterAndNumber.test(passwordFirst)) {
        alert("Your password has to contain numbers and letters");
        return false;
    }
    if (passwordFirst !== passwordSecond) {
        alert("Repeated password incorrect");
        return false;
    }
    return true;
}

export default Validation;