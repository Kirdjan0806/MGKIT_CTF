// Уровень 1: Авторизация
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = event.target[0].value; // Получаем имя пользователя
    const password = event.target[1].value; // Получаем пароль из формы
    if (username === 'admin' && password === 'password123') { // Замените на ваши данные
        window.location.href = 'level2.html';
    } else {
        document.getElementById('error-message').innerText = 'Неверное имя пользователя или пароль!';
        document.getElementById('error-message').classList.add('fade-in');
    }
});

// Уровень 2: Проверка шифра
function checkCipher() {
    const answer = document.getElementById('cipherAnswer').value;
    
    if (answer === 'MGKIT_CTF_2024') { // Расшифрованное сообщение
        window.location.href = 'level3.html';
    } else {
        document.getElementById('cipher-message').innerText = 'Неверный ответ!';
        document.getElementById('cipher-message').classList.add('fade-in');
    }
}

// Уровень 3: SQL инъекция
function checkSQL() {
    const userId = document.getElementById('userId').value;
    
    if (userId === '1 OR 1=1') {
        window.location.href = 'level4.html';
    } else {
        document.getElementById('sql-message').innerText = 'Неверный ID!';
        document.getElementById('sql-message').classList.add('fade-in');
    }
}

// Уровень 4: Проверка исходного кода
function checkSource() {
    const answer = document.getElementById('sourceAnswer').value;
    if (answer === 'MGKIT_CTF_PRO') { // Декодированный ответ
        window.location.href = 'level5.html';
    } else {
        document.getElementById('source-message').innerText = 'Неверный ответ!';
        document.getElementById('source-message').classList.add('fade-in');
    }
}

// Уровень 5: Командный терминал
function executeCommand() {
    const command = document.getElementById('terminalInput').value;

    if (command === 'cat flag.txt') {
        document.getElementById('flag-message').style.display = 'block';
        document.getElementById('terminal-output').innerText += 'nФлаг найден!';
        
        setTimeout(() => { window.location.href = 'victory.html'; }, 2000);
        
    } else {
        document.getElementById('terminal-output').innerText += 'n' + command + ': команда не найдена';
        
        // Добавляем анимацию для вывода
        document.getElementById('terminal-output').classList.add('fade-in');
        
        // Сбросим ввод
        document.getElementById('terminalInput').value = '';
    }
}

const chars = document.querySelectorAll('.char');

chars.forEach((char, index) => {
  char.style.animationDelay = `${index * 0.1}s`;
});