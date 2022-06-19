var colorScale = d3.scaleOrdinal()
  .domain(["Person", "Entity", "Division", "Fund"])
  .range(["#1f77b4","#ff7f0e","#2ca02c","#d62728"]);

  var legendColor = d3.scaleOrdinal()
    .domain(["Current Citi Employee", "Former", "Other"])
    .range(["#DC322F", "#00AB93", "#DFA91E"]);

var triangleU = d3.symbol().type(d3.symbolTriangle)(),
circle = d3.symbol().type(d3.symbolCircle)(),
cross = d3.symbol().type(d3.symbolCross)(),
square = d3.symbol().type(d3.symbolSquare)();

var symbols = d3.scaleOrdinal()
.domain(["Person", "Entity", "Division", "Fund"])
.range([d3.symbolCircle, d3.symbolSquare, d3.symbolCross, d3.symbolTriangle]);

var symbolScale =  d3.scaleOrdinal()
  .domain(["Person", "Entity", "Division", "Fund"])
  .range([ circle, square, cross, triangleU] );

  var hilit = -1;

let zoom = d3.zoom()
    .scaleExtent([.5,2])
  .on('zoom', handleZoom);
  
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

    
// d3.json("newdata.json").then(function(graph) {
d3.json("data_jun7.json").then(function(graph) {
    // if (error) throw error;
    // set the nodes
    var nodes = graph.nodes;
    // links between nodes
    var links = graph.links;

    var link = d3.select("svg g")
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
    .attr("stroke", "#333")
    .attr("stroke-width", 1);

    var node = d3.select("svg g")
    .append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(graph.nodes)
    .enter().append("g");
    
    var resetBtnBox = svg
    .append("rect")
    .attr("width", 60)
    .attr("height", 20)
    .attr("class", "resetbtn")
    .attr("x", 0 - (width/3)-60)
    .attr("y", 0 - (height/3)+45)
    .attr("rx", 12)
    .attr("fill", "#ccc")
    .attr("cursor", "pointer")
    .on("click", reset);

    var resetBtn = svg
    .append("text")
    .attr("x", 0 - (width/3)-47)
    .attr("y", 0 - (height/3)+59)
    .text("RESET")
    .on("click", reset);

    var shapes = node.append("g")
        .append("path")
        .attr("fill", function(d) { 
            if (d.status == "Current") {
                return "#DC322F";
            } else if (d.status == "Former") {
                return "#00AB93";
            } else {
                return "#DFA91E";
            }
        })
        .attr("d", d3.symbol().type(function(d) { return symbols(d.type); }).size(140))
        .attr("data-bs-toggle", "tooltip")
        .attr("data-tippy-content", function(d) {
            return "<b>"+ d.id + "</b><br/>" + d.description;
        })
        .attr("class", "tt")
        .attr("stroke-width", 3)
        .attr("stroke", function(d){
            if (d.contact_type == "Key Contact") {
                return "black";
            } else {
                return "none";
            }
        });
    
    node.on("click", showLinks(.1));
    node.on("dblclick", resetLinks);


    var simulation = d3.forceSimulation(graph.nodes)
    .force("charge", d3.forceCollide().radius(20))
    .force("link", d3.forceLink(graph.links).id(d => d.id).strength(0))
    .force("r", d3.forceRadial(function(d) {
        return d.proximity * 90;
    }).strength(1))
    .on("tick", ticked);
    // simulation.stop();
    simulation.force("link")
        .links(graph.links);

    var labels = node.append("text")
      .text(function(d) {
        return d.id;
      })
      .attr('x', 10)
      .attr('y', 3)
      .attr("opacity", .5);

    // build a dictionary of nodes that are linked
    var linkedByIndex = {};
    links.forEach(function(d) {
        linkedByIndex[d.source.index + "," + d.target.index] = 1;
    });

    // check the dictionary to see if nodes are linked
    function isConnected(a, b) {
        return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index;
    }
    
    // fade nodes and leave connected nodes 
    function showLinks(opacity) {
        return function(d, i) {
            // check all other nodes to see if they're connected
            // to this one. if so, keep the opacity at 1, otherwise
            // fade
            node.style("stroke-opacity", function(o) {
                thisOpacity = isConnected(i, o) ? 1 : opacity;
                return thisOpacity;
            });
            node.style("fill-opacity", function(o){
                console.log(i, o);
                thisOpacity = isConnected(i, o) ? 1 : opacity;
                return thisOpacity;
            })
            // also style link accordingly
            link.style("stroke-opacity", function(o) {
                return o.source === i || o.target === i ? 1 : opacity;
            });
        };
    }

    function resetLinks() {
        node.style("stroke-opacity", 1);
        node.style("fill-opacity", 1);
        link.style("stroke-opacity", 1);
        link.style("stroke", "#333");
        initZoom();
    }
    
    function reset() {
        resetLinks();
        initZoom();
    }
    tippy('[data-tippy-content]', {
    allowHTML: true,
    hideOnClick: 'false',
    trigger: 'mouseenter'
});

// Draw Symbol Legend
svg.append("g")
    .attr("class", "legendSymbol")
    .attr("transform", "translate(-450,180)");

var legendPath = d3.legendSymbol()
.scale(symbolScale)
.orient("vertical")
.labelWrap(30)
.shapePadding(4)
.labelOffset(3)
.title("LEGEND");

svg.select(".legendSymbol")
  .call(legendPath);

// Draw Color Legend
svg.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate(-444,255)");

var legendOrdinal = d3.legendColor()
    .shape("path", d3.symbol().type(d3.symbolCircle).size(80)())
    .scale(legendColor);

svg.select(".legendOrdinal")
    .call(legendOrdinal);

var keyLegend = svg.select(".legendOrdinal")
.append("circle")
.attr("r", 5)
.attr("fill", "none")
.attr("stroke", "black")
.attr("stroke-width", 2)
.attr("x", 0)
.attr("y", 0)
.attr("transform", "translate(0, 42)");

var keyLegendText = svg.select(".legendOrdinal")
.append("text")
.attr("x", 15)
.attr("y", 46)
.text("Key Contact");

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

function handleZoom(e) {
    d3.select('svg g.graph')
      .attr('transform', e.transform);
  }

function initZoom() {
    d3.select('svg g.graph').transition().call(zoom.scaleBy, .55);
d3.select('svg')
    .call(zoom);
}

initZoom();