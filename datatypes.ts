/**Yuling write example here */
//number
let binaryLiteral: number = 0b1010; 
let octalLiteral: number = 0o744;    
let decLiteral: number = 6;    
let hexLiteral: number = 0xf00d;    

//string
let name0: string = "Runoob";
let years: number = 5;
let words: string = `this year is  ${ name0 } published ${ years + 1} anniversary`;

//boolean
let flag: boolean = true;

//any
var anyType;

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });

// Array
let arr1: number[] = [1, 2];

let arr2: Array<number> = [1, 2];

//tuple
let x: [string, number];
x = ['Runoob', 1];    // good
//x = [1, 'Runoob'];    // error
console.log(x[0]);    // out put 

//void
function hello(): void {
    alert("Hello Runoob");
}

//Union type
function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  //printId({ myID: 22342 });


//type aliaces
type Point = {
    x: number;
    y: number;
};
   
  // Exactly the same as the earlier example
function printCoord1(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
   
  printCoord1({ x: 100, y: 100 });


//interface
interface Point1 {
    x: number;
    y: number;
  }
   
  function printCoord2(pt: Point1) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord2({ x: 100, y: 100 });
