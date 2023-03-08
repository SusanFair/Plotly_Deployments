// Import the data from data.js
const url = "https://api.spacexdata.com/v2/launchpads";
//dataAPI = d3.json(url).then(receivedData => console.log(receivedData));



// Pull only retrieve the details only from the Vandenberg Air Force Base?, full name
//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));


// Skill Drill print longitude and latitude for each SpaceX launch !!! Multiples

// Option 1
// d3.json(url).then(function(data) {
//     Object.values(data).forEach(station => console.log(station.location.latitude, station.location.longitude));
// })
console.log("try option 2")
//Option 2 with fat arrow
d3.json(url).then (spaceXResults =>
    Object.values(spaceXResults).forEach(station => console.log(station.location.latitude, station.location.longitude))
);

console.log("try option 3")
//Option 3 - Using Map()
d3.json(url).then (spaceXResult =>
    spaceXResult.map((station => console.log(station.full_name,station.location.latitude,station.location.longitude))
));

// d3.json(url).then(spaceXResults => console.log(spaceXResults[i].location.longitude))
// }


// d3.json(url).then(spaceXResults => console.log(spaceXResults[1].location.latitude))
// d3.json(url).then(spaceXResults => console.log(spaceXResults[1].location.longitude))
// // function printPads() {
// //     return parseInt(datal_name.location.latitude)
// // // /    d3.json(url).then(spaceXResults => console.log(spaceXResults[dataRow].location.latitude))
// // /    d3.json(url).then(spaceXResults => console.log(spaceXResults[dataRow].location.longitude))
// }

// printPads()

// // function filterCities(city) {
//     return parseInt(city.Increase_from_2016) > 15000;
//   }


// var cityPop = top15Cities.filter(function (top15Cities) {
//     return top15Cities["Increase_from_2016"] > 15000;
// });



// // Print out longitude and latitude for each SpaceX launch station
// var longLaunch = dataAPI.map(dataAPI => parseInt(dataAPI.location.latitude));
// console.log(longLaunch)

// // Sort cities in descending order
// var sortedCities = cityGrowths.sort((a,b) =>
// a.Increase_from_2016 - b.Increase_from_2016).reverse();
// console.log(sortedCities);

// // Select only top 5 cities
// var topFiveCities = sortedCities.slice(0,5);
// console.log(topFiveCities);

// // Create arrays of city names and top 5 growth figures
// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
// console.log(topFiveCityNames);
// console.log(topFiveCityGrowths);

// // Render info in Plotly
// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
// };
// var data = [trace];
// var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City"},
//     yaxis: {title: "Population Growth, 2016-2017"}
// };
// Plotly.newPlot("bar-plot", data, layout);