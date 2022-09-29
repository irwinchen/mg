var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

let zoom = d3.zoom()
.scaleExtent([.5,2])
.on('zoom', handleZoom);

var hilit = -1;
var graph = {
    "nodes": [{"id":"1st Choice Pregnancy Resources of Pamlico","type":"CPC"},
    {"id":"A A Community Pregnancy Center","type":"CPC"},
    {"id":"A Hand Of Hope Pregnancy Resource Center","type":"org"},
    {"id":"A Heart's Cry","type":"CPC"},
    {"id":"AAA Crisis Pregnancy Center","type":"CPC"},
    {"id":"AAA Crisis Pregnancy Center","type":"CPC"},
    {"id":"Abiding Hope, Inc.","type":"CPC"},
    {"id":"Abortion Pill Rescue Network","type":"National Org"},
    {"id":"Abundant Exchange Services, Inc. ","type":"CPC"},
    {"id":"Agape Pregnancy Support ","type":"CPC"},
    {"id":"Agape Pregnancy Support Services","type":"CPC"},
    {"id":"Albemarle Crisis Pregnancy Center","type":"CPC"},
    {"id":"Albemarle Pregnancy Resource Center & Clinic","type":"CPC"},
    {"id":"Alleghany Pregnancy Care Center","type":"CPC"},
    {"id":"Alliance Defending Freedom","type":"National Org"},
    {"id":"Alpha Pregnancy Suppport, Inc.","type":"CPC"},
    {"id":"American Endowment Foundation","type":"Org"},
    {"id":"American Family Association","type":"National Org"},
    {"id":"American Family Association ","type":"National Org"},
    {"id":"American Online Giving Foundation, Inc.","type":"Org"},
    {"id":"Americans United for Life","type":"National Org"},
    {"id":"Amy Jones","type":"Individual"},
    {"id":"Arts Council Of Wayne County, Inc.","type":"Org"},
    {"id":"Ash Pregnancy Care Center","type":"CPC"},
    {"id":"Avery Pregnancy & Resource Center","type":"CPC"},
    {"id":"Bank Of America Charitable Foundation, Inc.","type":"Org"},
    {"id":"Barbara Holt","type":"Individual"},
    {"id":"Benham Brothers","type":"Individual"},
    {"id":"Bethany Christian Services - Arden","type":"CPC"},
    {"id":"Bethany Christian Services - Raleigh","type":"CPC"},
    {"id":"Birthchoice","type":"CPC"},
    {"id":"Birthright Of Winston Salem, Inc.","type":"CPC"},
    {"id":"Bobby Singleton","type":"Individual"},
    {"id":"Boyles Eidson Family Foundation","type":"Org"},
    {"id":"Cabarrus Women's Center, Inc.","type":"CPC"},
    {"id":"Caldwell Pregnancy Care Center","type":"CPC"},
    {"id":"Caralynn Vaughn ","type":"Individual"},
    {"id":"Care Net","type":"National Org"},
    {"id":"Caring Hearts Pregnancy Center","type":"CPC"},
    {"id":"Carolina Pregnancy Care Fellowship","type":"State Org"},
    {"id":"Carolina Pregnancy Center","type":"CPC"},
    {"id":"Catholic Pro-Life Action Network of Charlotte","type":"Local Org"},
    {"id":"Celanese Foundation","type":"Org"},
    {"id":"Charles A Sullivan Foundation","type":"Org"},
    {"id":"Charles A. Donovan","type":"Individual"},
    {"id":"Choices Women's Center","type":"CPC"},
    {"id":"Chou Family Foundation","type":"org"},
    {"id":"Christian Action League","type":"State Org"},
    {"id":"Christian Life Home","type":"org"},
    {"id":"Cities4Life","type":"Local Org"},
    {"id":"Clair Williams","type":"Individual"},
    {"id":"Clifford A & Lillian C Peeler","type":"org"},
    {"id":"Coastal Pregnancy Care Center","type":"CPC"},
    {"id":"Coastal Pregnancy Center","type":"CPC"},
    {"id":"Community Foundation Of Henderson County, Inc.","type":"org"},
    {"id":"Community Ministry Support, Inc.","type":"org"},
    {"id":"Compassion Care Center","type":"CPC"},
    {"id":"Concerned Women for America","type":"National Org"},
    {"id":"Costal Pregnancy Center","type":"CPC"},
    {"id":"Creative Choice Pregnancy Resource Center","type":"CPC"},
    {"id":"Crisis Pregnancy Center Of Gaston County, Inc. - East","type":"CPC"},
    {"id":"Crisis Pregnancy Center Of Gaston County, Inc. - Main","type":"CPC"},
    {"id":"Crisis Pregnancy Center Of Gaston County, Inc. - North","type":"CPC"},
    {"id":"Crisis Pregnancy Center Of Gaston County, Inc. - Northwest","type":"CPC"},
    {"id":"Crisis Pregnancy Center Of Gaston County, Inc. - West","type":"CPC"},
    {"id":"Crisis Pregnancy Center Of Lincoln County","type":"CPC"},
    {"id":"Crossroads Fellowship Foundation","type":"org"},
    {"id":"Crystal Regan","type":"Individual"},
    {"id":"Cura Women's Clinic - Raleigh","type":"CPC"},
    {"id":"Dameron Foundation","type":"org"},
    {"id":"Davie Pregnancy Care Center","type":"CPC"},
    {"id":"Delmarva Education Association","type":"org"},
    {"id":"Dr. William Pincus","type":"Individual"},
    {"id":"Eastern Pregnancy Information","type":"org"},
    {"id":"Edge Foundation, Inc.","type":"org"},
    {"id":"Ethics & Religious Liberty Council of the Southern Baptist Convention","type":"National Org"},
    {"id":"Family Research Council","type":"National Org"},
    {"id":"Fidelity Investments Charitable Gift Fund","type":"org"},
    {"id":"Fletcher Hospital, Inc.","type":"org"},
    {"id":"Flip Benham","type":"Individual"},
    {"id":"Friends of Pregnancy Resouce Center Of Statesville","type":"Local Org"},
    {"id":"G Gregory Smith Family Foundation, Inc.","type":"org"},
    {"id":"Gaston Community Foundation","type":"org"},
    {"id":"Gate Pregnancy Resource Center","type":"State Org"},
    {"id":"Gate Pregnancy Resource Center - Harrisburg","type":"CPC"},
    {"id":"Gate Pregnancy Resource Center - Satellite","type":"CPC"},
    {"id":"Gateway Women's Care","type":"CPC"},
    {"id":"George Delgado, M.D.","type":"Individual"},
    {"id":"Greg Barefoot ","type":"Individual"},
    {"id":"H.E.L.P. Crisis Pregnancy Center","type":"CPC"},
    {"id":"Hands Of Hope For Life, Inc.","type":"CPC"},
    {"id":"Havelock Pregnancy Resource Center","type":"CPC"},
    {"id":"Heartbeats Women's Center","type":"CPC"},
    {"id":"Heartbeat international, Inc.","type":"National Org"},
    {"id":"His Blessings Pregnancy Support Services","type":"CPC"},
    {"id":"His Little Ones Pregnancy Support Services","type":"CPC"},
    {"id":"Hope Pregnancy Care Center, Inc.","type":"CPC"},
    {"id":"Hope Pregnancy Resource Center","type":"CPC"},
    {"id":"Hope Pregnancy Resource Center","type":"CPC"},
    {"id":"Ichoose Pregnancy Support Services - Clayton","type":"CPC"},
    {"id":"Ichoose Pregnancy Support Services - Knightdale","type":"CPC"},
    {"id":"Image Clear Ultrasound, Inc.","type":"org"},
    {"id":"In His Hands Life Ministry","type":"CPC"},
    {"id":"Injoy Thrift Goldsboro, Inc.","type":"org"},
    {"id":"Iskander Family Foundation, Inc.","type":"org"},
    {"id":"Jack Marshburn","type":"Individual"},
    {"id":"Jennifer Gross","type":"Individual"},
    {"id":"Jill Coward","type":"Individual"},
    {"id":"Jim Quack","type":"Individual"},
    {"id":"Joanie Page","type":"Individual"},
    {"id":"Justin Reeder","type":"Individual"},
    {"id":"Kimley Horn Foundation","type":"org"},
    {"id":"Laura Macklem","type":"Individual"},
    {"id":"Leonard O. Geoganga","type":"Individual"},
    {"id":"Life Care Pregnancy Center, Inc.","type":"CPC"},
    {"id":"Life Line Pregnancy Center","type":"CPC"},
    {"id":"Lifeline Pregnancy Help Center","type":"CPC"},
    {"id":"Living Hope Pregnancy Support Services","type":"CPC"},
    {"id":"Love Life Charlotte","type":"Local Org"},
    {"id":"M & J Foundation, Inc.","type":"org"},
    {"id":"Machelle Kirby","type":"Individual"},
    {"id":"Marjorie Dannenfelser ","type":"Individual"},
    {"id":"Mark Creech","type":"Individual"},
    {"id":"Mary Fainn","type":"Individual"},
    {"id":"Mission Pre Born, Inc.","type":"org"},
    {"id":"Moss Family Foundation, Inc.","type":"org"},
    {"id":"Mountain Area Pregnancy Services","type":"State Org"},
    {"id":"Mountain Area Pregnancy Services - Asheville","type":"CPC"},
    {"id":"Mountain Area Pregnancy Services - Burnsville","type":"CPC"},
    {"id":"Mountain Area Pregnancy Services - Marion","type":"CPC"},
    {"id":"Mountain Area Pregnancy Services - Mars Hill","type":"CPC"},
    {"id":"National Christian Charitable Foundation, Inc.","type":"org"},
    {"id":"National Institute of Family Life Advocate","type":"National Org"},
    {"id":"NC Values Coalition ","type":"State Org"},
    {"id":"Network For Good","type":"org"},
    {"id":"New Hope Crisis Pregnancy Center","type":"CPC"},
    {"id":"New Hope Pregnancy Care","type":"CPC"},
    {"id":"New Hope Pregnancy Center","type":"CPC"},
    {"id":"New Life Family Outreach","type":"CPC"},
    {"id":"Nikolai Brelinsky","type":"Individual"},
    {"id":"North Carolina Baptist Hospital","type":"org"},
    {"id":"North Carolina Community Foundation, Inc.","type":"org"},
    {"id":"North Carolina Right to Life, Inc.","type":"State Org"},
    {"id":"Onslow Pregnancy Resource Center","type":"CPC"},
    {"id":"Open Arms Crisis Pregnancy Center","type":"CPC"},
    {"id":"Operation Save America","type":"National Org"},
    {"id":"Option Line","type":"National Org"},
    {"id":"Pee Dee Pregnancy Resource Center","type":"CPC"},
    {"id":"Peggy Hartshorn","type":"Individual"},
    {"id":"Pratt Family Foundation, Inc.","type":"org"},
    {"id":"Pregnancy & Parenting Center - Andrews","type":"CPC"},
    {"id":"Pregnancy & Parenting Center - Murphy","type":"CPC"},
    {"id":"Pregnancy Care Center","type":"CPC"},
    {"id":"Pregnancy Care Center Of Ahoskie","type":"CPC"},
    {"id":"Pregnancy Care Center Of Catawba Valley","type":"CPC"},
    {"id":"Pregnancy Care Center, Inc.","type":"CPC"},
    {"id":"Pregnancy Resource Center Of Statesville","type":"CPC"},
    {"id":"Pregnancy Resource Center of Charlotte","type":"Local Org"},
    {"id":"Pregnancy Resource Center of Charlotte","type":"Local Org"},
    {"id":"Pregnancy Resource Center Of Cleveland County, Inc.","type":"CPC"},
    {"id":"Pregnancy Resource Center Of Stanly County","type":"CPC"},
    {"id":"Pregnancy Support Center","type":"CPC"},
    {"id":"Pregnancy Support Services","type":"CPC"},
    {"id":"R A Bryan Foundation, Inc.","type":"org"},
    {"id":"Ramah International","type":"National Org"},
    {"id":"Raymond James Charitable Endowment Fund","type":"org"},
    {"id":"Reach Out Crisis Pregnancy Center","type":"CPC"},
    {"id":"Reynolds American Foundation","type":"org"},
    {"id":"Roberta ","type":"Individual"},
    {"id":"Rockingham Pregnancy Care Center","type":"CPC"},
    {"id":"Ronnda Patrick","type":"Individual"},
    {"id":"Rowan County Pregnancy Counseling Center, Inc.","type":"CPC"},
    {"id":"Russell Capps","type":"Individual"},
    {"id":"Salem Pregnancy Support Center, Inc.","type":"CPC"},
    {"id":"Santa Maria Council 2829 Lodge Legacy Fund","type":"org"},
    {"id":"Save The Storks","type":"org"},
    {"id":"Schwab Charitable Fund","type":"org"},
    {"id":"Senator Chad Barefoot ","type":"Individual"},
    {"id":"Servant Foundation","type":"org"},
    {"id":"Servants for Life","type":"Local Org"},
    {"id":"Servants for Life, Raleigh ","type":"Local Org"},
    {"id":"Sharon Kelly","type":"Individual"},
    {"id":"Sherman Charitable Foundation Inc Agency Acct","type":"org"},
    {"id":"Smoky Mountain Pregnancy Care Center - Cullowhee","type":"CPC"},
    {"id":"Smoky Mountain Pregnancy Care Center - Franklin","type":"CPC"},
    {"id":"Speedway Childrens Charities","type":"org"},
    {"id":"Stacey Holland","type":"Individual"},
    {"id":"State Senator Bill Cook","type":"Individual"},
    {"id":"Susan B. Anthony List","type":"National Org"},
    {"id":"Susan Sturgill","type":"Individual"},
    {"id":"Tami Fitzgerald ","type":"Individual"},
    {"id":"Teresa Pannell","type":"Individual"},
    {"id":"The Ayco Charitable Foundation","type":"org"},
    {"id":"The Bolick Foundation","type":"org"},
    {"id":"The Borden Fund, Inc.","type":"org"},
    {"id":"The Center for Women","type":"CPC"},
    {"id":"The Epic Center (Eastern Pregnancy Information Clinic) - Kinston","type":"CPC"},
    {"id":"The Epic Center (Eastern Pregnancy Information Clinic) - New Bern","type":"CPC"},
    {"id":"The Lagomarsino Foundation","type":"org"},
    {"id":"The Legacy Center","type":"CPC"},
    {"id":"The Minnie And Bernard Lane Foundation","type":"org"},
    {"id":"The Pregnancy Network","type":"CPC"},
    {"id":"The Pregnancy Network Winston-Salem","type":"CPC"},
    {"id":"The Stone Foundation","type":"org"},
    {"id":"The Sylvester Family Foundation, Inc.","type":"org"},
    {"id":"TruthGirlz","type":"Local Org"},
    {"id":"Victoria Miglin","type":"Individual"},
    {"id":"Vitamin Angel Alliance, Inc.","type":"org"},
    {"id":"Wayne Pregnancy Care Center","type":"CPC"},
    {"id":"Wilkes Pregnancy Care Center","type":"CPC"},
    {"id":"Wilson Pregnancy Center","type":"CPC"},
    {"id":"Winston Salem Foundation","type":"org"},
    {"id":"Women Speak Out PAC","type":"National Org"},
    {"id":"Your Choice Pregnancy Clinic - Fuquay Varina","type":"CPC"},
    {"id":"Your Choice Pregnancy Clinic - Raleigh","type":"CPC"},
    {"id":"Your Choice Resource Center","type":"CPC"},
    {"id":"Your Choices Randolph","type":"CPC"}],
    "links": [{"source":"A Hand Of Hope Pregnancy Resource Center","target":"Carolina Pregnancy Care Fellowship","description":"","amount":10411},
    {"source":"American Endowment Foundation","target":"Gateway Women's Care","description":"","amount":20000},
    {"source":"American Online Giving Foundation, Inc.","target":"Crisis Pregnancy Center Of Gaston County, Inc. - Main","description":"","amount":15594},
    {"source":"American Online Giving Foundation, Inc.","target":"New Hope Pregnancy Care","description":"","amount":5600},
    {"source":"Arts Council Of Wayne County, Inc.","target":"Wayne Pregnancy Care Center","description":"","amount":600},
    {"source":"Bank Of America Charitable Foundation, Inc.","target":"Birthright Of Winston Salem, Inc.","description":"","amount":240},
    {"source":"Bank Of America Charitable Foundation, Inc.","target":"Gate Pregnancy Resource Center","description":"","amount":5165},
    {"source":"Boyles Eidson Family Foundation","target":"Lifeline Pregnancy Help Center","description":"","amount":1500},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Your Choices Randolph","description":"","amount":45629},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Mountain Area Pregnancy Services","description":"","amount":8524},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Life Care Pregnancy Center, Inc.","description":"","amount":44288},
    {"source":"Carolina Pregnancy Care Fellowship","target":"New Hope Crisis Pregnancy Center","description":"","amount":95860},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Cabarrus Women's Center, Inc.","description":"","amount":84973},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Alleghany Pregnancy Care Center","description":"","amount":13784},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Gate Pregnancy Resource Center","description":"","amount":15784},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Gateway Women's Care","description":"","amount":72093},
    {"source":"Carolina Pregnancy Care Fellowship","target":"New Hope Pregnancy Care","description":"","amount":61821},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Life Line Pregnancy Center","description":"","amount":46423},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Lifeline Pregnancy Help Center","description":"","amount":64613},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Onslow Pregnancy Resource Center","description":"","amount":36277},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Open Arms Crisis Pregnancy Center","description":"","amount":46604},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pregnancy Resource Center Of Cleveland County, Inc.","description":"","amount":47992},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Rowan County Pregnancy Counseling Center, Inc.","description":"","amount":25852},
    {"source":"Carolina Pregnancy Care Fellowship","target":"The Pregnancy Network","description":"","amount":35259},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Wayne Pregnancy Care Center","description":"","amount":22980},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Wilkes Pregnancy Care Center","description":"","amount":45311},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Crystal Regan","description":"Chairman","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Roberta ","description":"State Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Stacey Holland","description":"Assistant to State Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Joanie Page","description":"Director of Finance ","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Teresa Pannell","description":"Financial Assistant","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Amy Jones","description":"Vice Chairman","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Mary Fainn","description":"Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Machelle Kirby","description":"Treasurer","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Sharon Kelly","description":"Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Victoria Miglin","description":"Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Ronnda Patrick","description":"Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Caralynn Vaughn ","description":"Former Director ","amount":null},
    {"source":"Pregnancy Resource Center Of Statesville","target":"Victoria Miglin","description":"Principal ","amount":null},
    {"source":"Pregnancy Resource Center Of Statesville","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pregnancy Resource Center Of Statesville","description":"Affiliate","amount":null},
    {"source":"Pregnancy Resource Center Of Statesville","target":"Friends of Pregnancy Resouce Center Of Statesville","description":"Donor ","amount":null},
    {"source":"Pregnancy Resource Center Of Statesville","target":"TruthGirlz","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"A Heart's Cry","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"1st Choice Pregnancy Resources of Pamlico","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"AAA Crisis Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Abiding Hope, Inc.","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Abundant Exchange Services, Inc. ","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Agape Pregnancy Support Services","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Albemarle Crisis Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Agape Pregnancy Support ","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Alleghany Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Alpha Pregnancy Suppport, Inc.","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Abortion Pill Rescue Network","description":"Subsidiary","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Peggy Hartshorn","description":"Board Chair","amount":null},
    {"source":"Abortion Pill Rescue Network","target":"George Delgado, M.D.","description":"Medical Advisor","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Charles A. Donovan","description":"Director","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Care Net","description":"Partners","amount":null},
    {"source":"Care Net","target":"Option Line","description":"Joint Venture","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Option Line","description":"Joint Venture","amount":null},
    {"source":"Costal Pregnancy Center","target":"State Senator Bill Cook","description":"Supporter ","amount":null},
    {"source":"Servants for Life, Raleigh ","target":"Amy Jones","description":"Director","amount":null},
    {"source":"Rowan County Pregnancy Counseling Center, Inc.","target":"Mary Fainn","description":"Director","amount":null},
    {"source":"Caldwell Pregnancy Care Center","target":"Machelle Kirby","description":"Director","amount":null},
    {"source":"Lifeline Pregnancy Help Center","target":"Sharon Kelly","description":"Director","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Barbara Holt","description":"Former President","amount":null},
    {"source":"American Family Association ","target":"Christian Action League","description":"Affiliate","amount":null},
    {"source":"Love Life Charlotte","target":"Pregnancy Resource Center of Charlotte","description":"Partners","amount":null},
    {"source":"Pregnancy Resource Center of Charlotte","target":"Justin Reeder","description":"","amount":null},
    {"source":"Alleghany Pregnancy Care Center","target":"Ronnda Patrick","description":"Director","amount":null},
    {"source":"Your Choices Randolph","target":"Caralynn Vaughn ","description":"Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Ichoose Pregnancy Support Services - Knightdale","description":"Affiliate","amount":null},
    {"source":"Concerned Women for America","target":"Jill Coward","description":"North Carolina State Director","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Pregnancy Resource Center of Charlotte","description":"Partners","amount":null},
    {"source":"NC Values Coalition ","target":"Tami Fitzgerald ","description":"Founder and Executive Director","amount":null},
    {"source":"Tami Fitzgerald ","target":"Alliance Defending Freedom","description":"Allied attorney","amount":null},
    {"source":"Susan B. Anthony List","target":"Tami Fitzgerald ","description":"State Director ","amount":null},
    {"source":"Tami Fitzgerald ","target":"Benham Brothers","description":"Friends","amount":null},
    {"source":"NC Values Coalition ","target":"Benham Brothers","description":"Supporter ","amount":null},
    {"source":"NC Values Coalition ","target":"Jim Quack","description":"Communications Official","amount":null},
    {"source":"Benham Brothers","target":"Jim Quack","description":"Collaboraters","amount":null},
    {"source":"Susan B. Anthony List","target":"Marjorie Dannenfelser ","description":"President","amount":null},
    {"source":"NC Values Coalition ","target":"Susan B. Anthony List","description":"Partners ","amount":null},
    {"source":"NC Values Coalition ","target":"Women Speak Out PAC","description":"Partners ","amount":null},
    {"source":"Women Speak Out PAC","target":"Susan B. Anthony List","description":"Partners ","amount":null},
    {"source":"Alliance Defending Freedom","target":"Marjorie Dannenfelser ","description":"Director","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"Care Net","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"National Institute of Family Life Advocate","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"NC Values Coalition ","target":"Laura Macklem","description":"Press and Political Director","amount":null},
    {"source":"Women Speak Out PAC","target":"Tami Fitzgerald ","description":"","amount":null},
    {"source":"Tami Fitzgerald ","target":"Ethics & Religious Liberty Council of the Southern Baptist Convention","description":"Former Director ","amount":null},
    {"source":"Tami Fitzgerald ","target":"Senator Chad Barefoot ","description":"Mother-in-Law","amount":null},
    {"source":"NC Values Coalition ","target":"Leonard O. Geoganga","description":"Digital Director","amount":null},
    {"source":"Women Speak Out PAC","target":"Jennifer Gross","description":"Treasurer","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Dr. William Pincus","description":"President","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Bobby Singleton","description":"Vice President","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Clair Williams","description":"Secretary","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Nikolai Brelinsky","description":"Treasurer ","amount":null},
    {"source":"Christian Action League","target":"Mark Creech","description":"Executive Director ","amount":null},
    {"source":"Christian Action League","target":"Russell Capps","description":"Vice President","amount":null},
    {"source":"Christian Action League","target":"Jack Marshburn","description":"President","amount":null},
    {"source":"Christian Action League","target":"Greg Barefoot ","description":"Director","amount":null},
    {"source":"Mountain Area Pregnancy Services","target":"Abiding Hope, Inc.","description":"","amount":68326},
    {"source":"Carolina Pregnancy Care Fellowship","target":"A Hand Of Hope Pregnancy Resource Center","description":"","amount":13171},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Albemarle Pregnancy Resource Center & Clinic","description":"","amount":13363},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Alleghany Pregnancy Care Center","description":"","amount":10191},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Cabarrus Women's Center, Inc.","description":"","amount":19452},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Caring Hearts Pregnancy Center","description":"","amount":10096},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Carolina Pregnancy Center","description":"","amount":12227},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Choices Women's Center","description":"","amount":12854},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Coastal Pregnancy Center","description":"","amount":20329},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Eastern Pregnancy Information","description":"","amount":6941},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Gate Pregnancy Resource Center","description":"","amount":16299},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Hands Of Hope For Life, Inc.","description":"","amount":14193},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Heartbeats Women's Center","description":"","amount":17106}]
};
var color = d3.scaleOrdinal(d3.schemeCategory10);

