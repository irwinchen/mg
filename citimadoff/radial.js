var pointScale = d3.scaleOrdinal()
  .domain(["Person", "Entity", "Division", "Fund"])
  .range(["#1f77b4","#ff7f0e","#2ca02c","#d62728"]);
  var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var title = svg
    .append("text")
    .attr("x",  0 - (width/3)-60)
    .attr("y", 0 - (height/3))
    .attr("class", "title")
    .style("font-size", "24px")
    .text("Citigroup / BLMIS Connections");

var box = svg.append("g")
.attr("class", "box")
.append("rect")
.attr("width", 200)
.attr("height", 40)
.attr("stroke", "red")
.attr("x", (width/3)-130)
.attr("y", 0 - (height/3))
.attr("fill", "none");

var conf = d3.select(".box").append("text")
.attr("text-anchor", "middle")
.style("font-size", "11px")
.attr("x", (width/3)-28)
.attr("y", 0 - (height/3)+18)
.attr("fill", "red")
.text("PRIVILEGED AND CONFIDENTIAL");

var atty = d3.select(".box").append("text")
.attr("text-anchor", "middle")
.style("font-size", "11px")
.attr("x", (width/3)-27)
.attr("y", 0 - (height/3)+31)
.attr("fill", "red")
.text("ATTORNEY WORK PRODUCT");

d3.json("data.json").then(function(graph) {
    // if (error) throw error;

    var node = d3.select("svg")
    .append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(graph.nodes)
    .enter().append("g");

    var circles = node.append("circle")
    .attr("r", 7)
    .attr("fill", function(d) { return pointScale(d.type); })
    .attr("data-bs-toggle", "tooltip")
        .attr("data-tippy-content", function(d) {
            return "<b>"+ d.id + "</b><br/>" + d.description;
        })
    .attr("class", "tt");

    var link = d3.select("svg")
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
    .attr("stroke-width", 2);

    var simulation = d3.forceSimulation(graph.nodes)
    .force("charge", d3.forceCollide().radius(10))
    .force("r", d3.forceRadial(function(d) {
        return d.proximity * 80;
    }))
    .force("link", d3.forceLink().id(function(d) { return d.id; }).strength(.1))
    .on("tick", ticked);

    var labels = node.append("text")
      .text(function(d) {
        return d.id;
      })
      .attr('x', 8)
      .attr('y', 3);

      

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
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        });
}
});