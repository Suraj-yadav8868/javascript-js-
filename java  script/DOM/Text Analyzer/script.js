const addtext =document.getElementById("addtext");
const addtextbtn = document.getElementById("add-text-btn");
const preview = document.getElementById("preview");
const toupper = document.getElementById("to-upper");
const totalcount =document.getElementById("totalcount");

addtextbtn.addEventListener('click',()=>{
    preview.textContent=addtext.value
})

toupper.addEventListener('click',()=>{
    let newtext = addtext.value;
    preview.textContent =newtext.toUpperCase();
})

totalcount.addEventListener('click', () => {
  const newText = addtext.value;
  preview.textContent = newText;
  char.textContent = "Total Characters : " + newText.length;

  const textArray = newText.split(" ");
  words.textContent = "Total Words : " + textArray.length;
  time.textContent = "Time to read : " + textArray.length * 0.25 + "s";
});

const textArray = newText.trim().split(/\s+/); // split by any whitespace
const wordCount = textArray.filter(word => word !== "").length;

let seconds = wordCount * 0.25;
let mins = Math.floor(seconds / 60);
let sec = Math.floor(seconds % 60);
time.textContent = `Reading Time: ${mins}m ${sec}s`;