var triangleU = d3.symbol().type(d3.symbolTriangle)(),
circle = d3.symbol().type(d3.symbolCircle)(),
cross = d3.symbol().type(d3.symbolCross)(),
square = d3.symbol().type(d3.symbolSquare)();
var symbols = d3.scaleOrdinal()
.domain(["Individual", "org", "Local Org", "State Org", "National Org", "CPC"])
.range([d3.symbolCircle, d3.symbolSquare, d3.symbolSquare, d3.symbolSquare, d3.symbolSquare, d3.symbolTriangle]);
var symbolScale =  d3.scaleOrdinal()
  .domain(["Individual", "org", "CPC"])
  .range([ circle, square, triangleU] );

var pointScale = d3.scaleOrdinal()
  .domain(["Individual", "CPC", "org", "Local Org", "State Org", "National Org"])
  .range(["#1f77b4","#ff7f0e","#2ca02c","#d62728", "#DFA91E", "#1C4149"]);


  var title = svg
  .append("text")
  .attr("x",  0 - (width/3)-60)
  .attr("y", 0 - (height/3))
  .attr("class", "title")
  .style("font-size", "24px")
  .text("North Carolina CPCs");

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

// set the nodes
var nodes = graph.nodes;
// links between nodes
var links = graph.links;

//   d3.json("data.json").then(function(graph) {
    // console.log(graph.links);
    var link = d3.select("svg g")
         .append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .style('stroke', '#d9d9d9')
        .style('opacity', .5)
        .attr("stroke-width", 2);

        
