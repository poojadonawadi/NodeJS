//example 1:
function outerfunction() {
    const outerVariable = "Hello"
    function innerfunction(){
        console.log(outerVariable); 
    }
    innerfunction();
}
outerfunction();