// Import the data from data.js
d3.json("samples.json").then(function(data) {
    console.log(data)
});



//Pull only retrieve the details only from the Vandenberg Air Force Base?, full name
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));


// //Skill Drill print longitude and latitude for each SpaceX launch !!! Multiples

// Option 1
// d3.json(url).then(function(data) {
//     Object.values(data).forEach(station => console.log(station.location.latitude, station.location.longitude));
// });
// console.log("try option 2")

// //Option 2 with fat arrow
// d3.json(url).then (spaceXResults =>
//     Object.values(spaceXResults).forEach(station => console.log(station.location.latitude, station.location.longitude))
// );
// console.log("try option 3")

// //Option 3 - Using Map()
// d3.json(url).then (spaceXResult =>
//     spaceXResult.map((station => console.log(station.full_name,station.location.latitude,station.location.longitude))
// ));








