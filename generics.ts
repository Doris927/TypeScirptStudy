const echo = <T>(arg: T): T =>  {
    return arg;
}

const strInput:string = 'str';
const strEcho = echo(strInput);

const swap = <T, U>(tuple:[T, U]):[U, T] => {
    return [tuple[1], tuple[0]];
}

const echoWithArr = <T>(arg: T[]): T[] => {
    console.log(arg.length);
    return arg;
}
const arrs = echoWithArr([2,2]);

interface IWithLength {
    length: number;
}

// 约束范式
const echoWithLength = <T extends IWithLength>(arg: T):T => {
    console.log(arg.length);
    return arg;
}

const str = echoWithLength('str');

class Queue<T> {
    private data = [];
    push = (item: T) => {
        return this.data.push(item);
    }
    pop = ():T => {
        return this.data.shift();
    }
}

const queue = new Queue<number>();
queue.push(1);

const queue2 = new Queue<string>();
queue2.push('str');

interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kp1: KeyPair<number, string> = { key: 123, value: 'test' };


interface IPlus<T> {
    (a: T, b: T) : T;
}

function plus(a:number, b:number): number {
    return a + b;
}
function connect(a:string, b:string): string {
    return a + b;
}

const a: IPlus<number> = plus;
const b: IPlus<string> = connect;