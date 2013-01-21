function numberToCurrency(number, options) {
    // set defaults...
    if (typeof options == 'undefined') { options = {}; }
    var precision = options.precision || 2
    var unit      = options.unit      || '$'
    var separator = options.separator || '.'
    var delimiter = options.delimiter || ','
    var format    = options.format    || '%u%n'
    var negativeFormat = options.negativeFormat || '-%u%n'

    // "clean up" number
    if (typeof number == 'string') { number = number.replace(/\$/g, ''); } // strip dollar sign
    number = isNaN(number) || number == '' || number == null ? 0.0 : number; // set to 0.0 if we can't tell what it is

    // determine which format to use
    if (number < 0) { 
        format = negativeFormat;
        number = Math.abs(number); // "remove" the negative sign
    }

    // 'separate' the cents
    var numberStr = parseFloat(number).toFixed(precision).toString();
    var numberFormatted = new Array(numberStr.slice(-1*precision));   // this returns the cents
    numberFormatted.unshift(separator); // add the separator
    numberStr = numberStr.substring(0, numberStr.length-(precision+1)); // this removes the decimal and cents

    // 'delimit' the thousands
    while (numberStr.length > 3) {
        numberFormatted.unshift(numberStr.slice(-3)); // this prepends the last three digits to `numberFormatted`
        numberFormatted.unshift(delimiter); // this prepends the delimiter to `numberFormatted`
        numberStr = numberStr.substring(0, numberStr.length-3);  // this removes the last three digits
    }
    numberFormatted.unshift(numberStr); // there are less than three digits in numberStr, so prepend them

    return format.replace(/%u/g,unit).replace(/%n/g,numberFormatted.join('')); // put it all together
}
