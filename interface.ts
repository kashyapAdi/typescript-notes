// intrface is loose of tye form of the class

interface User {
    readonly dbId:number,
    email:string,
    userId:number,
    googleId:string,
    startTrail():string
    getCoupon(couponname:string):number
    
}
const avinash:User={email:"a@gmail.com",userId:2222,
    startTrail:()=>{
        return "trailstarted"
    }

}
