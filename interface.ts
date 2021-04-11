interface IPerson {
    readonly id: number;
    name: string;
    age?: number; // 可选属性
}

let tammy: IPerson = {
    id: 123,
    name: 'tammy',
    // age: 18,
}

// tammy.id = 2  会报错