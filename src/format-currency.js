function numberToCurrency(number) {

    var currencySymbol     = '$';
    var thousandsSeparator = ',';
    var numberIsNegative   = false;

    number = stripDollarSign(number);
    number = isNaN(number) || number == '' || number == null ? 0.00 : number;

    if (number < 0) { 
        numberIsNegative = true;   // indicate we are working with a negative number
        number = Math.abs(number); // "remove" the negative sign so we can put it where we want
    }

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
    if (numberIsNegative) { numberFormatted.unshift("-"); } // prepend a "-" when the number is negative

    return numberFormatted.join(''); // put it all together
}

function stripDollarSign(s) {
    if (typeof s == 'string') { s = s.replace(/\$/g, ''); }
    return s;
}