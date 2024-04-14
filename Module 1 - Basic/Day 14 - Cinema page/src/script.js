var dateScreen = document.querySelector('.date');
var seatScreen = document.querySelector('.seat-container');

var reserveButton = document.getElementById('reserve-button');
var backButton = document.getElementById('back-button');

reserveButton.addEventListener("click", function () {
    dateScreen.classList.add('d-none');
    seatScreen.classList.remove('d-none');
})

backButton.addEventListener("click", function () {
    dateScreen.classList.remove('d-none');
    seatScreen.classList.add('d-none');
})

