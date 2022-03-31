
function Validation(userName, nickName, passwordFirst, passwordSecond, file) {
    if (userName === "") {
        alert("Please enter user name");
        return;
    }
    if (nickName === "") {
        alert("Please enter display name");
        return;
    }
    if (passwordFirst === "" || passwordSecond === "") {
        alert("Password is empty");
        return;
    }
    if (userName.length < 8) {
        alert("User name less than 8 characters");
        return;
    }
    if (passwordFirst.length < 8) {
        alert("Password less than 8 characters");
        return;
    }
    if (nickName < 8) {
        alert("Display name less than 8 characters");
        return;
    }
    var regexLetterAndNumber = /^[A-Za-z0-9]*$/;
    if (!regexLetterAndNumber.test(passwordFirst)) {
        alert("Your password has to contain numbers and letters");
        return;
    }
    if (passwordFirst != passwordSecond) {
        alert("Repeated password incorrect");
        return;
    }
    // if (!(file && file['type'].split('/')[0] === 'image')) {
    //     alert("photo being loaded in the wrong format");
    //     return;
    // }
    return true;
}

export default Validation;