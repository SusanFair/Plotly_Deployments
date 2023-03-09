function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("../samples.json").then((data) => {
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
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);

}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("../samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// Deliverable 1: 1. Create the buildChart function.
function buildCharts(sample) {
  // Deliverable 1: 2. Use d3.json to load the samples.json file 
  d3.json("../samples.json").then((data) => {

    // Deliverable 1: 3. Create a variable that holds the samples array. 
    var samplesArray = data.samples;
    console.log("Result of samplesArray");
    console.log(samplesArray)

    // Deliverable 1: 4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleResultArray = samplesArray.filter(sampleObj => sampleObj.id == sample);

    // Deliverable 3: 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metaArray = data.metadata.filter(metaObj => metaObj.id == sample)
    console.log("Result of metadata");
    console.log(metaArray)

    // Deliverable 1: 5. Create a variable that holds the first sample in the array.
    var sampleResult = sampleResultArray[0];
    console.log("Result of sample")
    console.log(sampleResult)
    // Deliverable 3: 2. Create a variable that holds the first sample in the metadata array.
    var metaResult = metaArray[0];
    console.log("MetaResult");
    console.log(metaResult);
    // Deliverable 1: 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = sampleResult.otu_ids;
    var otu_labels = sampleResult.otu_labels;
    var sample_values = sampleResult.sample_values;

    console.log("Result of otu")
    console.log(otu_ids);
    console.log(otu_labels);
    console.log(sample_values);

    // Deliverable 3: 3. Create a variable that holds the washing frequency.
    var wash = parseFloat(metaResult.wfreq).toFixed(2)
    console.log(wash);

    // Deliverable 1: 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order 
    // so the otu_ids with the most bacteria are last. 
    var yticks = otu_ids.slice(0, 10).map(outObj => `OTU ${outObj}`).reverse()
    console.log("This is yticks")
    console.log(yticks)

    // // Deliverable 1: 8. Create the trace for the bar chart. 
    var trace = [{
      x: sample_values.slice(0, 10).reverse(),
      y: yticks,
      text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];

    // // Deliverable 1: 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      color: "red",
      margin: {
        l: 75,
        w: 50,
        t: 125,
      }
    };
    // Deliverable 1: 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", trace, barLayout);



    // Deliverable 2: 1. Create the trace for the bubble chart.

    // d3 to select eh element that has changed ???????
    var traceBubble = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
     
      marker: {
        size: sample_values,
        color: (otu_ids),
        colorscale: ('Earth'),
        opacity: (500)
      },
    }];

    // Deliverable 2: 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      height: 550,
      width: 1000,
      hovermode: 'closest',
      text: otu_ids,
     
    };
    // Deliverable 2: 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", traceBubble, bubbleLayout);

    console.log("This is wash in trace");
    console.log(wash);

    // // Deliverable 3: 4. Create the trace for the gauge chart.
    var traceGauge = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: wash,
      title: { text: "Scrubs per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [0, 10], tickwidth: 2 },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "lightgreen" },
          { range: [8, 10], color: "green" }
        ],
        bar: { color: "darkblue" },
        // threshold: {
        //   line: { color: "red", width: 4 },
        //   thickness: 0.75,
        //   value: 10
        // }
     }
    }];

       // Deliverable 3: 5. Create the layout for the gauge chart.
    var guageLayout = {
      height: 400,
      width: 400,
      title: "Belly Button Washing Frequency",
      xaxis: {range: [0, 2]},
      margin: {
        l: 10,
        t: 140,
      }

    };
    // Deliverable 3: 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", traceGauge, guageLayout);
  });
}
