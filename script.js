var v1 = document.querySelector("h5");

var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    v1.innerHTML = "Friends";
    v1.style.color = "Green";
    btn.innerHTML="Remove Friend"
    check =1
  }else{
    v1.innerHTML = "Stranger";
    v1.style.color = "Brown";
    btn.innerHTML='Add Friend'
    check =0
  }
});
