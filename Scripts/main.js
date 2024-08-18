const burderItem = document.getElementById('burger');
const nav = document.getElementById('nav');

burderItem.addEventListener('click', () => {
    nav.classList.toggle('active');
    burderItem.classList.toggle('active');
})