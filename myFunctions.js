const console = document.getElementById("result");
const cells = document.querySelectorAll('td');

// cells.forEach(cell => {
//   cell.addEventListener('mouseover', () =>
//   console.innerHTML = "Row index is : " + cell.closest("tr").rowIndex + "<br/> Column index: " + cell.cellIndex + "<br/> Content = " + cell.parentNode.children[1].innerText + " " + cell.parentNode.children[2].innerText);
// });


function myFunction(el,btn) {
  var x = document.getElementById(el);
  if (x.style.display === "none") {
      btn.classList.toggle("btncolor");
      x.style.display = "contents";
  } else {
      btn.classList.toggle("btncolor");
      x.style.display = "none";
  }
}
function myFunctionBtn() {
  var x = document.getElementById("btnchose");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  
}
function myFunctionBtnClick() {
  var x = document.getElementById("formStory");
  if (x.style.display === "none") {
    x.style.display = "flex";
  }
  
}
