const items = [5, 6, 7, 6, 5, 7, 7, 8];

const frecuencias = items.reduce((objeto, elemento) => {
    if (!objeto[elemento]){
        objeto[elemento] = 1
    }else{
        objeto[elemento] = objeto[elemento] + 1
    }
    
    return objeto
}, {})

console.log(frecuencias)

const levels = [
    {
        name:'Daniel',
        level:'low'
    },
    {
        name:'Dinessa',
        level:'medium'
    },
    {
        name:'Daniela',
        level:'hight'
    },
    {
        name:'Deliana',
        level:'low'
    },
    {
        name:'Daniel Gregorio',
        level:'hight'
    },
    {
        name:'Maryaangel',
        level:'hight'
    },
    {
        name:'Nubia',
        level:'medium'
    },
]

const rs = levels
.filter((element)=> element.level)
.reduce((obj,items)=>{
    if(!obj[items.level]){
        obj[items.level] = 1
    }else{
        obj[items.level] = obj[items.level] + 1
    }
    return obj
},{})
console.log(rs)