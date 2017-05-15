/*               Написати програму, яка в циклі питає в користувача назву властивості і
                її значення і заповнити цим об'єкт. Псля кожної пари ключ-значення
                запитатись в користувача чи він хоче ще щось добавити (confirm).
                Після цього запустити цикл, в якому виведете всі властивості цього
                обєкта в такому форматі - propName=propValue в консоль
 */

var object = {};

do {
    var propName = prompt("enter key");
    var propValue = prompt("enter property");

    object [propName] = propValue;

    var m = confirm ("you continue?");

} while (m);


for (var k in object) {
    console.log(k + "=" + object [k]);
}