function generatePassword() {
    const length = parseInt(document.getElementById('length').value, 10);
    if (length <= 0) {
        alert("Длина пароля должна быть больше 0.");
        return;
    }
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').textContent = password;
    document.getElementById('passwordWindow').style.display = 'flex';
}

function copyPassword() {
    const passwordElement = document.getElementById('password');
    const passwordText = passwordElement.textContent;
    if (passwordText) {
        navigator.clipboard.writeText(passwordText)
            .then(() => {
                const copyButton = document.getElementById('copyButton');
                copyButton.textContent = 'Скопировано!';
                setTimeout(() => {
                    copyButton.textContent = 'Копировать';
                }, 2000);
            })
            .catch(() => console.log('Не удалось скопировать пароль.'));
    }
}
