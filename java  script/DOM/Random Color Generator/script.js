let  submit = document.getElementById("btn");

submit.addEventListener('click',()=>{
  let random=Math.random()*16475521;
  let num=Math.floor(random);
  let color=num.toString(16);
  
  document.body.style.backgroundColor="#"+color;
  submit.textContent=color; 
});