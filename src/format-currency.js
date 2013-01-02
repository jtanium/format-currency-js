function numberToCurrency(number) {

    var currencySymbol     = '$';
    var thousandsSeparator = ',';

    number = stripDollarSign(number);
    number = isNaN(number) || number == '' || number == null ? 0.00 : number;
    var numberStr = parseFloat(number).toFixed(2).toString();
    var numberFormatted = new Array(numberStr.slice(-3));   // this returns the decimal and cents
    numberStr = numberStr.substring(0, numberStr.length-3); // this removes the decimal and cents
    /*
     * Why is there an `unshift()` function, but no `shift()`?
     * Also, a `pop()` function would be handy here.
     */
    while (numberStr.length > 3) {
        numberFormatted.unshift(numberStr.slice(-3)); // this prepends the last three digits to `numberFormatted`
        numberFormatted.unshift(thousandsSeparator); // this prepends the thousandsSeparator to `numberFormatted`
        numberStr = numberStr.substring(0, numberStr.length-3);  // this removes the last three digits
    }
    numberFormatted.unshift(numberStr); // there are less than three digits in numberStr, so prepend them
    numberFormatted.unshift(currencySymbol); // prepend the currencySymbol

    return numberFormatted.join(''); // put it all together
}

function stripDollarSign(s) {
    if (typeof s == 'string') { s = s.replace(/\$/g, ''); }
    return s;
}