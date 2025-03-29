import random
import string

def generate_password(length, use_uppercase, use_lowercase, use_digits, use_special):
    characters = ''.join([
        string.ascii_uppercase if use_uppercase else '',
        string.ascii_lowercase if use_lowercase else '',
        string.digits if use_digits else '',
        string.punctuation if use_special else ''
    ])
    
    if not characters:
        raise ValueError("Please select at least one type of character. | Пожалуйста, выберите хотя бы один тип символа.")

    return ''.join(random.choice(characters) for _ in range(length))

if __name__ == "__main__":
    length = int(input("Enter password length: | Введите длину пароля: "))
    use_uppercase = input("Use uppercase letters? (y/n): | Использовать заглавные буквы? (y/n): ").strip().lower() == 'y'
    use_lowercase = input("Use lowercase letters? (y/n): | Использовать строчные буквы? (y/n): ").strip().lower() == 'y'
    use_digits = input("Use digits? (y/n): | Использовать цифры? (y/n): ").strip().lower() == 'y'
    use_special = input("Use special characters? (y/n): | Использовать специальные символы? (y/n): ").strip().lower() == 'y'

    while True:
        try:
            print(f"Generated password: {generate_password(length, use_uppercase, use_lowercase, use_digits, use_special)} | Сгенерированный пароль: {generate_password(length, use_uppercase, use_lowercase, use_digits, use_special)}")
        except ValueError as e:
            print(e)
            break
        input("Press Enter to generate a new password... | Нажмите Enter, чтобы сгенерировать новый пароль...")
