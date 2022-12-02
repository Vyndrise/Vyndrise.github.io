document.addEventListener('click', event => {

    if (event.target.tagName == 'BUTTON' && event.target.parentElement.className == 'calc-holder') {
let cvalue = event.target.value;
console.log(cvalue);
if(cvalue>=0 && cvalue<=9){
    console.log("works");
}


    }});