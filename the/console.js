var runCode;
document.addEventListener("DOMContentLoaded", function() {
  runCode = function() {
    var code = document.getElementById("code").value;
    var output = eval(code);
    document.getElementById("output").value = output;
  }
});
