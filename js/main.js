{
  function getTable() {
    console.log("ready");
    let cot = parseInt(document.getElementById("cot").value);
    let hang = parseInt(document.getElementById("hang").value);
    let result = '<table id="target" border="1">';
    for (let j = 0; j <= hang; j++) {
      if (j === 0) {
        result +=  "<thead><tr>";
        for (let i = 1; i <= cot; i++) {
          result += "<td>Cột " + i + "</td>";
        }
        result += "</tr></thead>";
      } else {
        result += "<tr>";
        for (let i = 1; i <= cot; i++) {
         result +=  "<td> Hàng " + j + " Cột " + i + "</td>";
        }
        result += "</tr>";
      }
    }
    result += "</table>";
    document.getElementById("table").innerHTML = result;
  }
}
