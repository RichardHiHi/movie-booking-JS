const select = document.querySelector(".select");
const seats = document.querySelector(".container-seat");
const seatCount = document.querySelectorAll(".seat.selected");





// event for select 
select.addEventListener("change", function() {
    console.log(select.value);
})


//event for select seat
seats.addEventListener("click", function(event) {
    event.target.classList.toggle("selected");
    console.log(seatCount)
})