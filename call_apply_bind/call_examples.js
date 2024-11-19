
//example 1 :
const person = {
    name : "Pooja",
};
function greet(greetings, punctuations, fullstop){
    console.log(`${greetings}, ${this.name}${punctuations}${fullstop}`);
}
greet.call(person, "Hello", "!",".");

//example 2 :
const mobile = {
    brand : "Samsung",
    price : 40000,
    model : "galaxyS20",
    mobileDetails : function(owner){
        console.log(`${owner} has ${this.brand} ${this.model} of price ${this.price}`);
    },
};

mobile.mobileDetails.call(mobile, "Tom");

