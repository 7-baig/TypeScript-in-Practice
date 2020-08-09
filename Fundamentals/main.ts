export {}
let message = 'Welcome back';
console.log(message)


// types
let isSenior: boolean = true;
let age: number = 19;
let name: string = 'Saad Baig';
// subtypes
let n: null = null;
let u: undefined = undefined;
// array types
let list1: number[] = [1, 2, 3];
let list2: string[] = ['orange', 'egg', 'bro'];
// any type
let randomType: any = 10;
randomType = true;
randomType = 'Saad';
// FUNCTIONS
let example = (num1: number, num2: number): number => {
    return num1 - num2;
}
example(2, 2)

// optional parameters in functions
let optional = (para1: string, para2?: number): any => {
    if (para2) {
        return `'${para1}' is a string and '${para2}' is a number`
    }
    else {
        return `'${para1}' is a string`
    }
}
optional('hello', 50);
optional('hello');

// INTERFACES
interface Data {
    address: string;
    country: string;
}

let registration = (data: Data) => {
    return `${data.address} ${data.country}`
}
let p = {
    address: 'lala',
    country: 'hala',
}
registration(p)
