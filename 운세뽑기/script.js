const luck = ['대길', '중길', '소길', '길', '말길', '흉', '대흉'];
document.querySelector('.card').addEventListener('click', function () {
    if (!this.classList.contains('flip'))
        document.getElementById('card_back').innerText = luck[Math.floor(Math.random() * luck.length)];
    this.classList.toggle('flip');
})