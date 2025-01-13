function addTwo(num:number):number{
    return num +2
    // return "hello"
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,isPaid:boolean){}
 
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}

let myValue =addTwo(5)
getUpper("hello")  // "HELLO"

signUpUser("John Doe","john.doe@example.com",true)  
loginUser("aditya","a@gmail.com",false)

// function getValue(myVal:number){
//     if(myVal>5){
//         return true
//     }
//     return "200 ok"
// }
  
const getHello= (s:string):string=>{
    return ""
}

const heros=["thor","avenger","ironman"]

heros.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.error(errmsg);
}

// use never instead of void 
function handleError(errmsg:string):never{
    throw new Error (errmsg);
}

export{}