 function detectType(val:number|string){
    if(typeof val==="string"){
       return val.toLowerCase()
    }
    return val+3
 }
    //  use typeof 

 function provideId(id:string){
    if(id!){
        console.log("provide id")
        return
    }
    id.toLowerCase()
 }

//  inn narrowingh
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}


