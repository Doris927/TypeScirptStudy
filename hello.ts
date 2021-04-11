const hello = (name: string) => {
    return `hello ${name}`;
}

hello('tammy');
// hello(11); 编译时会生成错误
// npx tsx hellp.ts 可以生成js文件