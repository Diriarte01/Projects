const btn = document.querySelector('#btn');

btn.addEventListener('click', async function (){
    const module = await import('./module.js');
    console.log(module);
    module.hello();
})