let minValue = -999;
let maxValue = 999;
let answerNumber = 0;
let orderNumber = 1;
let gameRun = true;

let orderNumberField;
let answerField;
let orderSelect;
let textSelect;
function answerFieldToText(numberToText) {
    let numberToTextVar = '';
    let numberToTextOld = numberToText;
    if (numberToText < 0) {
        numberToTextVar = '- ';
    }
    numberToTextMod = Math.abs(numberToText);
    if (numberToTextMod > 100) {
        switch (Math.trunc(numberToTextMod / 100)) {
            case 1: numberToTextVar += 'сто '; break;
            case 2: numberToTextVar += 'двести '; break;
            case 3: numberToTextVar += 'триста '; break;
            case 4: numberToTextVar += 'четыреста '; break;
            case 5: numberToTextVar += 'пятьсот '; break;
            case 6: numberToTextVar += 'шестьсот '; break;
            case 7: numberToTextVar += 'семьсот '; break;
            case 8: numberToTextVar += 'восемьсот '; break;
            case 9: numberToTextVar += 'девятьсот '; break;
        }
    }
    // console.log('numberToText = ', numberToText, ' numberToTextVar = ', numberToTextVar);
    // debugger;

    if (numberToTextMod / 10 >= 10) {
        switch (Math.trunc((numberToTextMod % 100) / 10)) {
            //            case 1: numberToTextVar += 'десять '; break;
            case 2: numberToTextVar += 'двадцать '; break;
            case 3: numberToTextVar += 'тридцать '; break;
            case 4: numberToTextVar += 'сорок '; break;
            case 5: numberToTextVar += 'пятьдесят '; break;
            case 6: numberToTextVar += 'шестьдесят '; break;
            case 7: numberToTextVar += 'семьдесят '; break;
            case 8: numberToTextVar += 'восемьдесят '; break;
            case 9: numberToTextVar += 'девяносто '; break;
        }
        if ((numberToTextMod % 10 < 10) && (Math.trunc((numberToTextMod % 100) / 10) > 1)) {
            switch (numberToTextMod % 10) {
                case 1: numberToTextVar += 'один'; break;
                case 2: numberToTextVar += 'два'; break;
                case 3: numberToTextVar += 'три'; break;
                case 4: numberToTextVar += 'четыре '; break;
                case 5: numberToTextVar += 'пять'; break;
                case 6: numberToTextVar += 'шесть'; break;
                case 7: numberToTextVar += 'семь'; break;
                case 8: numberToTextVar += 'восемь'; break;
                case 9: numberToTextVar += 'девять'; break;
            }
        }
    }
    //       console.log('numberToText = ', numberToText, ' numberToTextVar = ', numberToTextVar);
    //       debugger;

    if ((numberToTextMod % 100 > 0) && (numberToTextMod % 100 < 20)) {
        numberToTextMod = numberToTextMod % 100;
    }
    if (numberToTextMod < 20) {
        switch (numberToTextMod) {
            case 0: numberToTextVar += '0'; break;
            case 1: numberToTextVar += 'один'; break;
            case 2: numberToTextVar += 'два'; break;
            case 3: numberToTextVar += 'три'; break;
            case 4: numberToTextVar += 'четыре'; break;
            case 5: numberToTextVar += 'пять'; break;
            case 6: numberToTextVar += 'шесть'; break;
            case 7: numberToTextVar += 'семь'; break;
            case 8: numberToTextVar += 'восемь'; break;
            case 9: numberToTextVar += 'девять'; break;
            case 10: numberToTextVar += 'десять'; break;
            case 11: numberToTextVar += 'одиннадцать'; break;
            case 12: numberToTextVar += 'двеннадцать'; break;
            case 13: numberToTextVar += 'тринадцать'; break;
            case 14: numberToTextVar += 'четырнадцать'; break;
            case 15: numberToTextVar += 'пятнадцать'; break;
            case 16: numberToTextVar += 'шестнадцать'; break;
            case 17: numberToTextVar += 'семнадцать'; break;
            case 18: numberToTextVar += 'восемнадцать'; break;
            case 19: numberToTextVar += 'девятнадцать'; break;
            case 20: numberToTextVar += 'двадцать'; break;
        }
    }
    //        console.log('numberToText = ', numberToText, ' numberToTextVar = ', numberToTextVar);
    //        debugger;
    numberToTextMod = String(numberToTextVar);
    //поставим ограницение не 20, а 30, чтобы видеть больше результатов
    if (numberToTextVar.length < 30) {
        return numberToTextVar;
    }
    else {
        return numberToTextOld;
    }
}
document.getElementById('btnRetry').addEventListener('click', function () {

    orderNumberField = document.getElementById('orderNumberField');
    answerField = document.getElementById('answerField');
    answerField.innerText = 'Итак, задайте диапазон чисел?';
    btnRetry.innerText = 'начать заново!';
    document.getElementById("inputWindowMin").hidden = false;
    document.getElementById("inputWindowMax").hidden = false;
    document.getElementById("btnGame").hidden = false;
    document.getElementById("answerText").hidden = false;
    inputWindowMin.value = '';
    inputWindowMax.value = '';
    range.innerText = '';
    orderNumberField.innerText = ''; 

})
document.getElementById('btnGame').addEventListener('click', function () {

    minValue = parseInt(inputWindowMin.value);
    maxValue = parseInt(inputWindowMax.value);
    if (isNaN(minValue) || minValue < -999) { minValue = -999 };
    if (isNaN(maxValue) || maxValue > 999) { maxValue = 999 };
    range = document.getElementById('range');
    range.innerText = 'от ' + String(minValue) + ' до ' + String(maxValue);
    document.getElementById("inputWindowMin").hidden = true;
    document.getElementById("inputWindowMax").hidden = true;
    document.getElementById("btnGame").hidden = true;
    document.getElementById("answerText").hidden = true;
    document.getElementById("btnRetry").innerText = 'начать заново';
    answerField = document.getElementById('answerField');
    answerField.innerText = 'Теперь загадайте число';
    answerNumber = Math.floor((minValue + maxValue) / 2);
//    console.log(minValue, +' ', + maxValue, +' ', +answerNumber);
    orderNumber =  1 ;
    gameRun = true;
    orderNumberField = document.getElementById('orderNumberField');
    orderNumberField.innerText = 'Вопрос №1';
    answerField.innerText = `Вы загадали число\n ${answerFieldToText(answerNumber)}?`;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            console.log(minValue, +' ', + maxValue, +' ', +answerNumber);
            orderNumber++;
            orderNumberField.innerText = 'Вопрос № ' + orderNumber;
            orderSelect = Math.round(Math.random() * 2);
            switch (orderSelect) {
                case 0:
                    textSelect = 'Да это же число';
                    break;
                case 1:
                    textSelect = 'Скорей всего это число';
                    break;
                case 2:
                    textSelect = 'Ага, это число';
                    break;
            }
            answerField.innerText = `${textSelect} \n ${answerFieldToText(answerNumber)}?`;
        }
    }
})


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            console.log(minValue, +' ', + maxValue, +' ', + answerNumber);
            answerNumber = Math.floor((minValue + maxValue) / 2);
            console.log(minValue, +' ', + maxValue, +' ', + answerNumber);
            orderNumber++;
            orderNumberField.innerText = 'Вопрос № ' + orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
            orderSelect = Math.round(Math.random() * 2);
            switch (orderSelect) {
                case 0:
                    textSelect = 'Вы загадали число';
                    break;
                case 1:
                    textSelect = 'Это красивое число';
                    break;
                case 2:
                    textSelect = 'Ваше любимое число';
                    break;
            }
            answerField.innerText = `${textSelect} \n ${answerFieldToText(answerNumber)}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        orderSelect = Math.round(Math.random() * 2);
        switch (orderSelect) {
            case 0:
                textSelect = 'Я всегда угадываю\n\u{1F60E}';
                break;
            case 1:
                textSelect = 'Это было очень просто\n\u{1F602}';
                break;
            case 2:
                textSelect = 'ИИ не обманешь)\n\u{1F923}';
                break;
        }
        answerField.innerText = textSelect;
        btnRetry.innerText = 'Ещё попытка)'
        inputWindowMin.value = '';
        inputWindowMax.value = '';
        orderNumberField.innerText = 'Угадал с '+ orderNumber + ' попытки!)';
        gameRun = false;
    }
})

