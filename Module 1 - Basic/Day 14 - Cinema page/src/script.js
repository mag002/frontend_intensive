var dateScreen = document.querySelector('.date-container');
var seatScreen = document.querySelector('.seat-container');

var reserveButton = document.getElementById('reserve-button');
var backButton = document.getElementById('back-button');

reserveButton.addEventListener("click", function () {
    dateScreen.classList.add('d-none');
    seatScreen.classList.remove('d-none');
})

backButton.addEventListener("click", function (event) {
    // dateScreen.classList.remove('d-none');
    // seatScreen.classList.add('d-none');
    console.log('Log:', event.target.dataset.test)
})



var slots = [
    {
        id: "slot_1",
        date: "Thu 21",
        time: "10:00"
    },
    {
        id: "slot_2",
        date: "Thu 21",
        time: "12:00"
    },
    {
        id: "slot_3",
        date: "Thu 21",
        time: "14:30"
    },
    {
        id: "slot_4",
        date: "Thu 21",
        time: "16:00"
    },
    {
        id: "slot_5",
        date: "Thu 21",
        time: "18:00"
    },
]
var dateSelection = document.querySelector('.date-selection');
for (var i = 0; i < slots.length; i++) {

    var slotContainer = document.createElement('div');
    var dateContainer = document.createElement('div');
    dateContainer.classList.add('date');
    var date = document.createElement('div');
    date.innerHTML = slots[i].date;
    if (i == 2) {
        dateContainer.classList.add('active')
    }
    var timeContainer = document.createElement('div');
    timeContainer.classList.add('time');
    var time = document.createElement('div');
    time.textContent = slots[i].time;

    slotContainer.appendChild(dateContainer);
    slotContainer.appendChild(timeContainer);
    dateContainer.appendChild(date);
    timeContainer.appendChild(time);

    dateSelection.appendChild(slotContainer)
}



var moreText = document.querySelector('.more');
var threeDots = document.querySelector('.three-dots');
var readMoreButton = document.querySelector('#read-more');
var lessButton = document.querySelector('#less');

// readMoreButton.addEventListener('click', function (event) {
//     moreText.style.display = 'inline';
//     threeDots.style.display = 'none';
//     readMoreButton.style.display = 'none';

// })
readMoreButton.onclick = function (event) {
    moreText.style.display = 'inline';
    threeDots.style.display = 'none';
    readMoreButton.style.display = 'none';
    lessButton.style.display = 'inline';

}
lessButton.onclick = function (event) {
    moreText.style.display = 'none';
    threeDots.style.display = 'inline';
    readMoreButton.style.display = 'inline';
    lessButton.style.display = 'none';

}

console.log(seat_row_one)

/// Seat picker

var seatRowThreeHTML = document.querySelector("#seat-row-three");
var totalPrice = 0;
for (var i = 0; i < seat_row_three.length; i++) {
    var currentSeat = seat_row_three[i]

    var seat = document.createElement('div');
    seat.classList.add('seat');
    if (!currentSeat.available) {
        seat.classList.add('unavailable');
    }

    seat.addEventListener('click', handleSeatClick)
    seat.innerHTML = ` <svg width="30" height="22" viewBox="0 0 30 22" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 4C0 2.89543 0.89543 2 2 2H4C5.10457 2 6 2.89543 6 4V14C6 15.1046 6.89543 16 8 16H22C23.1046 16 24 15.1046 24 14V4C24 2.89543 24.8954 2 26 2H28C29.1046 2 30 2.89543 30 4V17C30 19.7614 27.7614 22 25 22H5C2.23858 22 0 19.7614 0 17V4Z"
                    fill="#D9D9D9"></path>
                <path
                    d="M7 3C7 1.34315 8.34315 0 10 0H20C21.6569 0 23 1.34315 23 3V14C23 14.5523 22.5523 15 22 15H8C7.44772 15 7 14.5523 7 14V3Z"
                    fill="#D9D9D9"></path>
            </svg>`

    seatRowThreeHTML.appendChild(seat)
}
// TEST
function handleSeatClick(event) {
    event.target.classList.toggle('selected');
}

