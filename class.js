class Mobile{
constractor(colour,brand,type){
    this.colour=colour;
    this.brand=brand;
    this.type=type;
}
getcolour(){
    return `this colour of the mobile ${this.colour}`
}
}
let samsung=new Mobile("red" ,"samsung","android");
console.log(samsung.getcolour());