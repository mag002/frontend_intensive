var dateScreen = document.querySelector('.date-container');
var seatScreen = document.querySelector('.seat-container');

var reserveButton = document.getElementById('reserve-button');
var backButton = document.getElementById('back-button');

var dateSelection = document.querySelector('.date-selection');

var moreText = document.querySelector('.more');
var threeDots = document.querySelector('.three-dots');
var readMoreButton = document.querySelector('#read-more');
var lessButton = document.querySelector('#less');

var seatRowOneLeftHTML = document.querySelector('#seat-row-one>.seat-row:first-child')
var seatRowOneRightHTML = document.querySelector('#seat-row-one>.seat-row:last-child')

var seatRowTwoLeftHTML = document.querySelector('#seat-row-two>.seat-row:first-child')
var seatRowTwoRightHTML = document.querySelector('#seat-row-two>.seat-row:last-child')

var seatRowThreeHTML = document.querySelector("#seat-row-three");
var seatRowFourHTML = document.querySelector("#seat-row-four");
var seatRowFiveHTML = document.querySelector("#seat-row-five");
var seatRowSixHTML = document.querySelector("#seat-row-six");

var seatSelectedNameHTML = document.getElementById('selected-seats-name');
var totalPriceHTML = document.getElementById('total-price');
var buyButton = document.getElementById('buy-button');

reserveButton.addEventListener("click", function () {
    dateScreen.classList.add('d-none');
    seatScreen.classList.remove('d-none');
})

backButton.addEventListener("click", function (event) {
    dateScreen.classList.remove('d-none');
    seatScreen.classList.add('d-none');
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
for (var i = 0; i < slots.length; i++) {

    var slotContainer = document.createElement('div');
    var dateContainer = document.createElement('div');
    dateContainer.classList.add('date');
    var date = document.createElement('div');
    date.innerHTML = slots[i].date;
    if (i == 1 || i == 3) {
        slotContainer.classList.add('up-one')
    }
    if (i == 2) {
        dateContainer.classList.add('active')
        slotContainer.classList.add('up-two')
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



var selectedSeats = [
]
function generateSeatNameAndPrice() {
    seatSelectedNameHTML.innerHTML = "";
    totalPriceHTML.innerHTML = "";
    console.log('selectedSeats', selectedSeats)
    for (var i = 0; i < selectedSeats.length; i++) {
        var currentSeat = selectedSeats[i];
        seatSelectedNameHTML.innerHTML = seatSelectedNameHTML.innerHTML + currentSeat.id
        totalPriceHTML.innerHTML = +totalPriceHTML.innerHTML + +currentSeat.price;

    }
}
function updateBuyButtonStatus() {
    if (selectedSeats.length !== 0) {
        buyButton.disabled = false
    } else {
        buyButton.disabled = true
    }
}

function handleSeatClick(event) {
    var available = event.target.dataset.available;
    var id = event.target.dataset.id;
    var isVip = event.target.dataset.isVip;
    var price = event.target.dataset.price;
    console.log(typeof available)
    if (available === 'true') {


        if (event.target.classList.value.includes('selected')) {
            event.target.classList.remove('selected');

            // Hint: Require
            // find item in array by id
            // delete item in array by index
            selectedSeats = [];

        } else {
            event.target.classList.add('selected');
            var newSeat = {
                id: id,
                isVip: isVip,
                price: price
            }

            selectedSeats.push(newSeat)
        }
        generateSeatNameAndPrice()
        updateBuyButtonStatus()


        // Add 
        // Store data
        // Update screen


        // Remove
        // Remove data
        // Update screen

    } else {
        // Replace with animation 
        alert("Seat booked!!!")
    }
}


function generateSeats(rowData, seatRowHTML) {
    for (var i = 0; i < rowData.length; i++) {
        var currentSeat = rowData[i]

        var seat = document.createElement('div');
        seat.classList.add('seat');
        seat.dataset.available = currentSeat.available;
        seat.dataset.id = currentSeat.id;
        seat.dataset.isVip = currentSeat.isVip;
        seat.dataset.price = currentSeat.price;
        // Code here!

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

        seatRowHTML.appendChild(seat)
    }
}

generateSeats(seat_row_one.slice(0, seat_row_one.length / 2), seatRowOneLeftHTML);
generateSeats(seat_row_one.slice(seat_row_one.length / 2), seatRowOneRightHTML);

generateSeats(seat_row_two.slice(0, seat_row_two.length / 2), seatRowTwoLeftHTML);
generateSeats(seat_row_two.slice(seat_row_two.length / 2), seatRowTwoRightHTML);

generateSeats(seat_row_three, seatRowThreeHTML)
generateSeats(seat_row_four, seatRowFourHTML)
generateSeats(seat_row_five, seatRowFiveHTML)
generateSeats(seat_row_six, seatRowSixHTML)

var dates = document.querySelectorAll('.date-selection>div');
function clearClass() {
    for (var i = 0; i < dates.length; i++) {
        dates[i].classList = ""
    }
}
dateSelection.addEventListener('scroll', function (e) {
    clearClass()
    var itemWidth = 75;
    currentItem = Math.floor(e.target.scrollLeft / itemWidth)

    upOne = currentItem + 1
    upOneAnother = currentItem + 3

    upTwo = currentItem + 2
    dates[upOne].classList.add('up-one')
    dates[upOneAnother].classList.add('up-one')
    dates[upTwo].classList.add('up-two')

    console.log(event.target.scrollLeft)

})




