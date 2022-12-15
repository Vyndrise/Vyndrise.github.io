const cc = document.querySelector('#card-container');

const btn = document.querySelector('#btn');

// let z = {
//     a: 1,
//     b:2,
// };
// let x = {
//     x: 1,
//     y:2,
// };
// tango = z;
// ba = x;
// let myLibrary = [];
// let ml = [tango, ba]

let i = 0;

function Book(title,author,pages) {
  this.title = title;
  this.author=author;
  this.pages=pages;
}
function addBookToLibrary() {

  }
  

btn.addEventListener('click',function(e){
    console.log("works");
 console.log(document.querySelector('#book_title').value);
 let addO = new Book(document.querySelector('#book_title').value,document.querySelector('#book_author').value,document.querySelector('#book_pages').value);
console.log(addO);
myLibrary.push(addO);
console.log(myLibrary);
render();
e.preventDefault;
    
    }
    );

    function render(){

     while( i< myLibrary.length){
let newCard = document.createElement('div');
let cardH1= document.createElement('h1');
 let cardH2 = document.createElement('h2');
let cardP= document.createElement('p');
 newCard.setAttribute('class','card');
 cardH1.innerHTML=myLibrary[i].title;
 cardH2.innerHTML=myLibrary[i].author;
 cardp.innerHTML=myLibrary[i].pages;
newCard.appendChild(cardH1);
newCard.appendChild(cardH2);
newCard.appendChild(cardP);
cc.append(newCard);
i++;
     }
    }

    render();