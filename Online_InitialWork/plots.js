// Line Chart
// plotArea is the ID givien in the html code, (<div id="plotArea"></div>)
Plotly.newPlot("plotArea", [{ x: [1, 2, 3], y: [10, 20, 30] }]);

// Bar Chart - Variable contains data arrays inside an Object
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
Plotly.newPlot("plotArea", [trace]);

// Bar Chart - Variable Object contained inside an array
var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [20, 28, 1],
    type: "bar"
}];

Plotly.newPlot("plotArea", trace);

// Bar Chart - Add titles
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: { title: "Food Option" },
    yaxis: { title: "Number of Respondents" }
};

Plotly.newPlot("plotArea", [trace], layout);

// Bar Chart
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};
var data = [trace];
var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks" },
    yaxis: { title: "% of Drinks Ordered" }
};
Plotly.newPlot("plotArea", data, layout);

// Pie Chart
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotArea", data, layout);

  // Scatter Chart
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'scatter',
    mode: 'markers'
  };
  var data = [trace];
  var layout = {
    title: "Scatter Chart",
  };
  Plotly.newPlot("plotArea", data, layout);

  // Map Method
  var numbers = [1,2,3,4,5];
  var doubled = numbers.map(function(num) {
    return num * 2;
  })
  console.log(doubled)

  // Map Method add numbers
  var numbers = [0,2,4,6,8];
  var doubled = numbers.map(function(num) {
    return num +5;
  })
  console.log(doubled)

  // Map to extract specific properties from an object
  var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});

console.log(cityNames);

// Filter Method
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

// Sort
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// Slice
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1)

// Slice to end of array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
console.log(words)