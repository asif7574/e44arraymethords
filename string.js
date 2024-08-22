str1=' hi kuttapi'
str2='helo'


// 1. concat
const str3=str1.concat('meow')
console.log(str3);

// 2. includes
const val1=str1.includes('h')
console.log(val1);


// 3. indexOf
const val3=str1.indexOf('i')
console.log(val3);

// 4. lastIndexOf
const val2=str1.lastIndexOf('i')
console.log(val2);

// 5. padEnd
const str4=str1.padEnd(7,"0")
console.log(str4);

// 6. padEnd
const str5=str1.padStart(7,"0")
console.log(str5);

// 7. repeat
const str6=str1.repeat(3)
console.log(str6);

// 8. replace
const str7=str1.replace('hi','hellow')
console.log(str7);

// 9. search
const val5=str1.search('kuttapi')
console.log(val5);

// 10. slice
const str8=str1.slice(4,6)
console.log(str8);

// 11. split
const arr1=str1.split('')
console.log(arr1);

// 12. startsWith
const val6=str1.startsWith('h')
console.log(val6);

// 13. substr
const str9=str1.substr(4,3)
console.log(str9);

// 14. substring
const str10=str1.substring(4,7)
console.log(str10);

// 15. toLowerCase
const str11=str1.toLowerCase()
console.log(str11);

// 16. toUpperCase
const str12=str1.toUpperCase()
console.log(str12);

// 17. trim
const str13=str1.trim()
console.log(str13);

// 18. trimEnd
const str14=str1.trimEnd()
console.log(str14);

// 19. trimStart
const str15=str1.trimStart()
console.log(str15);

// 20. charAt
const val7=str1.charAt(4)
console.log(val7);

// 21. charCodeAt
const val8=str1.charCodeAt(4)
console.log(val8);
