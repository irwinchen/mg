var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

    svg.append('defs').append('marker')
    .attr('id','arrowhead')
    .attr('viewBox','-0 -5 10 10')
    .attr('refX',6)
    .attr('refY',0)
    .attr('orient','auto')
    .attr('markerWidth',6)
    .attr('markerHeight',6)
    .attr('xoverflow','visible')
    .attr('orient', 'auto-start-reverse')
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', '#1DB100')
    .style('stroke','none');
    
let zoom = d3.zoom()
.scaleExtent([.5,2])
.on('zoom', handleZoom);

var hilit = -1;
var graph = {
    "nodes": [{"id":"1st Choice Pregnancy Resources of Pamlico","type":"CPC"},
    {"id":"Community Pregnancy Center","type":"CPC"},
    {"id":"A Hand Of Hope Pregnancy Resource Center","type":"CPC"},
    {"id":"A Heart's Cry","type":"CPC"},
    {"id":"AAA Crisis Pregnancy Center","type":"CPC"},
    {"id":"AAA Crisis Pregnancy Center","type":"CPC"},
    {"id":"Abiding Hope, Inc.","type":"CPC"},
    {"id":"Abortion Pill Rescue Network","type":"National Org"},
    {"id":"Abundant Exchange Services, Inc.","type":"CPC"},
    {"id":"Agape Pregnancy Support Services","type":"CPC"},
    {"id":"Albemarle Crisis Pregnancy Center","type":"CPC"},
    {"id":"Albemarle Pregnancy Resource Center & Clinic","type":"CPC"},
    {"id":"Alleghany Pregnancy Care Center","type":"CPC"},
    {"id":"Alliance Defending Freedom","type":"National Org"},
    {"id":"Alpha Pregnancy Support, Inc.","type":"CPC"},
    {"id":"American Endowment Foundation","type":"Org"},
    {"id":"American Family Association","type":"National Org"},
    {"id":"American Family Association","type":"National Org"},
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
    {"id":"Caralynn Vaughn","type":"Individual"},
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
    {"id":"Coastal Pregnancy Care Center, Inc.","type":"CPC"},
    {"id":"Community Foundation Of Henderson County, Inc.","type":"org"},
    {"id":"Community Ministry Support, Inc.","type":"org"},
    {"id":"Compassion Care Center","type":"CPC"},
    {"id":"Concerned Women for America","type":"National Org"},
    {"id":"Creative Choice Pregnancy Resource Center","type":"CPC"},
    {"id":"Crisis Pregnancy Center Of Gaston County, Inc.","type":"CPC"},
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
    {"id":"Gateway Women's Care","type":"CPC"},
    {"id":"George Delgado, M.D.","type":"Individual"},
    {"id":"Greg Barefoot","type":"Individual"},
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
    {"id":"Ichoose Pregnancy Support Services","type":"CPC"},
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
    {"id":"Marjorie Dannenfelser","type":"Individual"},
    {"id":"Mark Creech","type":"Individual"},
    {"id":"Mary Fainn","type":"Individual"},
    {"id":"Mission Pre Born, Inc.","type":"org"},
    {"id":"Moss Family Foundation, Inc.","type":"org"},
    {"id":"Mountain Area Pregnancy Services","type":"CPC"},
    {"id":"National Christian Charitable Foundation, Inc.","type":"org"},
    {"id":"National Institute of Family Life Advocate","type":"National Org"},
    {"id":"NC Values Coalition","type":"State Org"},
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
    {"id":"Pregnancy Resource Center Of Statesville","type":"CPC"},
    {"id":"Pregnancy Resource Center of Charlotte","type":"CPC"},
    {"id":"Pregnancy Resource Center Of Cleveland County, Inc.","type":"CPC"},
    {"id":"Pregnancy Resource Center Of Stanly County","type":"CPC"},
    {"id":"Pregnancy Support Center","type":"CPC"},
    {"id":"Pregnancy Support Services, Inc.","type":"CPC"},
    {"id":"R A Bryan Foundation, Inc.","type":"org"},
    {"id":"Ramah International","type":"National Org"},
    {"id":"Raymond James Charitable Endowment Fund","type":"org"},
    {"id":"Reach Out Crisis Pregnancy Center","type":"CPC"},
    {"id":"Reynolds American Foundation","type":"org"},
    {"id":"Roberta 'Bobbie' Meyer","type":"Individual"},
    {"id":"Rockingham Pregnancy Care Center","type":"CPC"},
    {"id":"Ronnda Patrick","type":"Individual"},
    {"id":"Rowan County Pregnancy Counseling Center, Inc.","type":"CPC"},
    {"id":"Russell Capps","type":"Individual"},
    {"id":"Salem Pregnancy Care Center","type":"CPC"},
    {"id":"Santa Maria Council 2829 Lodge Legacy Fund","type":"org"},
    {"id":"Save The Storks","type":"org"},
    {"id":"Schwab Charitable Fund","type":"org"},
    {"id":"Senator Chad Barefoot","type":"Individual"},
    {"id":"Servant Foundation","type":"org"},
    {"id":"Servants for Life","type":"Local Org"},
    {"id":"Sharon Kelly","type":"Individual"},
    {"id":"Sherman Charitable Foundation Inc Agency Acct","type":"org"},
    {"id":"Smoky Mountain Pregnancy Care Center","type":"CPC"},
    {"id":"Speedway Childrens Charities","type":"org"},
    {"id":"Stacey Holland","type":"Individual"},
    {"id":"State Senator Bill Cook","type":"Individual"},
    {"id":"Susan B. Anthony List","type":"National Org"},
    {"id":"Susan Sturgill","type":"Individual"},
    {"id":"Tami Fitzgerald","type":"Individual"},
    {"id":"Teresa Pannell","type":"Individual"},
    {"id":"The Ayco Charitable Foundation","type":"org"},
    {"id":"The Bolick Foundation","type":"org"},
    {"id":"The Borden Fund, Inc.","type":"org"},
    {"id":"The Center for Women","type":"CPC"},
    {"id":"The Epic Center (Eastern Pregnancy Information Clinic)","type":"CPC"},
    {"id":"The Lagomarsino Foundation","type":"org"},
    {"id":"The Legacy Center","type":"CPC"},
    {"id":"The Minnie And Bernard Lane Foundation","type":"org"},
    {"id":"The Pregnancy Network, Inc.","type":"CPC"},
    {"id":"The Pregnancy Network Winston-Salem","type":"CPC"},
    {"id":"The Stone Foundation","type":"org"},
    {"id":"The Sylvester Family Foundation, Inc.","type":"org"},
    {"id":"TruthGirlz","type":"Local Org"},
    {"id":"Victoria Miglin","type":"Individual"},
    {"id":"Vitamin Angel Alliance, Inc.","type":"org"},
    {"id":"Wayne Pregnancy Care Center","type":"CPC"},
    {"id":"Wilkes Crisis Pregnancy Center","type":"CPC"},
    {"id":"Wilson Pregnancy Center","type":"CPC"},
    {"id":"Winston Salem Foundation","type":"org"},
    {"id":"Women Speak Out PAC","type":"National Org"},
    {"id":"Your Choice Pregnancy Clinic","type":"CPC"},
    {"id":"Your Choice Resource Center","type":"CPC"},
    {"id":"Your Choices Randolph","type":"CPC"},
    {"id":"Western Carolina Pregnancy Care Center","type":"CPC"},
    {"id":"Life Choice Pregnancy Center","type":"CPC"},
    {"id":"Tri-County Family Center","type":"CPC"},
    {"id":"MiraVia","type":"CPC"},
    {"id":"U City Women’s Center","type":"CPC"},
    {"id":"Lifeline Sampson","type":"CPC"},
    {"id":"Smokey Mountain Pregnancy Care Center","type":"CPC"},
    {"id":"Crisis Pregnancy Center North","type":"CPC"},
    {"id":"Heartbeat Women’s Center","type":"CPC"},
    {"id":"Triad Coalition for Life","type":"CPC"},
    {"id":"Ashe Pregnancy Care Center","type":"CPC"},
    {"id":"McDowell Pregnancy Care Center","type":"CPC"},
    {"id":"Creative Choices Pregnancy Resource Center","type":"CPC"},
    {"id":"Not Forgotten Ministries","type":"CPC"},
    {"id":"State Funding","type":"CPC"}],
    "links": [{"source":"A Hand Of Hope Pregnancy Resource Center","target":"Carolina Pregnancy Care Fellowship","description":"","amount":10411},
    {"source":"American Endowment Foundation","target":"Gateway Women's Care","description":"","amount":20000},
    {"source":"American Online Giving Foundation, Inc.","target":"Crisis Pregnancy Center Of Gaston County, Inc.","description":"","amount":15594},
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
    {"source":"Carolina Pregnancy Care Fellowship","target":"The Pregnancy Network, Inc.","description":"","amount":35259},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Wayne Pregnancy Care Center","description":"","amount":22980},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Wilkes Crisis Pregnancy Center","description":"","amount":45311},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Crystal Regan","description":"Chairman","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Roberta 'Bobbie' Meyer","description":"State Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Stacey Holland","description":"Assistant to State Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Joanie Page","description":"Director of Finance","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Teresa Pannell","description":"Financial Assistant","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Amy Jones","description":"Vice Chairman","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Mary Fainn","description":"Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Machelle Kirby","description":"Treasurer","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Sharon Kelly","description":"Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Victoria Miglin","description":"Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Ronnda Patrick","description":"Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Caralynn Vaughn","description":"Former Director","amount":null},
    {"source":"Pregnancy Resource Center Of Statesville","target":"Victoria Miglin","description":"Principal","amount":null},
    {"source":"Pregnancy Resource Center Of Statesville","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pregnancy Resource Center Of Statesville","description":"Affiliate","amount":null},
    {"source":"Pregnancy Resource Center Of Statesville","target":"Friends of Pregnancy Resouce Center Of Statesville","description":"Donor","amount":null},
    {"source":"Pregnancy Resource Center Of Statesville","target":"TruthGirlz","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"A Heart's Cry","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"1st Choice Pregnancy Resources of Pamlico","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"AAA Crisis Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Abiding Hope, Inc.","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Abundant Exchange Services, Inc.","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Agape Pregnancy Support Services","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Albemarle Crisis Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Agape Pregnancy Support Services","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Alleghany Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Alpha Pregnancy Support, Inc.","description":"Affiliate","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Abortion Pill Rescue Network","description":"Subsidiary","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Peggy Hartshorn","description":"Board Chair","amount":null},
    {"source":"Abortion Pill Rescue Network","target":"George Delgado, M.D.","description":"Medical Advisor","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Charles A. Donovan","description":"Director","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Care Net","description":"Partners","amount":null},
    {"source":"Care Net","target":"Option Line","description":"Joint Venture","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Option Line","description":"Joint Venture","amount":null},
    {"source":"Coastal Pregnancy Care Center, Inc.","target":"State Senator Bill Cook","description":"Supporter","amount":null},
    {"source":"Servants for Life","target":"Amy Jones","description":"Director","amount":null},
    {"source":"Rowan County Pregnancy Counseling Center, Inc.","target":"Mary Fainn","description":"Director","amount":null},
    {"source":"Caldwell Pregnancy Care Center","target":"Machelle Kirby","description":"Director","amount":null},
    {"source":"Lifeline Pregnancy Help Center","target":"Sharon Kelly","description":"Director","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Barbara Holt","description":"Former President","amount":null},
    {"source":"American Family Association","target":"Christian Action League","description":"Affiliate","amount":null},
    {"source":"Love Life Charlotte","target":"Pregnancy Resource Center of Charlotte","description":"Partners","amount":null},
    {"source":"Pregnancy Resource Center of Charlotte","target":"Justin Reeder","description":"","amount":null},
    {"source":"Alleghany Pregnancy Care Center","target":"Ronnda Patrick","description":"Director","amount":null},
    {"source":"Your Choices Randolph","target":"Caralynn Vaughn","description":"Director","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Ichoose Pregnancy Support Services","description":"Affiliate","amount":null},
    {"source":"Concerned Women for America","target":"Jill Coward","description":"North Carolina State Director","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Pregnancy Resource Center of Charlotte","description":"Partners","amount":null},
    {"source":"NC Values Coalition","target":"Tami Fitzgerald","description":"Founder and Executive Director","amount":null},
    {"source":"Tami Fitzgerald","target":"Alliance Defending Freedom","description":"Allied attorney","amount":null},
    {"source":"Susan B. Anthony List","target":"Tami Fitzgerald","description":"State Director","amount":null},
    {"source":"Tami Fitzgerald","target":"Benham Brothers","description":"Friends","amount":null},
    {"source":"NC Values Coalition","target":"Benham Brothers","description":"Supporter","amount":null},
    {"source":"NC Values Coalition","target":"Jim Quack","description":"Communications Official","amount":null},
    {"source":"Benham Brothers","target":"Jim Quack","description":"Collaboraters","amount":null},
    {"source":"Susan B. Anthony List","target":"Marjorie Dannenfelser","description":"President","amount":null},
    {"source":"NC Values Coalition","target":"Susan B. Anthony List","description":"Partners","amount":null},
    {"source":"NC Values Coalition","target":"Women Speak Out PAC","description":"Partners","amount":null},
    {"source":"Women Speak Out PAC","target":"Susan B. Anthony List","description":"Partners","amount":null},
    {"source":"Alliance Defending Freedom","target":"Marjorie Dannenfelser","description":"Director","amount":null},
    {"source":"Heartbeat international, Inc.","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"Care Net","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"National Institute of Family Life Advocate","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"NC Values Coalition","target":"Laura Macklem","description":"Press and Political Director","amount":null},
    {"source":"Women Speak Out PAC","target":"Tami Fitzgerald","description":"","amount":null},
    {"source":"Tami Fitzgerald","target":"Ethics & Religious Liberty Council of the Southern Baptist Convention","description":"Former Director ","amount":null},
    {"source":"Tami Fitzgerald","target":"Senator Chad Barefoot","description":"Mother-in-Law","amount":null},
    {"source":"NC Values Coalition","target":"Leonard O. Geoganga","description":"Digital Director","amount":null},
    {"source":"Women Speak Out PAC","target":"Jennifer Gross","description":"Treasurer","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Dr. William Pincus","description":"President","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Bobby Singleton","description":"Vice President","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Clair Williams","description":"Secretary","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Nikolai Brelinsky","description":"Treasurer","amount":null},
    {"source":"Christian Action League","target":"Mark Creech","description":"Executive Director","amount":null},
    {"source":"Christian Action League","target":"Russell Capps","description":"Vice President","amount":null},
    {"source":"Christian Action League","target":"Jack Marshburn","description":"President","amount":null},
    {"source":"Christian Action League","target":"Greg Barefoot","description":"Director","amount":null},
    {"source":"Mountain Area Pregnancy Services","target":"Abiding Hope, Inc.","description":"","amount":68326},
    {"source":"Carolina Pregnancy Care Fellowship","target":"A Hand Of Hope Pregnancy Resource Center","description":"","amount":13171},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Albemarle Pregnancy Resource Center & Clinic","description":"","amount":13363},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Alleghany Pregnancy Care Center","description":"","amount":10191},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Cabarrus Women's Center, Inc.","description":"","amount":19452},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Caring Hearts Pregnancy Center","description":"","amount":10096},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Carolina Pregnancy Center","description":"","amount":12227},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Choices Women's Center","description":"","amount":12854},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Coastal Pregnancy Care Center, Inc.","description":"","amount":20329},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Eastern Pregnancy Information","description":"","amount":6941},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Gate Pregnancy Resource Center","description":"","amount":16299},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Hands Of Hope For Life, Inc.","description":"","amount":14193},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Heartbeats Women's Center","description":"","amount":17106},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Albemarle Pregnancy Resource Center & Clinic","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Cabarrus Women's Center, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Crisis Pregnancy Center Of Gaston County, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Gateway Women's Care","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Ichoose Pregnancy Support Services","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Life Care Pregnancy Center, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Lifeline Pregnancy Help Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Mountain Area Pregnancy Services","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pregnancy Care Center Of Ahoskie","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pregnancy Care Center Of Catawba Valley","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pregnancy Resource Center Of Stanly County","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pregnancy Support Services, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"The Center for Women","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Your Choices Randolph","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"1st Choice Pregnancy Resources of Pamlico","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Western Carolina Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Life Choice Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Tri-County Family Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"MiraVia","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"U City Women’s Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Lifeline Sampson","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Smokey Mountain Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Crisis Pregnancy Center North","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Heartbeat Women’s Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Triad Coalition for Life","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Ashe Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"McDowell Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Creative Choices Pregnancy Resource Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Coastal Pregnancy Care Center, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Not Forgotten Ministries","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Community Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Abiding Hope, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Agape Pregnancy Support Services","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Alleghany Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Alpha Pregnancy Support, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Birthchoice","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Caldwell Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Caring Hearts Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Carolina Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Choices Women's Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Compassion Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Coastal Pregnancy Care Center, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Crisis Pregnancy Center Of Lincoln County","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Davie Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Gateway Women's Care","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"H.E.L.P. Crisis Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Hands Of Hope For Life, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Hope Pregnancy Care Center, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Life Line Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Lifeline Pregnancy Help Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Living Hope Pregnancy Support Services","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"New Life Family Outreach","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Open Arms Crisis Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pee Dee Pregnancy Resource Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pregnancy Care Center Of Catawba Valley","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Pregnancy Support Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Reach Out Crisis Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Salem Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Smoky Mountain Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"The Epic Center (Eastern Pregnancy Information Clinic)","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"The Legacy Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"The Pregnancy Network, Inc.","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Wayne Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Wilkes Crisis Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Your Choice Pregnancy Clinic","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Your Choice Resource Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"A Hand Of Hope Pregnancy Resource Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Christian Life Home","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Gate Pregnancy Resource Center","description":"Affiliate","amount":null},
    {"source":"State Funding","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"North Carolina Baptist Hospital","target":"Salem Pregnancy Care Center","description":"","amount":10000},
    {"source":"National Christian Charitable Foundation, Inc.","target":"Life Care Pregnancy Center, Inc.","description":"","amount":500},
    {"source":"National Christian Charitable Foundation, Inc.","target":"Carolina Pregnancy Care Fellowship","description":"","amount":2500},
    {"source":"National Christian Charitable Foundation, Inc.","target":"New Hope Crisis Pregnancy Center","description":"","amount":16532},
    {"source":"National Christian Charitable Foundation, Inc.","target":"Cabarrus Women's Center, Inc.","description":"","amount":6000},
    {"source":"National Christian Charitable Foundation, Inc.","target":"Alpha Pregnancy Support, Inc.","description":"","amount":100},
    {"source":"National Christian Charitable Foundation, Inc.","target":"Coastal Pregnancy Care Center, Inc.","description":"","amount":1000},
    {"source":"National Christian Charitable Foundation, Inc.","target":"Gateway Women's Care","description":"","amount":326070},
    {"source":"National Christian Charitable Foundation, Inc.","target":"New Hope Pregnancy Care","description":"","amount":2500},
    {"source":"National Christian Charitable Foundation, Inc.","target":"Life Line Pregnancy Center","description":"","amount":17500},
    {"source":"National Christian Charitable Foundation, Inc.","target":"Onslow Pregnancy Resource Center","description":"","amount":2000},
    {"source":"National Christian Charitable Foundation, Inc.","target":"Open Arms Crisis Pregnancy Center","description":"","amount":500},
    {"source":"National Christian Charitable Foundation, Inc.","target":"The Pregnancy Network, Inc.","description":"","amount":1200},
    {"source":"Celanese Foundation","target":"Pregnancy Resource Center Of Cleveland County, Inc.","description":"","amount":390},
    {"source":"Charles A Sullivan Foundation","target":"Life Care Pregnancy Center, Inc.","description":"","amount":20000},
    {"source":"Chou Family Foundation","target":"Gateway Women's Care","description":"","amount":1000},
    {"source":"Christian Life Home","target":"Carolina Pregnancy Care Fellowship","description":"","amount":5400},
    {"source":"Clifford A & Lillian C Peeler","target":"Rowan County Pregnancy Counseling Center, Inc.","description":"","amount":6236},
    {"source":"Community Foundation Of Henderson County, Inc.","target":"Open Arms Crisis Pregnancy Center","description":"","amount":13100},
    {"source":"Community Ministry Support, Inc.","target":"Pregnancy Support Center","description":"","amount":16818},
    {"source":"Crisis Pregnancy Center Of Lincoln County","target":"Crisis Pregnancy Center Of Gaston County, Inc.","description":"","amount":6535},
    {"source":"Crossroads Fellowship Foundation","target":"Gateway Women's Care","description":"","amount":12000},
    {"source":"Dameron Foundation","target":"Gateway Women's Care","description":"","amount":4000},
    {"source":"Delmarva Education Association","target":"Salem Pregnancy Care Center","description":"","amount":22000},
    {"source":"Edge Foundation, Inc.","target":"Pregnancy Care Center Of Catawba Valley","description":"","amount":2000},
    {"source":"Fidelity Investments Charitable Gift Fund","target":"Gateway Women's Care","description":"","amount":18150},
    {"source":"Fletcher Hospital, Inc.","target":"Mountain Area Pregnancy Services","description":"","amount":11480},
    {"source":"Fletcher Hospital, Inc.","target":"Open Arms Crisis Pregnancy Center","description":"","amount":27300},
    {"source":"G Gregory Smith Family Foundation, Inc.","target":"The Pregnancy Network, Inc.","description":"","amount":30000},
    {"source":"Gaston Community Foundation","target":"Crisis Pregnancy Center Of Gaston County, Inc.","description":"","amount":90029},
    {"source":"Image Clear Ultrasound, Inc.","target":"Life Line Pregnancy Center","description":"","amount":1000},
    {"source":"Injoy Thrift Goldsboro, Inc.","target":"Wayne Pregnancy Care Center","description":"","amount":31800},
    {"source":"Iskander Family Foundation, Inc.","target":"Wayne Pregnancy Care Center","description":"","amount":800},
    {"source":"Kimley Horn Foundation","target":"Gateway Women's Care","description":"","amount":2750},
    {"source":"M & J Foundation, Inc.","target":"Wayne Pregnancy Care Center","description":"","amount":53500},
    {"source":"Mission Pre Born, Inc.","target":"Pregnancy Resource Center Of Cleveland County, Inc.","description":"","amount":10000},
    {"source":"Moss Family Foundation, Inc.","target":"Your Choices Randolph","description":"","amount":4000},
    {"source":"Network For Good","target":"Your Choices Randolph","description":"","amount":16123},
    {"source":"North Carolina Baptist Hospital","target":"Salem Pregnancy Care Center","description":"","amount":10000},
    {"source":"North Carolina Community Foundation, Inc.","target":"Life Line Pregnancy Center","description":"","amount":6000},
    {"source":"Pratt Family Foundation, Inc.","target":"The Pregnancy Network, Inc.","description":"","amount":20000},
    {"source":"R A Bryan Foundation, Inc.","target":"Wayne Pregnancy Care Center","description":"","amount":20000},
    {"source":"Raymond James Charitable Endowment Fund","target":"Birthright Of Winston Salem, Inc.","description":"","amount":10000},
    {"source":"Reynolds American Foundation","target":"New Hope Pregnancy Care","description":"","amount":3500},
    {"source":"Reynolds American Foundation","target":"Life Line Pregnancy Center","description":"","amount":3500},
    {"source":"Santa Maria Council 2829 Lodge Legacy Fund","target":"Birthright Of Winston Salem, Inc.","description":"","amount":1000},
    {"source":"Save The Storks","target":"Coastal Pregnancy Care Center, Inc.","description":"","amount":115350},
    {"source":"Save The Storks","target":"New Hope Pregnancy Care","description":"","amount":25800},
    {"source":"Save The Storks","target":"Life Line Pregnancy Center","description":"","amount":10000},
    {"source":"Schwab Charitable Fund","target":"Mountain Area Pregnancy Services","description":"","amount":8500},
    {"source":"Schwab Charitable Fund","target":"Pregnancy Support Services, Inc.","description":"","amount":10600},
    {"source":"Schwab Charitable Fund","target":"Gateway Women's Care","description":"","amount":7300},
    {"source":"Schwab Charitable Fund","target":"The Pregnancy Network, Inc.","description":"","amount":16900},
    {"source":"Servant Foundation","target":"Pregnancy Support Services, Inc.","description":"","amount":100000},
    {"source":"Sherman Charitable Foundation Inc Agency Acct","target":"Life Care Pregnancy Center, Inc.","description":"","amount":2000},
    {"source":"Speedway Childrens Charities","target":"Crisis Pregnancy Center Of Gaston County, Inc.","description":"","amount":7500},
    {"source":"The Ayco Charitable Foundation","target":"The Pregnancy Network, Inc.","description":"","amount":22000},
    {"source":"The Bolick Foundation","target":"Pregnancy Care Center Of Catawba Valley","description":"","amount":5000},
    {"source":"The Borden Fund, Inc.","target":"Wayne Pregnancy Care Center","description":"","amount":2500},
    {"source":"The Lagomarsino Foundation","target":"Life Line Pregnancy Center","description":"","amount":6000},
    {"source":"The Minnie And Bernard Lane Foundation","target":"Pregnancy Care Center Of Catawba Valley","description":"","amount":71500},
    {"source":"The Stone Foundation","target":"Wilkes Crisis Pregnancy Center","description":"","amount":10000},
    {"source":"The Sylvester Family Foundation, Inc.","target":"Onslow Pregnancy Resource Center","description":"","amount":5000},
    {"source":"Vitamin Angel Alliance, Inc.","target":"Life Line Pregnancy Center","description":"","amount":15479},
    {"source":"Winston Salem Foundation","target":"Salem Pregnancy Care Center","description":"","amount":37200}]
};
var color = d3.scaleOrdinal(d3.schemeCategory10);
var legendColor = d3.scaleOrdinal()
.domain(["Individual", "org", "Local Org", "State Org", "National Org", "CPC"])
.range(["#0076BA","#929292","#ff7f0e","#006C65", "#FF42A1", "#B51700"]);

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
  .range(["#0076BA","#B51700","#929292","#006C65", "#F27200", "#FF42A1"]);


  var title = svg
  .append("text")
  .attr("x",  0 - (width/3)-60)
  .attr("y", 0 - (height/3))
  .attr("class", "title")
  .style("font-size", "24px")
  .text("North Carolina CPCs");

