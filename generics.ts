const echo = <T>(arg: T): T =>  {
    return arg;
}

const strInput:string = 'str';
const strEcho = echo(strInput);

const swap = <T, U>(tuple:[T, U]):[U, T] => {
    return [tuple[1], tuple[0]];
}