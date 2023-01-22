const fnAsync =  ()=>{
    return new Promise((resolve, reject) => {
        true? setTimeout(()=> resolve('Async'),200)
        : reject(new Error('error'));
    })
}

const anotherFn = async ()=>{
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!!');
}

console.log('before');
anotherFn();
console.log('after');