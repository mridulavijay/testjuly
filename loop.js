//Print 1 to 10 numbers
for (let i= 0;i<=9; i++) {
   console.log(i+1);
    }
//Print array elements
var x=['Mango','Grape','Coconut'];
var obj={name:'Mridula',place:'TVM'}
for(let i=0; i<x.length;i++)  {
    console.log(x[i]);
}  
//For in loop
for(let i in obj){
    console.log(obj[i]);
}
var str='Mary'
//For of loop
for(let i of str){
    console.log(i);
}

//While loop
let i=1;
while (i<=10) {
    console.log(i);
    i++;
}
let b=0;
while(b<x.length){
    console.log(x[b]);
    b++;
}
//Do-while loop
let start=1;
do{
    console.log(start);
    start++;
}while(start<=10);