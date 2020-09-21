var submit= document.getElementById("s");

submit.addEventListener("click" , copy);

function copy(){
  let user=document.getElementById("t").value;

  document.getElementById('p').value=user;
  console.log(document.getElementById('p').value);
}
