let count = 0;

console.log(saveEl);
function counter(){
    let countEl = document.getElementById("count-el");
    count++;
    countEl.innerText = count;
}

function save(){
    let countEl = document.getElementById("count-el");
    let saveEl = document.getElementById("save-el");
    let addEntry = count + " - ";
    saveEl.textContent+= addEntry;
    count = 0
    countEl.innerText = count;
}