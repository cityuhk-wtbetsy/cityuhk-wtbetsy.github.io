// JavaScript






// dropdown list of previous issues

function pastVolume() {
    document.getElementById("volDropdown").classList.toggle('show');
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("volInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("volDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}





// include external HTML code
/*
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  //loop through a collection of all HTML elements:
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    //search for elements with a certain atrribute:
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      //make an HTTP request using the attribute value as the file name:
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          //remove the attribute, and call this function once more:
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      //exit the function:
      return;
    }
  }
};
*/







/*
const divVolume = document.getElementById("top-header-volume");
divVolume.addEventListener("click", e=> {
    e.preventDefault();
})
*/
