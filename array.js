let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,0]
let arr3=['a','b','c','d','e']

// 1. concat
const newarr=arr1.concat(arr2,arr3)
console.log(newarr);

// 2. every 
const check=arr1.every((ele)=>{
    return ele>3
})
console.log(check);

// 3. fill
const arr4=arr3.fill("hi")

// 4. find
const val1=arr1.find((ele)=>{
    return ele=1
})
console.log(val1);

// 5. findIndex
const val2=arr1.findIndex((ele)=>{
    return ele=1
})
console.log(val2);

// 6. flat
const arr6 = [[1,2],[3,4],[5,6]];
const arr7 = arr.flat();
console.log(arr7);

// 7. includes
const check2=arr1.includes(4)
console.log(check2);

// 8. indexOf
let val3=arr1.indexOf(3)
console.log(val3);

// 9. join
let arr8=arr1.join('*')
console.log(arr8);

// 10. lastIndexOf
let val4=arr1.lastIndexOf(4)
console.log(val4);

// 11. pop
let arr9=arr1.pop()
console.log(arr9);

// 12. push
let arr10=arr1.push('h')
console.log(arr10);

// 13. Reverse
let arr11=arr1.reverse()
console.log(arr11);

// 14. unshift
let arr12=arr1.unshift('hi')
console.log(arr12);

// 15. shift
let arr13=arr1.shift('hi')
console.log(arr13);

// 16. slice
let arr14=arr1.slice(0,2)
console.log(arr14);

// 17. Some
const check3=arr1.some((ele)=>{
    return ele>3
    })
    console.log(check3);

// 18. every
const check5=arr1.every((ele)=>{
    return ele>3
})
console.log(check5);

// 19. sort
let arr25=['orange','apple','kiwi']
let arr16=arr25.sort()
console.log(arr16);

// 20. splice
let arr17=arr1.splice(1,3)
console.log(arr17);

// 21. toString
let arr18=arr1.toString()
console.log(arr18);

// 22. Filter
let arr19=arr1.filter((ele,index)=>{
    return ele%2===0
    })
    console.log(arr19);

// 23. Reduce
let arr20=arr1.reduce((sum,ele)=>{
    return sum=sum+ele
    })
    console.log(arr20);

// 24. map
let arr21=arr1.map((mult)=>{
    return mult*2
    })
    console.log(arr21);


// 25. forEach
let arr15=['orange','apple','kiwi']
arr15.forEach(display)
function display(ele,index){
    console.log(ele,index);
}
