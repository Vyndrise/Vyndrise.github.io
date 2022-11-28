const etch = document.querySelector("#etch");
// let gridslider = parseInt(document.querySelector("#gridslider").value); 
const etchbutton = document.querySelector("#etchbutton");
// algorithm to make rows
let currentopt=0;
etchbutton.addEventListener('click',event=>{
    etch.innerHTML = '';

   let gridslider = parseInt(document.querySelector("#gridslider").value); 
   let gridsize = 600/gridslider;
   let gridvalue= 0;

   for(let i=0;i<gridslider;i++){
   let gridrow = document.createElement("div");
    gridrow.setAttribute('class','gridrow');
    for(let j=0;j<gridslider;j++){
        let grid = document.createElement("div");
        grid.setAttribute('style',`height:${gridsize}px; width:${gridsize}px;`);
        grid.setAttribute('class','gridblock');
        grid.setAttribute('data-vx',`"${gridvalue}"`);//check string or int;
        gridvalue=gridvalue+1;
        gridrow.appendChild(grid);
    }
    etch.appendChild(gridrow);
   }
   event.preventDefault;});

// algo to make colors
const colorlist = ['Red','yellow','blue','green','cyan','indigo','orange','purple','magenta'];
document.addEventListener('click', event => {

    if (event.target.tagName == 'DIV' && event.target.parentElement.className == 'gridrow') { 

        if(currentopt==0){
            event.target.style.background = "Black";
            // event.target.style.opacity = "1";
        }
        else if(currentopt==1){
            console.log(event.target.style.opacity)
            if(parseFloat(event.target.style.opacity)>0 && parseFloat(event.target.style.opacity)<=1){
                   let newvalue = parseFloat(event.target.style.opacity)-0.2;
                   event.target.style.opacity= `${newvalue}`;
                // grid.setAttribute('style',`height:${gridsize}px; width:${gridsize}px;`);
                }
            else if(parseFloat(event.target.style.opacity)==0){

            }
            else{
                event.target.style.opacity = "1";
                console.log("kek");
            }

        }
        else if(currentopt==2){

            event.target.style.background = `${colorlist[Math.floor(Math.random()*colorlist.length-1)]}`;
            event.target.style.opacity = "1";
        }
        else if(currentopt==3){
            event.target.style.background = "White";
            event.target.style.opacity = "1";
        }
    }})

    //options
    document.addEventListener('click', event => {

        if ( event.target.className == 'opts') { 
           currentopt = parseInt(event.target.value); 

        }})