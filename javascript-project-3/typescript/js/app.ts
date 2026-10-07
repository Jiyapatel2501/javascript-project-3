
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
sum=0;
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

let arr3:number[]=[-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
document.getElementById('negetive-arr')!.innerHTML=`Array = [ ${arr3} ]`;
document.getElementById('negetive-output')!.innerHTML=`Negetive numbers are => ${arr3.filter(num => num<0)}`;

// Question-6 Write a JavaScript program using array map() method and return the square of array element.

let mapArr:number[]=[2, 5, 6, 3, 8, 9];
document.getElementById('map-arr')!.innerHTML=`Array = [ ${mapArr} ]`;
document.getElementById('map-sqr')!.innerHTML=`Square of array element are => ${mapArr.map(num => num*num)}`;

// Question-7 Write a JavaScript program for sort array in ascending descending.

let sortArr:number[]= [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
document.getElementById('sort-arr')!.innerHTML=`Array = [ ${sortArr} ]`;
let temp:number=0;

for(let i=0;i<sortArr.length;i++){
    for(let j=0;j<sortArr.length-1;j++){
        if(sortArr[i]<=sortArr[j]){
            temp=sortArr[i];
            sortArr[i]=sortArr[j];
            sortArr[j]=temp;
        }
    }
}

document.getElementById('sort-ascending')!.innerHTML=`Sorted array  ascending oreder is => ${sortArr}`;

for(let i=0;i<sortArr.length;i++){
    for(let j=0;j<sortArr.length-1;j++){
        if(sortArr[i]>=sortArr[j]){
            temp=sortArr[i];
            sortArr[i]=sortArr[j];
            sortArr[j]=temp;
        }
    }
}

document.getElementById('sort-descending')!.innerHTML=`Sorted array descending oreder is => ${sortArr}`;

// Question-8 Write a JavaScript program which filters out any string which is less than 8 characters. 

let less_8_Arr:string[]=['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.getElementById('less-8-arr')!.innerHTML=`Array = [ ${less_8_Arr} ]`;
document.getElementById('less-8-output')!.innerHTML=`element which has less than 8 character => ${less_8_Arr.filter(element=>element.length<8)}`

// Question-10  write a JavaScript program for array reverse.

let revArr:number[]=[10,20,30,40,50];
document.getElementById('reverse-arr')!.innerHTML=`Array = [ ${revArr} ]`;
let revStr:string='';

for(let i=revArr.length-1;i>=0;i--){
    revStr += revArr[i] + ","
}

document.getElementById('reverse-output')!.innerHTML=`Reverse String is => [ ${revStr} ]`;

// Question-11  write a JavaScript program for check value is found or not?

let foundArr:number[]=[12,54,33,87,15];
document.getElementById('found-arr')!.innerHTML=`Array = [ ${foundArr} ]`;
let foundNum:number=100;
document.getElementById('found-num')!.innerHTML=`Number to be found => ${foundNum}`
if(foundArr.includes(foundNum)==true){
    document.getElementById('found-output')!.innerHTML=`Element is available in Array`;
}else{
    document.getElementById('found-output')!.innerHTML=`Element is not available in Array`;
}

// Question-12  write a JavaScript program for print your name and write the no of total character.

let nameArr:string="FullStack Development";
document.getElementById('name')!.innerHTML=`Name is => ${nameArr}`;
document.getElementById('name-count')!.innerHTML=`Total character in ${nameArr} is => ${nameArr.length}`;

// Question-13  write a JavaScript program given this output using replace concept.

let replaceContent:string= "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
document.getElementById('replace-content')!.innerHTML=`Input => ${replaceContent}`
document.getElementById('replace-output')!.innerHTML=`Output => ${replaceContent.replaceAll('dog','cat')}`;

// Question-14 write a JavaScript program convert string to array.

let strInput:string= "Hire the top 1% freelance developers";
document.getElementById('string')!.innerHTML=`Input => " ${strInput} "`;
document.getElementById('arr-str')!.innerHTML=`Output => [ ${strInput.split(" ")} ]`;

// Question-15  write a JavaScript program convert for array to string.

let arrInput:any[]= ['5', 32, 'Daniel'];
document.getElementById('arr')!.innerHTML=`Input => [ ${arrInput} ]`;
document.getElementById('str-arr')!.innerHTML=`Input => ${arrInput.toString()}`;











