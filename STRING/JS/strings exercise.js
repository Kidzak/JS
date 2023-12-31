"use strict";

// exercise 1

function ucFirst(str) {
    if (!str) {
    return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    let inputStrong = 'hello world';
    let result = ucFirst(inputStrong);
    console.log('Original string:', inputStrong);
    console.log('String with the first character capitalized:', result);
    // exercise 2
    function checkSpam(str) {
    let lowerCaseStr = str.toLowerCase();
    
    return lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx');
    }
    
    let inputString1 = 'Buy Viagra now';
    let inputString2 = 'Check out our new products';
    console.log(checkSpam(inputString1));
    console.log(checkSpam(inputString2));
    //exercise 3
    function truncate(str, maxlength) {
    if (str.length <= maxlength) {
    return str;
    } else {
    return str.slice(0, maxlength - 3) + '...';
    }
    }
    
    let inputString = 'This is a long string that needs to be truncated';
    let maxLength = 20;
    let truncatedString = truncate(inputString, maxLength);
    
    console.log('Original string:', inputString);
    console.log('Truncated string:', truncatedString);
    //exercise 4
    function extractCurrencyValue(str) {
    return parseInt(str.substring(1), 10);
    }
    
    let costString = "$120";
    let extractedValue = extractCurrencyValue(costString);
    console.log('Extracted numeric value:', extractedValue);