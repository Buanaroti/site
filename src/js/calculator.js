function calculator() {
    var n1; 
    var format;
    var papper;
    var color;
    var laminazia;
    var kruglenie;
    var big;
    var falz;

    n1 = document.getElementById('n1').value; // получаю число из input по id (Тираж)
    n1 = parseInt(n1); // если есть возможность преобразовать строку в число - выполняем 
    format = document.getElementById('format').value;// получаю число из select по id (Формат)
    papper = document.getElementById('papper').value;// получаю число из select по id (Бумага)
    color = document.getElementById('color').value;// получаю число из select по id (Цветность)
    laminazia = document.getElementById('laminazia').value;// получаю число из select по id (Ламинация)
    kruglenie = document.getElementById('Kruglenie').value * n1;// получаю число из select по id (Кругление углов)
    big = document.getElementById('big').value;// получаю число из select по id (Биговка)
    falz = document.getElementById('falz').value;// получаю число из select по id (Фальцовка)

    if (n1 > 0) {
        result = Math.round(n1 * format * papper * color * laminazia * big * falz + kruglenie);
    } else {
        result = 0;
    }

    document.getElementById('out').innerHTML = result; //получаю элемент span по id
    // использую свойство innerHTML что бы вставить переменную между тэгом 
}

//calculator menu





// jquery

// $(function() {
//     $('.calculator__submit').click(function(event) {
//         event.preventDefault();
//         var form = $(this).parents('form')[0];
//         console.log(form);
//     })
// })