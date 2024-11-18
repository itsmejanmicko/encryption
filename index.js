const encrypt = document.getElementById('encrypt');
const decrypt = document.getElementById('decrypt');
const text_area = document.getElementById('text_area');

const secret = "038832e701f0d198f2514f0d926724c3f80e0e5ec977ad275a7222785444a995";

function encryptText(text) {
    const encrypted = CryptoJS.AES.encrypt(text, secret);
    return encrypted.toString();
}

function decryptText(cipherText) {
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


encrypt.addEventListener('click', (e) => {
    e.preventDefault();
    
    const text = text_area.value;
    if (!checkIsValid(text)) return;

    const encrypted = encryptText(text);
    text_area.value = encrypted;
});


decrypt.addEventListener('click', (e) => {
    e.preventDefault();
    
    const text = text_area.value;
    if (!checkIsValid(text)) return;

    try {
        const decrypted = decryptText(text);
        text_area.value = decrypted; 
    } catch (error) {
        alert("Invalid encrypted text!");
    }
});
