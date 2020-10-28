/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ],
};
const wrapperAdv = document.querySelector(".promo__adv"),
    genreTitle = document.querySelector(".promo__genre"),
    backgroundTitle = document.querySelector(".promo__bg"),
    listMoviesTitle = document.querySelector(".promo__interactive-list"),
    addMovies = document.querySelector(".add"),
    addMoviesButton = addMovies.lastElementChild,
    inputMovies = addMovies.querySelector(".adding__input"),
    inputCheck = addMovies.querySelector("[type='checkbox']");

let advImages = wrapperAdv.querySelectorAll("img"),
    listMovies,
    listMoviesNew,
    moviesDBMassiveLength = movieDB.movies.length,
    deleteMovies,
    inputMoviesText,
    newArrayMovies;
    
// удаление рекламы справа
advImages.forEach((item) => {
    item.remove();
});
// Замена комедии на драма
genreTitle.innerHTML = "Драма";
// замена фонового изображения
backgroundTitle.style.backgroundImage = "url('img/bg.jpg')";
addMoviesFunction();
iterationMovies(movieDB.movies);
addMovies.addEventListener("submit", (event) => {
    event.preventDefault();
    inputMoviesText = inputMovies.value;
    if (inputMoviesText) {
     
    if (inputMoviesText.length >21) {
    inputMoviesText = `${inputMoviesText.slice(0,20)}...`;
    }
    movieDB.movies[moviesDBMassiveLength] = `${inputMoviesText[0].toUpperCase()}${inputMoviesText.slice(1).toLowerCase()}`;
    sort();
    addMoviesFunction();
    iterationMovies(movieDB.movies);    
    
    if (inputCheck.checked) {
        console.log("добавляем любимый фильм");
    }

    moviesDBMassiveLength++;
//    event.target.reset();
      inputMovies.value = "";
}
});

function addMoviesFunction() {
    listMovies = document.querySelectorAll(".promo__interactive-item");
    listMovies.forEach((item) => {
        item.remove();
    });
}

function sort() {
    movieDB.movies.sort();
}

function iterationMovies(arr) {
    arr.forEach((item, i) => {
        listMoviesTitle.insertAdjacentHTML(
            "beforeend",
            `<li class="promo__interactive-item">${
                i + 1
            } ${item}<div class="delete"></div></li>`
        );
    });

    deleteMovies = listMoviesTitle.querySelectorAll(".delete");
    deleteMovies.forEach((item, i) => {
        item.addEventListener("click", () => {
            item.parentElement.remove();
            arr.splice(i, 1);
            addMoviesFunction();
            iterationMovies(movieDB.movies);    
        });
    });
}





