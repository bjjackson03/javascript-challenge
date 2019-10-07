// from data.js
let ufo = data;

// YOUR CODE HERE!
const tableBody = document.getElementById('tableData');

// Get input element
const input = document.getElementById('input');
input.addEventListener('keyup', function(){

  filteredSearch();


});
  

const button = document.getElementById('btn');
button.addEventListener("click", function() {

  let dataHTML = '';

  for (let value of ufo){
    dataHTML += 
    `<tr><td> ${value.datetime} </td><td>${value.city}</td>
    <td>${value.state}</td><td>${value.country}</td>
    <td> ${value.shape}</td><td>${value.durationMinutes}</td>
    <td>${value.comments}</td></tr>`;
  }

  // Hoisted SearchBar function ran to display after click.
  showSearchBar();

  console.log(dataHTML);
  tableBody.innerHTML = dataHTML;


  // SearchBar code
  function showSearchBar(){

    const x = document.getElementById("searchBar");
    if (x.style.display !== "none") {
          x.style.display = "block";
    } 

    else {
      x.style.display = "none";
    }

  }

});


// Search tr and td tags
function filteredSearch() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input");
  filter = input.value;
  table = document.getElementById("ufoTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
