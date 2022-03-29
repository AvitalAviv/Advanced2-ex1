function Validation(userName, nickName, passwordFirst, passwordSecond) {
    if (userName === "" || nickName == "") {
        return false;
    }
    if (passwordFirst === "" || passwordSecond === "") {
        return false;
    }
    if (userName.length < 8 || passwordFirst.length < 8 || nickName < 8 || passwordSecond < 8) {
       return false;
    }
    var regexLetterAndNumber = /^[A-Za-z0-9]*$/;
    if (!regexLetterAndNumber.test(passwordFirst)) {
        return false;
    }
    if (passwordFirst != passwordSecond) {
        return false;
    }
    return true;
}
