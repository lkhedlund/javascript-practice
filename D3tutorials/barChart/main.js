// Bar Chart tutorial by Mike Bostock
// http://bost.ocks.org/mike/bar/

var data = [4, 8, 15, 16, 23, 42];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter =  barUpdate.enter().append("div");

// Linear scale for a more explicit chart display
var x = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 420]);

barEnter.style("width", function(d) { return x(d) + "px"; });
barEnter.text(function(d) { return d; });
