function submitData() {
    // Получаем значения из полей ввода
    const c1 = document.getElementById('c1').value; 
    const c2 = document.getElementById('c2').value; 
    const c3 = document.getElementById('c3').value;
    const outputString = `${c1}|${c2}|${c3}`;

    // Выводим результат на страницу
    document.getElementById('output').textContent = outputString;

    // Отправляем данные в Telegram через Web App
    if (window.Telegram && window.Telegram.WebApp) {
        const data = { c1, c2, c3 };
        window.Telegram.WebApp.sendData(JSON.stringify(data));
    } else {
        console.error("Telegram Web App не доступен.");
    }
}
