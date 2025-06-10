const addtext =document.getElementById("addtext");
const addtextbtn = document.getElementById("add-text-btn");
const preview = document.getElementById("preview");
const toupper = document.getElementById("to-upper")

addtextbtn.addEventListener('click',()=>{
    preview.textContent=addtext.value
})

toupper.addEventListener('click',()=>{
    let newtext = addtext.value;
    preview.textContent =newtext.toUpperCase();
})



















// console.log(preview)