function generatePassword() {
    const length = document.getElementById('length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').textContent = password;
}

function copyPassword() {
    const passwordElement = document.getElementById('password');
    const passwordText = passwordElement.textContent;
    if (passwordText) {
        navigator.clipboard.writeText(passwordText)
            .then(() => alert('Пароль скопирован!'))
            .catch(() => alert('Не удалось скопировать пароль.'));
    } else {
        alert('Сначала сгенерируйте пароль.');
    }
}
