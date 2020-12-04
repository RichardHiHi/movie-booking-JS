const select = document.querySelector(".select");
const containerSeat = document.querySelector(".container-seat");
const seats = document.querySelectorAll(".row .seat");
const countSeat = document.querySelector(".total-seat");
const totalMoney = document.querySelector(".total-money");



function updatecount() {
    const seatSelected = document.querySelectorAll(".row .seat.selected");
    const indexSeat = [...seatSelected].map(seat => [...seats].indexOf(seat))\
        //chuyển đỏi thành json rồi mới lưu
    localStorage.setItem("indexSeat", JSON.stringify(indexSeat));
    countSeat.innerHTML = seatSelected.length;
    totalMoney.innerHTML = +select.value * seatSelected.length;
}


// populate UI after reload
function populateUI() {

    //lấy dữ liêu json ra chuyển đổi thành dũ liệu thg
    const arrIndexSeat = JSON.parse(localStorage.getItem('indexSeat'));
    const indexOption = JSON.parse(localStorage.getItem('indexOption'));

    if (arrIndexSeat) {
        arrIndexSeat.forEach((indexSeat) => {
            seats[indexSeat].classList.add('selected');
        });
    }

    if (indexOption) {
        select.selectedIndex = indexOption;
    }


    updatecount();
}




// event for select 
select.addEventListener("change", e => {

    const indexOption = e.target.selectedIndex;
    localStorage.setItem("indexOption", indexOption);
    updatecount();
})


//event for select seat
containerSeat.addEventListener("click", event => {
    event.target.classList.toggle("selected");
    updatecount();
})

populateUI();