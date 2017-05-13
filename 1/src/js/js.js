/*              write code to creat an array of  5 cars
                    car has following propertiaes:
                        - firm name
                        - model name
                        - engine displacement
                    all parameters to prompt by user
                output all cars that has engine displacement > 2.0


                 написати код, щоб створити масив з 5 автомобілів
                     Автомобіль має наступні властивості:
                         - фірмове найменування
                         - назва моделі
                         - об'єм двигуна
                     всі параметри для запиту користувача
                 вивести всі автомобілі, має об'єм двигуна> 2,0
 */

var cars = [];
var cars2 = [];

for (var i=0; i < 5; i++) {
    var a = prompt("enter firm name");
    var b = prompt("enter model name");
    var c = prompt("enter engine displacement");

    cars [i] = {                                 // ствооюємо масив з обэктами
        firm_name: a,
        model_name: b,
        engine_displacement: c
    };

    if (c >= 2.0){                             // створюємо умову для відбору обектів із двигунами >2.0
        cars2.push(cars [i]);
    }
}

console.log (cars2);


