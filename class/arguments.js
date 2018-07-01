function summ() {

    let result = 0;

    ([].forEach).call(arguments, function (item) {
        // console.log(item);
        result += item;
    } );


    console.log(result);

    return result;
}

summ(1,2,3,4,5,6,7,8,9,10);
summ(1,2);

