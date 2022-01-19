"use strict";
//Boolean (true/false)
let isOpen;
isOpen = true;
//String ('Foo', "Foo", `Foo`)
let message;
message = `Rafael nadal ${isOpen}`;
//Number (inteiro, flutuante, hexadecimal)
let total;
total = 3;
//array (Deve ser definido o tipo de valor dentro do array)
let items;
items = [1, 2, 5.5];
let names;
names = ['Cleber', 'Joao', 'Maria'];
//Tuple (Tupla)
let person;
person = [1, 'João'];
//Enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// Any
let coisa;
coisa = [0];
coisa = ['AAAA'];
//Void
function logger() {
    console.log('foo');
}
//Never
function error() {
    throw new Error("error");
}
//Object
let cart;
cart = {
    key: "Pao"
};
