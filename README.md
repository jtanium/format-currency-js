format-currency-js
==================

A JavaScript function for formatting a number into a currency string that behaves like [Rails' number\_to_currency()](http://api.rubyonrails.org/classes/ActionView/Helpers/NumberHelper.html#method-i-number_to_currency) function.

The simplest example is:

    numberToCurrency(1234.5) //=> "$1,234.50"

Options
-----
Output can be customized using the optional `options` hash:

* `precision:` - Sets the level of precision (defaults to 2).
* `unit:` - Sets the denomination of the currency (defaults to "$").
* `separator:` - Sets the separator between the units (defaults to ".").
* `delimiter:` - Sets the thousands delimiter (defaults to ",").
* `format:` - Sets the format for non-negative numbers (defaults to "%u%n"). Fields are %u for the currency, and %n for the number.
* `negativeFormat:` - Sets the format for negative numbers (defaults to prepending an hyphen to the formatted number given by :format). Accepts the same fields than :format, except %n is here the absolute value of the number.

Examples
--------
    numberToCurrency(1234567890.506); 
        //=> "$1,234,567,890.51"
    numberToCurrency(-1234567890.506, {precision: 3});
        //=> "-$1,234,567,890.506"
    numberToCurrency(-1234567890.506, {negativeFormat: "(%u%n)"});
        //=> "($1,234,567,890.51)"
    numberToCurrency(-1234567890.506, {negativeFormat: "<span class=\"negative\">(%u%n)</span>"});
        //=> "<span class="negative">($1,234,567,890.51)</span>"
    numberToCurrency(-1234567890.506, {separator: ",", delimiter: "_"});
        //=> "-$1_234_567_890,51"
    numberToCurrency(-1234567890.506, {format: "%n%u", negativeFormat: "-%n%u"});
        //=> "-1,234,567,890.51$"
    numberToCurrency(1234567890.506, {format: "%n%u", negativeFormat: "-%n%u"});
        //=>"1,234,567,890.51$"

Installation
---------
`numberToCurrency()` is a single function so you can easily paste it into your code where it can be minimized with the rest of your asset pipeline (if applicable).

If you want to include the `format-currency.js` file in your application, do the usual:

    <script src="path/to/format-currency.js" type="text/javascript" />

License
-------
format-currency.js is a derivative work based on Ruby on Rails, it is released under the [MIT License](http://opensource.org/licenses/MIT).
