document.addEventListener("DOMContentLoaded", function() {
  ct = document.getElementById("consoletext")
  co = document.getElementById("cout")
  ca = document.getElementById("caccept")

  ca.addEventListener("click",()=>{co.text = "Output:\n"+eval(ct.text)});
})