// var box = svg.append("g")
//   .attr("class", "box")   
//   .append("rect")
//   .attr("width", 200)
//   .attr("height", 40)
//   .attr("stroke", "red")
//   .attr("x", (width/3)-130)
//   .attr("y", 0 - (height/3))
//   .attr("fill", "none");

// var conf = d3.select(".box").append("text")
//   .attr("text-anchor", "middle")
//   .style("font-size", "11px")
//   .attr("x", (width/3)-28)
//   .attr("y", 0 - (height/3)+18)
//   .attr("fill", "red")
//   .text("PRIVILEGED AND CONFIDENTIAL");

// var atty = d3.select(".box").append("text")
//   .attr("text-anchor", "middle")
//   .style("font-size", "11px")
//   .attr("x", (width/3)-27)
//   .attr("y", 0 - (height/3)+31)
//   .attr("fill", "red")
//   .text("ATTORNEY WORK PRODUCT");

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
        .style('stroke', function(d){
            if (d.amount > 0) {
                return "#1DB100";
            } else {
                return "#d9d9d9";
            }
        })
        .style('opacity', .5)
        .attr("stroke-width", 2)
        .attr('marker-end', function(d){
            if (d.amount > 0) {
                return 'url(#arrowhead)';
            } else {
                return 'none';
            }
        });

    
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


