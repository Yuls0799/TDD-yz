function validatePassword(password) {
    const validLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/g.test(password);
    const hasNumber = /[0-9]/g.test(password);

    if (validLength && hasLetter && hasNumber) {
        return true;
    } else {
        return false;
    }
}
module.exports = validatePassword