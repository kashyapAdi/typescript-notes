abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
      
}
//  abstract class we can inhert it from the inheritance class
// here we make a class from abstract class if we 
// want to access takephoto without inheritance it will show error
class Instagram extends TakePhoto{

}
