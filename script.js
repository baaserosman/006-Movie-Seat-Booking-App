//! ************************************************
// ********* PİCK A MOVİE *************

const film = document.querySelector("#film");
const movie = document.querySelector("#movie");
const total = document.querySelector("#total");
let filmName;
function getFilmName(film) {
  filmName = film.options[film.selectedIndex].text;
}

function totalPrice() {
  total.textContent = movie.value * count.textContent;
}

movie.addEventListener("click", () => {
  film.textContent = filmName;
  totalPrice();
});

//! ************************************************
// ********* SELECT A SEAT *************

const selectSeats = document.querySelectorAll(".seat");
const count = document.querySelector("#count");
const occupiedSeats = document.querySelectorAll(".seat.occupied");

const myArray = JSON.parse(localStorage.getItem("myArray")) || [];
count.textContent = JSON.parse(localStorage.getItem("count.textContent")) || 0;
total.textContent = JSON.parse(localStorage.getItem("total.textContent")) || 0;

for (i in myArray) {
  selectSeats[myArray[i]].style.backgroundColor = "#6feaf6";
}

for (let i in selectSeats) {
  selectSeats[i].onclick = () => {
    if (i == 11 || i == 12 || i == 22 || i == 23 || i == 35 || i == 36) return;
    selectSeats[i].style.backgroundColor = "#6feaf6";

    if (!myArray.includes(i)) {
      count.textContent++;
      // console.log(count.textContent);
      myArray.push(i);
      // console.log(i);
      totalPrice();
      // getFilmName(film);
      filmName = movie.options[movie.selectedIndex].text;
      film.textContent = filmName;

      // console.log(total.textContent);
      localStorage.setItem("myArray", JSON.stringify(myArray));
      localStorage.setItem(
        "count.textContent",
        JSON.stringify(count.textContent)
      );
      localStorage.setItem(
        "total.textContent",
        JSON.stringify(total.textContent)
      );
      localStorage.setItem(
        "film.textContent",
        JSON.stringify(film.textContent)
      );
    }
  };
}
