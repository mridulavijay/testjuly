// console.log('Welcome to Javascript');
// var name='Mridula';//String Data type
// console.log(typeof(name));
// var bb1=false;//Boolean Data type
// var b;
// console.log(typeof(b));
// const a=234;//Number Data type
// console.log(typeof(a));
// var v=null;
// console.log(typeof(v));
// var arr1=['1','2',66];
// console.log(typeof(arr1));
// // {
// //     const a=80;
// //     console.log(a) ;                       //Block 1 
// // }
// //  const arr=[1,2,3,4];
// // {
// //      const a=79;                       //Block 2
// // }
// var x=10;//Assignment Operator
// var y=22;
// var result =x++;//Increment Operator
//  var rest2=++x;
// console.log(x++);
// var w=34+53*7-34;
// console.log(w);
// var firstName='Joel';
// var secondName='John';
// var result=10 + firstName;
// console.log(result);

// //Javascript Objects
// let car= new Object();
// car.model='Hyundai';
// car.color='Blue';
// console.log(car);
// var array1=['blue','red','orange'];
// array1.pop('blue')
// console.log(array1);
var arr1=[{name:'hello',age:10},{name:'leela',age:22}]
console.log(arr1[0].name)


function display(a) {
    console.log('Hi My name is '+a);
}
display('John');
let person={
    fname:'Jaya',
    lastName:'Sree',
    fullName:function() {
        return this.fname + this.lastName;
    }
}
console.log(person.fullName());
var a=10;
var b='10';
if (a==b ) {
    console.log('Value of a is 10');
}
else if(a>b){
    console.log('Value of a is greater');
}
else {
    console.log('Condition fails');
}
var result=a==b? console.log('Value of a is greater'):console.log('Condition fails');
console.log(result);