//   var node = svg.append("svg g")
//   .attr("class", "nodes")
// .selectAll("circle")
// .data(graph.nodes)
// .enter().append("circle")
//   .attr("r", 7)
//   .attr("fill", function(d) { return pointScale(d.type); })
//   .attr("data-bs-toggle", "tooltip")
//     .attr("data-tippy-content", function(d) {
//         return d.id;
//     })
//     .attr("class", "tt");
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
        .attr("fill", function(d) { return pointScale(d.type); })
        .attr("d", d3.symbol().type(function(d) { return symbols(d.type); }).size(140))
        .attr("data-bs-toggle", "tooltip")
        .attr("data-tippy-content", function(d) {
            return "<b>"+ d.id + "</b>";
        })
        .attr("class", "tt")
        .attr("stroke-width", 2);

    
node.on("click", showLinks(.1));
node.on("dblclick", resetLinks);
    
    var simulation = d3.forceSimulation(graph.nodes)
    .force("charge", d3.forceCollide().radius(40).iterations(2).strength(1.2))
    // .nodes(graph.nodes)
    // .force("charge", d3.forceManyBody().strength(-100))
    // .force('center', d3.forceCenter(width / 2, height / 2))
    .force("link", d3.forceLink(graph.links).id(d => d.id).strength(.5))
    .on("tick", ticked);
    
    // Draw Labels
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
  // Create a drag handler and append it to the node object instead
  var drag_handler = d3.drag()
      .on("start",  (event, d) => node.filter(p => p === d).raise().attr("stroke", "black"))
      .on("drag", (event, d) => (d.x = event.x, d.y = event.y))
      .on("end", (event, d) => node.filter(p => p === d).attr("stroke", null));

    // var labels = node.append("text")
    //   .text(function(d) {
    //     return d.id;
    //   })
    //   .attr('x', 6)
    //   .attr('y', 3);

//   node.append("title")
//       .text(function(d) { return d.id; });

//   simulation
//       .nodes(graph.nodes)
//       .on("tick", ticked);

simulation.force("link")
      .links(graph.links);
//   simulation.d3.forceLink()
//       .links(graph.links);
// simulation.d3.forceLink(graph.links).id(function(d) { return d.id; });

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

  function handleZoom(e) {
    d3.select('svg g.graph')
      .attr('transform', e.transform);
  }

function initZoom() {
    d3.select('svg g.graph').transition().call(zoom.scaleBy, .50);
d3.select('svg')
    .call(zoom);
}

initZoom();
// });