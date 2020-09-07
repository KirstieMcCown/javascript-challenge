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
  
    // Select the input element for the date and get the raw HTML node
    var inputDate = d3.select("#datetime");
  
    // Get the value property of the date input element
    var dateValue = inputDate.property("value");
  

    // Select the input element for the city and get the raw HTML node
    var inputCity = d3.select("#city");
  
    // Get the value property of the city input element
    var cityValue = inputCity.property("value").toLowerCase();


    // Select the input element for the state and get the raw HTML node
    var inputState = d3.select("#state");
  
    // Get the value property of the state input element
    var stateValue = inputState.property("value").toLowerCase();


    // Select the input element for the country and get the raw HTML node
    var inputCountry = d3.select("#country");
      
    // Get the value property of the country input element
    var countryValue = inputCountry.property("value").toLowerCase();


    // Select the input element for the shape and get the raw HTML node
    var inputShape = d3.select("#shape");
      
    // Get the value property of the shape input element
    var shapeValue = inputShape.property("value").toLowerCase();


    // Use the form input to filter the data by any filter
    filtering = tableData;

    if (dateValue) {
    filtering = tableData.filter(sighting => sighting.datetime === dateValue);
    }
    if (cityValue) {
    filtering = tableData.filter(sighting => sighting.city === cityValue);
    }
    if (stateValue) {
    filtering = tableData.filter(sighting => sighting.state === stateValue);
    }
    if (countryValue) {
    filtering = tableData.filter(sighting => sighting.country === countryValue);
    }
    if (shapeValue) {
    filtering = tableData.filter(sighting => sighting.shape === shapeValue);
    }
   

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

    
    

