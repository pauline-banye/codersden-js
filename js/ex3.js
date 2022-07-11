// Exercise 3
// import from countries.js
import {countries} from "./countries.js";
import {webTechs, mernStack} from "./arrays.js";

// 1 - Copy countries array(Avoid mutation)
let countriesCopy = Array.from(countries);
console.log(countriesCopy);


/* 2 - Arrays are mutable. Create a copy of array which does not modify the original. 
Sort the copied array and store in a variable sortedCountries
*/
// sort countries array
let sortedCountries = Array.from(countriesCopy);
sortedCountries.sort();
console.log(sortedCountries);


// 3 - Sort the webTechs array and mernStack array
// sort mernstack array
let sortedMernStack = Array.from(mernStack);
sortedMernStack.sort();
console.log(sortedMernStack);

// sort webtechs array
let sortedWebTechs = Array.from(webTechs);
sortedWebTechs.sort();
console.log(sortedWebTechs);


/* 4 & 6 - Extract all the countries which contain the word 'land' from the countries array 
and print it as array
*/
let countryLand = []
for (let countryA of countriesCopy){
    // if country includes land
    if (countryA.includes("land")) {
        // push the countries to a new array
        countryLand.push(countryA);
    }
}
// print the output
console.log(countryLand);


// 5 - Find the country containing the highest number of characters in the countries array
// assign variable for the count and country with the longest word count
let count = 0;
let maxCount;
for (let maxCountry of countriesCopy){
    // if the length of the country is higher than 0
    if (maxCountry.length > count){
        count = maxCountry.length;
        // identify and print the country with longest length
        maxCount = maxCountry;
    }
}
// print the output
console.log(maxCount);


/* 7 - Extract all the countries containing only four characters from the countries array 
and print it as array
*/
let LenFourArr = [];
for (let lenFour of countriesCopy){
    // if country length is equal to 4
    if (lenFour.length == 4){
        console.log(lenFour);
        // push it to the array
        LenFourArr.push(lenFour)
    }
}
// print the output
console.log(LenFourArr);


/* 8 - Extract all the countries containing two or more words from the countries array 
and print it as array
*/
let multipleArr = [];
for (let word of countriesCopy){
    // if country length has a space
    if (word.includes(" ")){
        // push it to the array
        multipleArr.push(word);
    }
}
// print the output
console.log(multipleArr);


// 9 - Reverse the countries array and capitalize each country and store it as an array
let revCountry = [];
// initialize the array and reverse it
for (let index = countriesCopy.length - 1; index >= 0;  index--) {
    // change the countries to uppercase and push them the revCountry array
    revCountry.push(countriesCopy[index].toUpperCase());
}
// print output
console.log(revCountry);