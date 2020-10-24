/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
    listMoviesTitle = document.querySelector(".promo__interactive-list");
  

let advImages  = wrapperAdv.querySelectorAll("img"),
    listMovies = document.querySelectorAll(".promo__interactive-item"),
    // listMoviesAdd = document.createElement("div"),
    listMoviesNew;


advImages.forEach((item) => {
    item.remove();
});

genreTitle.innerHTML = "Драма";

backgroundTitle.style.backgroundImage = "url('img/bg.jpg')";

listMovies.forEach (item => {
    item.remove();
});
movieDB.movies.sort();
// listMoviesAdd.classList.add("item-list");
movieDB.movies.forEach((item, i) => {
// listMoviesTitle.append(listMoviesAdd);
//     listMoviesAdd.innerHTML += `<li class="promo__interactive-item"> ${i+1} ${item} <div class="delete"></div></li>`;
listMoviesTitle.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item"> ${i+1} ${item} <div class="delete"></div></li>`);

});
