const cards = document.querySelectorAll('.card');
// Если будет так const card = document.querySelector('.card'); будет захвачен только первый узел с элементом .card
for (let i = 0; i < cards.length; i++){
    const card = cards[i];
// Создаем слушатель события 'mousemoove' для card через функцию 'rotate'
card.addEventListener('mousemove', rotate);
card.addEventListener('mouseout', stoprotate);
}
// Создаем слушатель события 'mousemoove' для card через функцию 'rotate'
//card.addEventListener('mousemove', rotate)

function rotate(event) {
// Находим внутри элемента card элемент card-item
    const cardItem = this.querySelector('.card-item');
// Получение координат мышки от верхнего левого угла карточки - cardItem.innerText = event.offsetX +' '+ event.offsetY;
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidht = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/5+'deg) rotateY('+-(event.offsetX - halfWidht)/5+'deg)';
}

function stoprotate(event) {
// Находим внутри элемента card элемент card-item
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
}





