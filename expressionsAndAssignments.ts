var num1: number = 10;
var num2: number = 2;
var res: number = 0;

console.log("num1 = " + num1 + ", num2 = " + num2 );

res = num1 + num2;
console.log("addition:           num1 + num2 = "+res);

res = num1 - num2;
console.log("Subtraction:        num1 - num2 = "+res)

res = num1*num2
console.log("multiplication:     num1 * num2 = "+res)

res = num1/num2
console.log("Division:           num1 / num2 = "+res)
   
res = num1%num2
console.log("Modulus:            num1 % num2 = "+res)

num1++
console.log("Increment:          num1++      = "+num1)

num2--
console.log("Decrement:          num2--      = "+num2)

console.log("Comparison(relational) operator");


var a = false;
var b = true;
console.log(a + " && " + b + ', ' + (a && b));
console.log(b + " && " + true + ',  ' + (b && true));
console.log(b + " && " + 10 + ',    ' + (b && 10));
console.log(a + " && " + "'10'" + ', ' + (a && '10'));

console.log(a + " || " + b + ', ' + (a || b));
console.log(b + " || " + true + ', ' + (b || true));
console.log(b + " || " + 10 + ',   ' + (b || 10));
console.log(a + " || " + "'10'" + ', ' + (a || '10'));

console.log("!true, " + !b);
console.log("!true, " + !a);
console.log("!null, " + !null);

var j:any;
var n:any = "a b c";
for ( j in n ){
    console.log(n[j]);
}

let list = [4, 5, 6];
list.forEach((val, idx, array) => {
   console.log('val is ' + val);
   console.log('idx is ' + idx);
   console.log('array is ' + array); 
});

let list2 = [7, 8, 9];
list.every((val, idx, array)=>{
    return (val > 7);
})
