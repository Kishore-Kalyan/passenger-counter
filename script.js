let counter = document.getElementById("counter-element");
let increment = document.getElementById("increment-button");
let saver = document.getElementById("save-button");
let previous_entries = document.getElementById("previous-entry");
let count = 0;
console.log(counter.innerText);

function incrementer() {
  count += 1;
  counter.textContent = count;
}

let save_count = 0;

function save() {
    saver.addEventListener('click',(e) => {
        save_count += 1;
    })
    if(save_count > 4) {
        alert("Maximum Number of entries exceeded");
        return;
    }
    let count_string = " " + count + " - ";
    previous_entries.textContent += count_string;
    counter.textContent = 0;
    count = 0;
}
