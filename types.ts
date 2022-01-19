//Boolean (true/false)
let isOpen: boolean;
isOpen = true;

//String ('Foo', "Foo", `Foo`)
let message: string;
message = `Rafael nadal ${isOpen}`;

//Number (inteiro, flutuante, hexadecimal)
let total: number;
total = 3;

//array (Deve ser definido o tipo de valor dentro do array)
let items: number[]
items = [1,2,5.5]
let names: string[];
names = ['Cleber', 'Joao', 'Maria'];

//Tuple (Tupla)
let person: [number, string];
person = [1, 'João'];

//Enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// Any
let coisa: any;
coisa = [0];
coisa = ['AAAA'];

//Void
function logger(): void
{
    console.log('foo');
}

//Null | Undefined
type Bla = string | undefined; 

//Never
function error(): never 
{
    throw new Error("error");
}

//Object
let cart: object;
cart = {
    key: "Pao"
};