simulation.force("link")
      .links(graph.links);


tippy('[data-tippy-content]', {
    allowHTML: true,
    hideOnClick: 'false',
    trigger: 'mouseenter'
});


// Draw Symbol Legend
svg.append("g")
    .attr("class", "legendSymbol");
    // .attr("transform", "translate(-450,180)");

svg.select('.legendSymbol')
.append("rect")
.attr('x', 40.65)
.attr('y',599.47)
.attr('width', 123)
.attr('height', 156)
.style('fill','#000000');
// var legendPath = d3.legendSymbol()
// .scale(symbolScale)
// .orient("vertical")
// .labelWrap(30)
// .shapePadding(4)
// .labelOffset(3)
// .title("LEGEND");

// svg.select(".legendSymbol")
//   .call(legendPath);

// // Draw Color Legend
// svg.append("g")
//     .attr("class", "legendOrdinal")
//     .attr("transform", "translate(-444,255)");

// var legendOrdinal = d3.legendColor()
//     .shape("path", d3.symbol().type(d3.symbolCircle).size(80)())
//     .scale(legendColor);

// svg.select(".legendOrdinal")
//     .call(legendOrdinal);

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
    d3.select('svg g.graph').transition().call(zoom.scaleBy, .2);
d3.select('svg')
    .call(zoom);
}

initZoom();
// });