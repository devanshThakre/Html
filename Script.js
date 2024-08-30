let msgBox = document.getElementById("msg-box");
let btn = document.querySelector("#kkk");
var hulk = true ;
btn.addEventListener("click", () => { 
  if (hulk){
  msgBox.classList.remove("hide");
  btn.innerText = "Hide";
  btn.classList.add("ppp");
  btn.classList.remove("btn");
  hulk = false;
  console.log("fuc")
  }
  else {
    msgBox.classList.add("hide");
    btn.innerText = "Show";
    btn.classList.add("btn");
    btn.classList.remove("ppp");
    hulk= true;
    console.log("k")
  }
});
