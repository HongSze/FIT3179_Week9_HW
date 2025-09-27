// Path to your Vega-Lite JSON spec
const vg1 = "map_chart.vg.json";

// Embed it into the page
vegaEmbed('#map', vg1).then(result => {
  // Access the Vega view instance as result.view
  console.log("Visualization loaded successfully!");
}).catch(console.error);
