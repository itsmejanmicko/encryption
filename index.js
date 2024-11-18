const encrypt = document.getElementById('encrypt');
const decrypt = document.getElementById('decrypt');
const text_area = document.getElementById('text_area');
const password = document.getElementById('password');

function encryptText(text, secret) {
    const encrypted = CryptoJS.AES.encrypt(text, secret);
    return encrypted.toString();
}

function decryptText(cipherText, secret) {
    const decrypted = CryptoJS.AES.decrypt(cipherText, secret);
    return decrypted.toString(CryptoJS.enc.Utf8); 
}

function checkIsValid(text) {
    if (!text) {
        alert('Insert a text!');
        return false;
    }
    return true;
}

function checkIsPassword(pass) {
    if (!pass) {
        alert("Password is required!");
        return false;
    }
    return true;
}

encrypt.addEventListener('click', (e) => {
    e.preventDefault();
    const text = text_area.value.trim();
    const passwordValue = password.value.trim();

    if (!checkIsValid(text)) return;
    if (!checkIsPassword(passwordValue)) return;

    const encrypted = encryptText(text, passwordValue);
    text_area.value = encrypted;
    encrypt.disabled = true;
    decrypt.disabled = false; 
});

decrypt.addEventListener('click', (e) => {
    e.preventDefault();
    const text = text_area.value.trim();
    const passwordValue = password.value.trim();

    if (!checkIsValid(text)) return;
    if (!checkIsPassword(passwordValue)) return;

    try {
        const decrypted = decryptText(text, passwordValue);
        if (!decrypted) {
            throw new Error("Decryption key is not valid!");
        }
        text_area.value = decrypted;
        encrypt.disabled = false; 
        decrypt.disabled = true; 
    } catch (error) {
        alert(error.message);
    }
});
