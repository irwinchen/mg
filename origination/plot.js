// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 1200 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          `translate(${margin.left}, ${margin.top})`);

//Read the data
d3.csv("MGOrig.csv").then( function(data) {


  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, d3.max(data.map(d => parseInt(d.Total_Orig)))])
    .range([ height, 0]);
  svg.append("g")
    .attr("transform", `translate(${width*2/3},0)`)
    .call(d3.axisLeft(y));
  // Add X axis
  const x = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", `translate(0, ${y(500000)})`)
    .call(d3.axisBottom(x));

  // Color scale: give me a Practice name, I return a color
  const PracticeColors = d3.scaleOrdinal()
    .domain(["Pre-Deal", "Disputes", "Pre-Hire", "Screening", "IMDD" ])
    .range([ "#2F8BD3", "#DC322F", "#4CA994", "#DFA91E", "#586E75"])

svg.append("g")
  .attr("class", "legendOrdinal")
  .attr("transform", "translate(20,20)");

var legendOrdinal = d3.legendColor()
    .shapeWidth(15)
  .shapePadding(5)
  .scale(PracticeColors);

svg.select(".legendOrdinal")
  .call(legendOrdinal);
  // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
  // Its opacity is set to 0: we don't see it by default.
  const tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "#111")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("position", "absolute")
    .style("cursor", "pointer")

  // Highlight the practice that is hovered
//   const highlight = function(event,d){

//     selected_practice = d.Practice

//     d3.selectAll(".dot")
//       .transition()
//       .duration(200)
//       .style("fill", "lightgrey")
//       .attr("r", 5)

//     d3.selectAll("." + selected_practice)
//       .transition()
//       .duration(200)
//       .style("fill", color(selected_practice))
//       .attr("r", 10)
//   }

  // Highlight the practice dot that is hovered
//   const doNotHighlight = function(event,d){
//     d3.selectAll(".dot")
//       .transition()
//       .duration(200)
//       .style("fill", d => color(d.Practice))
//       .attr("r", 10 )
//   }
// A function that change this tooltip when the user hover a point.
  // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
  const mouseover = function(event, d) {
    tooltip
      .style("opacity", 1)
  }

  const mousemove = function(event, d) {
    tooltip
      .html(`<b>${d.Name}</b><br/>% Primary Origination: ${d.Percent_Primary}<br/>Total Origination: ${d3.format("($,")(d.Total_Orig)}`)
      .style("left", (event.x+10) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      .style("top", (event.y+10) + "px")
  }

  // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
  const mouseleave = function(event,d) {
    tooltip
      .transition()
      .duration(100)
      .style("opacity", 0)
  }
  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", function (d) { return "dot " + d.Practice } )
      .attr("cx", function (d) { return x(parseInt(d.Percent_Primary)); } )
      .attr("cy", function (d) { 
          return y(parseInt(d.Total_Orig)); } )
      .attr("r", 10)
      .style("fill", function (d) { return PracticeColors(d.Practice) } )
      .on("mouseover", mouseover )
      .on("mousemove", mousemove )
      .on("mouseleave", mouseleave )
    // .on("mouseover", highlight)
    // .on("mouseleave", doNotHighlight )

})


