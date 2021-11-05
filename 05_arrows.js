
function sleep(miliseconds){
    const date = Date.now();
    let current = null; 
    do {
        current = Date.now();

    } while(current - date < miliseconds)
}
function demo(message){
    console.log(message);
}

async function dowork(){
    let prom = new Promise( (resolve, reject) =>{
   
        setTimeout(()=>{
            resolve();
        }, 3000)    
        
       
       //sleep(3000);
       //resolve();    
    });
    await prom;   
    console.log("hello " +  Date.now()) ;
}

let f = (d) => console.log(d);
console.log(Date.now())

let prom = new Promise( (resolve, reject) =>{
   
    setTimeout(()=>{
        resolve();
    }, 3000)    
    
   
   //sleep(3000);
   //resolve();    
});

/*
prom.then( ()=>{
    f("hello world " + Date.now())
});
*/




async function main(){

    console.log('doing something else');

    await dowork()
    
    console.log(Date.now())

}

main();