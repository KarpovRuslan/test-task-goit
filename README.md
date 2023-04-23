# Тестове завдання

Проект сворено за допомогою [Create-React-App](https://create-react-app.dev/ Create-React-App)

Мета: створити картки твітів та додати інтерактивності при клікові на кнопку.

! [TestImg](https://textbook.edu.goit.global/lms-career-homework/uk/img/image-1.jpg)
_Загальний вигляд картки у двох станах - Follow та Following_

## Технічне завдання​

Відповідно до макету потрібно реалізувати картки юзера.

При клікові на кнопку Follow - текст змінюється на Following. Також змінюється колір кнопки. А до кількості фоловерів додається і ваш. Тобто, початкова кількість складає 100,500 фоловерів. При клікові на кнопку буде 100,501.

При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто, якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається в стані Following із відповідним кольором, а кількість фоловерів НЕ зменшується до початкового значення.

При повторному клікові на кнопку її текст та колір змінюються до початкового стану. Також змінюється і кількість фоловерів. Вона зменшується на 1 (100,500).

В коді цифра 100,500 має бути прописана одним значенням (100500). В UI - виведено через кому (100,500).
