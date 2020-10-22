"use strict";
// let check, nameFilm;

// for (let i = 0; i < 1; i++) {
//     const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//     if (numberOfFilms === null) {
//         i--;
//         alert("Поле обязательное к заполнению");
//     } else {
//         check = +numberOfFilms;
//         nameFilm = numberOfFilms.length;
//         if (nameFilm == 0 || nameFilm > 50 || isNaN(check)) {
//             i--;
//             alert("Не верно заполнено, введите заново");
//         } else {
//             const personalMovieDB = {
//                 count: numberOfFilms,
//                 movies: {},
//                 actors: {},
//                 genres: [],
//                 privat: false,
//             };
//             let lastFilmName;
//             for (let j = 0; j <= 1; j++) {
//                 let lastFilm = prompt("Один из последних просмотренных фильмов?","");
//                 if (lastFilm === null) {
//                     j--;
//                     alert("Поле обязательное к заполнению");
//                 } else {
//                     lastFilmName = lastFilm.length;
//                     if (lastFilmName == 0 || lastFilmName > 50) {
//                         j--;
//                         alert("Не верно заполнено, введите заново");
//                     } else {
//                         let rateLenght, secondCheck;

//                         for (let k = 0; k <= 1; k++) {
//                             let filmRate = prompt(
//                                 "На сколько оцените его?",
//                                 "например 9.5"
//                             );
//                             if (filmRate === null) {
//                                 k = 0;
//                                 alert("Поле обязательное к заполнению");
//                             } else {
//                                 rateLenght = filmRate.length;
//                                 secondCheck = +filmRate;
//                                 if (
//                                     rateLenght == 0 ||
//                                     rateLenght > 50 ||
//                                     isNaN(secondCheck)
//                                 ) {
//                                     k = 0;
//                                     alert("Не верно заполнено, введите заново");
//                                 } else {
//                                     personalMovieDB.movies[lastFilm] = filmRate;
//                                     k = 2;
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//             if (personalMovieDB.count < 10) {
//                 alert("Просмотрено довольно мало фильмов");
//             } else if (
//                 personalMovieDB.count > 10 &&
//                 personalMovieDB.count < 30
//             ) {
//                 alert("Вы классический зритель");
//             } else {
//                 alert("Вы киноман");
//             }
//             console.log(personalMovieDB);
//         }
//     }
// }

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt(
            "Сколько фильмов вы уже посмотрели?",
            ""
        );

        while (
            personalMovieDB.count == "" ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt(
                "Сколько фильмов вы уже посмотрели?",
                ""
            );
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько оцените его?", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        let numberOfGenres;
        // 1 метод!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // for (let i = 1; i <= 3; i++) {
        //     numberOfGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        //     if (numberOfGenres === null || numberOfGenres == "") {
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = numberOfGenres;
        //     }
        // }
        // personalMovieDB.genres.forEach((item, i) =>  {
        //   console.log (`Любимый жанр ${i+1} - это ${item}`);
        // });
        // 2 метод!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        for (let i = 1; i < 2; i++) {
            numberOfGenres = prompt(
                "Введите любимые жанры через запятую"
            ).toLowerCase();
            if (numberOfGenres === null || numberOfGenres == "") {
                i--;
            } else {
                personalMovieDB.genres = numberOfGenres.split(", ");
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
            console.log("первое условие должно быть true");
            console.log(personalMovieDB);
        } else {
            personalMovieDB.privat = true;
            console.log("второе условие должно быть false");
            console.log(personalMovieDB);
        }
    },
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);
