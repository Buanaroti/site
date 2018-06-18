$(function() {
    $('.form__submit').click(function(event) {
        // С помощью jquery находим узел .form__submit и на него вешаем событие
        event.preventDefault();
        // Отменяет действие по умолчанию при клике
        var form = $(this).parents('form')[0];
        // В переменную form присваиваем массив из родителей относительно элемента на который мы кликнули (выбираем первый элемент массива, т.е нашу форму)
        var input = $(form).find('.form__required');
        // В переменную input присваиваем все узлы с классом .form__required, которые уже в переменной form
        input.each(function(i, el) {
            // Запускаем цикл each где i - порядковый номер, el - элемент
            if (!$(el).val().trim()) {
                // Если в элементе (input строке) нет значения
                $(el).parent().find('.form__error').css("visibility", "visible");
                // Тогда показываем скрытое поле .form__error - поле с ошибкой
            } else {
                $(el).parent().find('.form__error').css("visibility", "hidden");
                // Иначе скрываем поле с ошибкой
            }
        
        })
        
    })
    
})