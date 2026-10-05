
// Question-1 Write a simple JavaScript program to print expected Output using following array.

let myColor:string[] = ["Red ","Green ","White ","Black "];
document.getElementById('q-1')!.innerHTML = `myColor = [ ${myColor} ]`;
document.getElementById('color-output-1')!.innerHTML = `Output-1 = [ ${myColor.join('-')} ]`;
document.getElementById('color-output-2')!.innerHTML = `Output-2 = [ ${myColor.join('+')} ]`;
myColor.pop();
document.getElementById('color-output-3')!.innerHTML = `Output-3 = [ ${myColor}]`;
myColor.push('Black');
document.getElementById('color-output-4')!.innerHTML = `Output-4 = [ ${myColor[0]}]`;
document.getElementById('color-output-5')!.innerHTML = `Output-5 = [ ${myColor[1]} , ${myColor[2]}]`;
myColor.push("Orange");
document.getElementById('color-output-6')!.innerHTML = `Output-6 = [ ${myColor}]`;

// Question-2 Write a JavaScript program to get sum of all array element using for loop and foreach loop.

let sumArr:number[] = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i];
}
document.getElementById('sumArr')!.innerHTML = `Array = [ ${sumArr}]`;
document.getElementById('for-output-1')!.innerHTML = `Sum of Array Element using For loop is => ${sum}`;
sumArr.forEach(i => { sum += i; });
document.getElementById('for-output-2')!.innerHTML = `Sum of Array Element using ForEach loop is => ${sum}`;

// Question-3 Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

let arr1:number[]=[23,32,12,67,20];
let max:number=arr1[0];
document.getElementById('max-arr')!.innerHTML=`Array = [ ${arr1} ]`
function maxFinder(arr1:number[]){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]>=max){
            max=arr1[i];
        }
    }
    document.getElementById('max')!.innerHTML=`Maximum number of array is => ${max}`;
}

maxFinder(arr1);

let min:number=arr1[0];

function minFinder(arr1:number[]){

    for(let i=0;i<arr1.length;i++){
        if(arr1[i]<=min){
            min=arr1[i];
        }
    }
    document.getElementById('min')!.innerHTML=`Maximum number of array is => ${min}`;
}

minFinder(arr1);

// Question-4 Write a JavaScript program for convert all array element in ASCII value.

let arr2:string[]=['a','b','c','d'];
let str_ascii:string='';

document.getElementById('ascii-arr')!.innerHTML=`Array = [ ${arr2} ]`

for(let i=0;i<arr2.length;i++){
    let ascii : number= arr2[i].charCodeAt(0);
    str_ascii += arr2[i] + "=>" + ascii + "<br/>"
}
document.getElementById('ascii-output')!.innerHTML=`${str_ascii}`;


// Question-5 Write a JavaScript program for remove negative values using the filter array function.

// let arr3:number[]=

