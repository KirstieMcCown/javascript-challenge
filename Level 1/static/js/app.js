// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);

// Show all data on open 
tableData.forEach((sighting) => {
  var tbody = d3.select("tbody");
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
}); 

// Complete the event handler function for the form
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Remove anything in the table body (this is to clear the output each time the button is clicked)
    d3.select("tbody").html("");
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Use the form input to filter the data by date
    var filtering = tableData.filter(sighting => sighting.datetime === inputValue)
    

    console.log(filtering);

    // Use d3 to append one table row `tr` for each sighting, append 1 cell per sighting value (Date, City, State etc) and update each cell's text with
    // sighting values
    filtering.forEach((sighting) => {
        var tbody = d3.select("tbody");
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      }); 
};     

    