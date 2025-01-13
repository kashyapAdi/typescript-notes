// const user ={
//     name:"aditya",
//     email:"adityaa2gmail.com",
//     isActive:true
// }

// function createUser({name:string,isPaid:boolean}){}

// let newUser=({name:"aditya",isPaid:false,email:"a@gmail.com"})
// createUser(newUser)

// function createCourse():{name:string,price:number}{
//     return {name:"javascript",price:100}
// }


// type User ={
//     name : string;
//     email: string;
//     isActive:boolean
// }
//  function createUser(user:User){
//     return {name :"", email:"",isActive:true}
//  }

//  createUser ({name :"", email:"",isActive:true})

// readonly cannnot we changed  once it is created
type User ={
    readonly _id:string;
    name : string;
    email: string;
    isActive:boolean;
    credcardDetails?:number
}

let myUser:User={
    _id:"123",
    name :"aditya",
    email:"aditya@gmail.com",
    isActive:true
}
// here we can change email because  it is not readonly
myUser.email="hitesh@gmail.com"
// myUser._id="1234" // readonly property cannot be changed
// myUser._id="aabb"





export{}