let tvalue = "";
let pvalue = "";
let operator = "";
let csvalue;
const result = document.querySelector("#calc-result");
const calcOper = document.querySelector("#calc-operator");
document.addEventListener('click', event => {

    if (event.target.tagName == 'BUTTON' && event.target.parentElement.className == 'calc-holder') {
let cvalue = event.target.value;
console.log(cvalue);
if(cvalue>=0 && cvalue<=9){
    tvalue = tvalue.concat(cvalue.toString());
    console.log(tvalue);
    result.innerHTML = tvalue;
}
else{


if(cvalue=="equ"){
  
    pvalue = calcOp(operator);
    result.innerHTML =pvalue;
    operator = "";
    tvalue="";

}
else if(cvalue=="clear"){
    operator = "";
    tvalue="";
    pvalue="";
    result.innerHTML ='--';
}
else{

    pvalue = calcOp(operator);
    result.innerHTML =pvalue;
    tvalue = "";
    operator = cvalue;

}

}

    }});

   function calcOp(operator){
    if(pvalue !=""){
        if(operator=='add'){
     
           return parseFloat(pvalue)+parseFloat(tvalue);
        }
        else if(operator=='sub'){
    
            return parseFloat(pvalue)-parseFloat(tvalue);
        }
        else if(operator=='mul'){
  

            return parseFloat(pvalue)*parseFloat(tvalue);
            
        }
        else if(operator=='div'){
  

            return parseFloat(pvalue)/parseFloat(tvalue);
        }
    }
    else{
        return parseFloat(tvalue);
    }

    }