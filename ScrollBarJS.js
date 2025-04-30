// Получаем элемент с прокруткой по id
const scrollBox = document.getElementById('scroll-box');

// Создаём массив с заранее подготовленными абзацами, которые будут подгружаться позже
let arrText = [];
for (let i = 0; i < 100; i++) {
    const pElement = document.createElement('p'); // создаём абзац
    pElement.textContent = "ПРОВЕЗКА!!!!!!!!!!!!!!!!!!!!!!!!!!!! (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; ...";
    arrText.push(pElement); // добавляем абзац в массив
}

// Немедленно отображаем 100 абзацев (не из массива), чтобы заполнить начальный контент
for (let i = 0; i < 100; i++) {
    const pElement = document.createElement('p'); // создаём абзац
    pElement.textContent = "(от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; ...";
    scrollBox.appendChild(pElement); // добавляем в scrollBox
}

// Индекс текущего конца отображённого массива
let current = 20;

// Индекс начала следующей порции
let z = 0;

// Обработчик события scroll
scrollBox.addEventListener('scroll', () => {

    // Если мы уже достигли конца массива, прекращаем
    if (current >= arrText.length) {
        return;
    }

    // Проверка: прокрутили ли до самого низа (учтён небольшой запас -5 пикселей)
    const isAtBottom = scrollBox.scrollTop + scrollBox.clientHeight >= scrollBox.scrollHeight - 5;

    if (isAtBottom) {
        

        // Добавляем новую порцию абзацев (с z до current)
        for (var i = z; i <= current; i++) {
            scrollBox.appendChild(arrText[i]);
        }

        // Обновляем индексы для следующей загрузки
        z = current;
        current += 20;
    }
});

