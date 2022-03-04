//! ************************************************
// ********* PİCK A MOVİE *************

const film = document.querySelector("#film");
const movie = document.querySelector("#movie");
const total = document.querySelector("#total");

movie.addEventListener("click", () => {
  film.textContent = movie.textContent;
});
//! ************************************************
// ********* SELECT A SEAT *************

const selectSeats = document.querySelectorAll(".seat");
const seatSum = document.querySelector("#count");
const occupiedSeats = document.querySelectorAll(".seat.occupied");
const myArray = JSON.parse(localStorage.getItem("myArray")) || [];
seatSum.textContent =
  JSON.parse(localStorage.getItem("seatSum.textContent")) || 0;
total.textContent = JSON.parse(localStorage.getItem("total.textContent")) || 0;

for (i in myArray) {
  selectSeats[myArray[i]].style.backgroundColor = "#6feaf6";
}

for (let i in selectSeats) {
  selectSeats[i].onclick = () => {
    if (i == 11 || i == 12 || i == 22 || i == 23 || i == 35 || i == 36) return;
    selectSeats[i].style.backgroundColor = "#6feaf6";

    if (!myArray.includes(i)) {
      seatSum.textContent++;
      // console.log(seatSum.textContent);
      myArray.push(i);
      // console.log(i);
      total.textContent = movie.value * seatSum.textContent;
      // console.log(movie.value, seatSum);
      console.log(total.textContent);
      localStorage.setItem("myArray", JSON.stringify(myArray));
      localStorage.setItem(
        "seatSum.textContent",
        JSON.stringify(seatSum.textContent)
      );
      localStorage.setItem(
        "total.textContent",
        JSON.stringify(total.textContent)
      );
    }
  };
}
