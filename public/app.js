//app.js выполняется на стороне клиента

    function something()
    {
        var x = window.localStorage.getItem('bbb'); // x = hh['bbb']
//умножаем на 1, чтобы string преобразовать в int
        x = x*1 + 1; //x = x + 1

        window.localStorage.setItem('bbb', x); // hh['bbb'] = x


        alert(x);

    }
