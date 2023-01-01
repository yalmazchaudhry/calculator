let result = document.getElementById('inputData');

let calculate=(number)=>{
    result.value=result.value+number;
}

let Result=()=>{

    try{
        result.value=eval(result.value)
    }catch(err){
        result.value= "Invalid";

    }
}

function clr1(){
result.value="";
}
// array method//
let array = [];
calculate=(number)=>{
    array.push(number);
}