var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory10);
// ["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"]
var pointScale = d3.scaleOrdinal()
  .domain(["Person", "Entity", "Division", "Fund"])
  .range(["#1f77b4","#ff7f0e","#2ca02c","#d62728"]);

// var simulation = d3.forceSimulation()
//     .force("link", d3.forceLink().id(function(d) { return d.id; }).strength(0.01))
//     .force("charge", d3.forceManyBody().strength(-10))
//     .force("center", d3.forceCenter(width / 2, height / 2))
//     .force("y", d3.forceY().y(function(d){
//         return height/2;
//     }).strength(function(d){
//         if (d.proximity == 0) {
//             return 2;
//         } else {
//             return 1/(d.proximity*100);
//         }
//     }))
//     .force("x", d3.forceX().x(function(d){
//         // the x coord of the zero node / proximity level
//         return width/2;
//     }).strength(function(d){
//         if (d.proximity == 0) {
//             return 2;
//         } else {
//             return 1/(d.proximity*100);
//         }
        
//     }));


d3.json("data.json").then(function(graph) {
    
  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", 2);

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 7)
      .attr("fill", function(d) { return pointScale(d.type); })
      .attr("data-bs-toggle", "tooltip")
        .attr("data-tippy-content", function(d) {
            return "<b>"+ d.id + " ("+ d.proximity + ")"+ "</b><br/>" + d.description;
        })
        .attr("class", "tt");
        

    var simulation = d3.forceSimulation(graph)
    .force("charge", d3.forceCollide().radius(10).iterations(2))
    .force("r", d3.forceRadial(function(d) {
        return d.proximity * 100;
    }))
    .on("tick", ticked);

  // Create a drag handler and append it to the node object instead
  var drag_handler = d3.drag()
      .on("start",  (event, d) => node.filter(p => p === d).raise().attr("stroke", "black"))
      .on("drag", (event, d) => (d.x = event.x, d.y = event.y))
      .on("end", (event, d) => node.filter(p => p === d).attr("stroke", null));

  drag_handler(node);

    var labels = node.append("text")
      .text(function(d) {
        return d.id;
      })
      .attr('x', 6)
      .attr('y', 3);

  node.append("title")
      .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

tippy('[data-tippy-content]', {
    allowHTML: true
});

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}