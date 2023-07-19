console.log("Implicit TypeConversion");
console.log("a) Implicit Conversion to String:");
//When a number is added to a string, JavaScript converts the number to a string before concatenation.
var a;
a="5"+3;
console.log(a);

a="4"+true;
console.log(a);

a="6"+undefined;
console.log(a);

console.log("b)Implicit Conversion to Number: ");
//numeric string used with - , / , * results number type.
var b;
b="5"-"3";
console.log(b);

b="5"-2;
console.log(b);

b="5"*2;
console.log(b);

b="4"/2;
console.log(b);

console.log("c)Non-numeric String Results to NaN: ");
//Non-numeric string used with - , / , * results to NaN.
var c;
c="cloud"-"eq"
console.log(c);

c="5"-"true"
console.log(c);

c="true"-"undefined"
console.log(c);

console.log("d)Implicit Boolean Conversion to Number: ");
//if boolean is used, true is 1, false is 0 .
//JavaScript considers 0 as false and all non-zero number as true. And, if true is converted to a number, the result is always 1.
var d;
d='2'-true;
console.log(d);

d='2'-false;
console.log(d);

d=2-true;
console.log(d);

d=4-false;
console.log(d);

d=2+true;
console.log(d);

console.log("e)null Conversion to Number: ");
//null is 0 when used with number.
var e;
e=2+null;
console.log(e);

e=2-null;
console.log(e);

e=null/2;
console.log(e);

e=2*null;
console.log(e);

console.log("f)undefined used with number, boolean or null: ");
//Arithmetic operation of undefined with number, boolean or null gives NaN.
var f;
f=2+undefined;
console.log(f);

f=2-undefined;
console.log(f);

f=true+undefined;
console.log(f);

f=NaN+undefined;
console.log(f);

console.log("Explicit TypeConversion");
console.log("a)Convert to Number Explicitly :");
//The Number() method converts a value to a number.
// string to number
a=Number("12");
console.log(a);

a=Number("hi");
console.log(a);

a=Number(" ");
console.log(a);

//boolean to number
a=Number(true);
console.log(a);

a=Number(false);
console.log(a);

//null to string
a=Number(null);
console.log(a);

a=parseInt("12.12");
console.log(a);

a=parseFloat("12.01");
console.log(a);

console.log("b)Convert to String Explicitly: ")
//To convert other data types to strings, you can use either String() or toString().
//String() takes null and undefined and converts them to string. However, toString() gives error when null are passed.

b=String(12);
console.log(b);

b=String(null);
console.log(b);

b=String(true);
console.log(b);

b=String(NaN);
console.log(b);

b=String(undefined);
console.log(b);

b=true.toString();
console.log(b);

b=(23).toString();
console.log(b);

console.log("c)Convert to Boolean Explicitly: ");
//To convert other data types to a boolean, we can use Boolean().
//n JavaScript, undefined, null, 0, NaN, '' converts to false and other values gives true.

c=Boolean("");
console.log(c);

c=Boolean(" ");
console.log(c);

c=Boolean("hi");
console.log(c);

c=Boolean(12);
console.log(c);

c=Boolean(0);
console.log(c);

c=Boolean(null);
console.log(c);

c=Boolean(NaN);
console.log(c);

c=Boolean(undefined);
console.log(c);