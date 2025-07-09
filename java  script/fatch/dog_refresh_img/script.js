const img = document.getElementById("img");
const btn = document.getElementById("btn");
function showdog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=>response.json())
    .then((data)=>{
        img.src=data.message
    })
}

btn.addEventListener('click',()=>{
    showdog();
})
showdog()
