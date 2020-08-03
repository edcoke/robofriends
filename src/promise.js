/*
function p15() {
    return new Promise((resolve, reject) => {() =>{
        setTimeout(() => {resolve( 'success')}, 4000)
    }}).then(resp => console.log(resp));
}

function pp2() {
    Promise.resolve(
        setTimeout(() => {
            console.log('success'), 4000
        })
    )
}*/

async function a() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json;
    await console.log(data.results)
}
