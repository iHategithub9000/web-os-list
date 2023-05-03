
console.group("[kernload]")
console.log("Initiating variable runCode")
var runCode;
console.group("[DOMLOAD]")
console.log("Adding event listener DOMContentLoaded")
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content has been loaded.")
  console.ungroup()
  console.log("Assigning function to runCode in DOMContentLoaded event.")
  runCode = function() {
    var code = document.getElementById("code").value;
    var output = eval(code);
    document.getElementById("output").value = output;
  }
  console.group("MSGLOAD")
  console.log("Initiating alerts")
  webofs.kload.init_alerts()
  console.log("Alerts initiated")
  console.ungroup()
  console.ungroup()
});
