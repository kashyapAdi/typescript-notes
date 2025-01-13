let score:number|string=33
score=44
score="55"

type Users={
    name :string;
    id:number

}
type Admin={
    username :string;
    id:number

}

let Aditya :Users|Admin={name:"hitesh",id:334}
Aditya={username:"ad",id:334}

function getDbId(id:number|string){

    // making some apis
    console.log(`DB id is:${id}`);
}
getDbId(3)
getDbId("3")

const data:number[]=[1,2,3]
const data1:string[]=["1","2"]
const data3:(string|number|boolean)[]=[1,"2",true]