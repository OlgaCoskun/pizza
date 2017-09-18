//app.js выполняется на стороне клиента

    function something()
    {
        var x = window.localStorage.getItem('bbb');
//умножаем на 1, чтобы string преобразовать в int
        x = x*1 + 1;

        window.localStorage.setItem('bbb', x)


        alert(x);

    }
