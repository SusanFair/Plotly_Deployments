function init() {
  // Grab a reference to the dropdown select element  
  var selector = d3.select("#selDataset");
  
  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
      
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
 
    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  })
  };
// Initialize the dashboard
init();

// Change option, never called in JS, but called from html on change.
  function optionChanged(newSample) {
   buildMetadata(newSample);
   //buildCharts(newSample);
  }
// Panel
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      // Use d3 to select panel
      var PANEL = d3.select("#sample-metadata");

  PANEL.html("");
      //Object.entries(result).map(result => PANEL.append("h6").text(JSON.stringify(result)));
  Object.entries(result).map(result => PANEL.append("h6").text(result[0] + ": " + result[1]));
    });
  }


//   function updatePlotly() {
//     var dropdownMenu = d3.select("#dropdownMenu");
//     var dataset = dropdownMenu.property("value");
  
//     var xData = [1, 2, 3, 4, 5];

//     var yData = [];
  
//     if (dataset === 'dataset1') {
//       yData = [1, 2, 4, 8, 16];
//     };
  
//     if (dataset === 'dataset2') {
//       yData = [1, 10, 100, 1000, 10000];
//     };
  
//     var trace = {
//       x: [xData],
//       y: [yData],
//     };
  
//     Plotly.restyle("plot", trace);
//   };