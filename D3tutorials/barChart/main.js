// Bar Chart tutorial by Mike Bostock
// http://bost.ocks.org/mike/bar/

// Part 1: Basic CSS bar chart
(function() {
  var data = [4, 8, 15, 16, 23, 42];
  var chart = d3.select('#part1');
  var bar = chart.selectAll('div');
  var barUpdate = bar.data(data);
  var barEnter =  barUpdate.enter().append('div');

  // Linear scale for a more explicit chart display
  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

  barEnter.style('width', function(d) { return x(d) + 'px'; });
  barEnter.text(function(d) { return d; });
})();

// Part 2: Bar chart using SVG
(function() {
  var data = [4, 8, 15, 16, 23, 42];

  var width = 420,
    barHeight = 20;

  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

  var chart = d3.select('#part2')
    .attr('width', width)
    .attr('height', barHeight * data.length);

  var bar = chart.selectAll('g')
      .data(data)
    .enter().append('g')
      .attr('transform', function(d, i) {
        return 'translate(0,' + i * barHeight + ')';
      });

  bar.append('rect')
    .attr('width', x)
    .attr('height', barHeight - 1);

  bar.append('text')
    .attr('x', function(d) { return x(d) - 3; })
    .attr('y', barHeight / 2)
    .attr('dy', '.35em')
    .text(function(d) { return d; s});
})();
