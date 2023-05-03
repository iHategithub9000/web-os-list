document.addEventListener("DOMContentLoaded", function() {
  let ct = document.getElementById("consoletext");
  let co = document.getElementById("cout");
  let ca = document.getElementById("caccept");

  ca.addEventListener("click", () => {
    co.innerText = "Output:\n" + eval(ct.innerText);
  });
});
