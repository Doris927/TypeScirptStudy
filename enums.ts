enum Direction {
    Up,
    Down,
    Left,
    Right
}

// 常量枚举可以提高性能
const enum DirectionString {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

console.log(Direction.Down);