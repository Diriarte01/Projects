//Promesas en JS


const anothherFuncion = ()=>{
    return new Promise((resolv, reject)=>{
        if(false){
            resolv('Hey!!')
        }else{
            reject('whooops!')
        }
    })
}

anothherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err));