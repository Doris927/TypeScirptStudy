// 函数声明
// function add(x:number, y:number, z:number = 10):number {
//     return x + y;
// }

// 函数表达式
// 类型推断
const add = function(x:number, y:number, z:number = 10):number {
    return x + y;
};

const add2: (x:number, y:number, z?:number) => number = add;
let result:number = add2(2, 3);

// 类型推论
// let str = 'tammy';
// str = 123 // 会报错
