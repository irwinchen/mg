var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

    svg.append('defs').append('marker')
    .attr('id','arrowhead')
    .attr('viewBox','-0 -5 10 10')
    .attr('refX',15)
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
    "nodes": [{"id":"1st Choice Pregnancy Resources of Pamlico","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Community Pregnancy Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"A Hand Of Hope Pregnancy Resource Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"A Heart's Cry","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"AAA Crisis Pregnancy Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Abiding Hope, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Abortion Pill Rescue Network","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"Abundant Exchange Services, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Agape Pregnancy Support Services","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Albemarle Crisis Pregnancy Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Albemarle Pregnancy Resource Center & Clinic","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Alleghany Pregnancy Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Alliance Defending Freedom","type":"National Org","notes":null,"proximity":4,"description":"Alliance Defending Freedom (“ADF”) is a Christian, anti-abortion and anti-LGBT advocacy group with a nationwide network of attorneys, including Tami Fitzgerald, that, among other activities, serve as local counsel on lawsuits brought by conservative organizations. ADF represents David Benham, his anti-abortion group Cities4Life and Global Impact Ministries (a/k/a Love Life Charlotte) in their lawsuit against the city of Charlotte (see “Benham Brothers”)."},
    {"id":"Alpha Pregnancy Support, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"American Endowment Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"American Family Association","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"American Online Giving Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Americans United for Life","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"Amy Jones","type":"Individual","notes":null,"proximity":3,"description":"Amy Jones is Vice Chairman of the Carolina Pregnancy Care Fellowship and a direcdtor of Servants for Life."},
    {"id":"Arts Council Of Wayne County, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Avery Pregnancy & Resource Center","type":"CPC","notes":null,"proximity":4,"description":""},
    {"id":"Bank Of America Charitable Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":"The Bank of America Charitable Foundation focuses on “improving the lives of individuals and families by investing in basic needs and workforce development and education and also strengthening broader community vitality by addressing needs related to affordable housing, small business, and neighborhood revitalization,” according to its website. In 2019, the Foundation donated $280 to Birthright of Winston-Salem, according to its Form 990 tax filings; that same year, the foundation donated more than $10,000 to Gate Pregnancy Resource Center in Harrisburg, North Carolina."},
    {"id":"Barbara Holt","type":"Individual","notes":null,"proximity":3,"description":"Barbara Holt is the former president of North Carolia Right to Life, Inc. "},
    {"id":"Benham Brothers","type":"Individual","notes":null,"proximity":3,"description":"David Benham and Jason Benham, Flip Benham’s sons, are prominent anti-choice activists in North Carolina. In 2014, the Benham brothers were working with HGTV on a show called Flip it Forward, which was cancelled after some news outlets reported on their extremist anti-abortion activities and their anti-gay activism. David Benham is the president of Cities4Life, an anti-abortion activist group. In April 2020, David Benham was one of eight people who were arrested by the Charlotte-Mecklenburg Police Department for refusing to leave a protest outside an abortion clinic after being cited for violating COVID-19 restrictions on mass gatherings. The case against him was eventually dropped. Benham, his group Cities4Life and Global Impact Ministries (a Charlotte-based, pro-life Christian nonprofit that does business as Love Life Charlotte, founded by Justin Reeder)—all represented by the conservative Christian legal group Alliance Defending Freedom—subsequently sued the city, alleging a violation of First Amendment rights. They disclosed in their lawsuit that Cities4Life partners with a local crisis pregnancy center, the H.E.L.P. Crisis Pregnancy Center, which sends a mobile unit to provide sonograms to people during Cities4Life’s protests outside abortion clinics. This case is active."},
    {"id":"Birthchoice","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Birthright Of Winston Salem, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Bobby Singleton","type":"Individual","notes":null,"proximity":3,"description":"Bobby Singleton is a program leader of Sidewalk Advocates for Life’s branches in eastern Winston-Salem, western Winston-Salem and Greensboro. He is also the director of the Triad Coalition for Life, a vice president of the North Carolina affiliate of Right to Life and the director of 40 Days for Life in Greensboro."},
    {"id":"Boyles Eidson Family Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Cabarrus Women's Center, Inc.","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Caldwell Pregnancy Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Caralynn Vaughn","type":"Individual","notes":null,"proximity":3,"description":"Caralynn Vaugh is a director of CPC Your Choices Randolph and a former director of the Carolina Pregnancy Care Fellowship. "},
    {"id":"Care Net","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"Caring Hearts Pregnancy Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Carolina Pregnancy Care Fellowship","type":"State Org","notes":null,"proximity":3,"description":"The Carolina Pregnancy Fellowship is a statewide coalition of roughly 80 CPCs. It is the second largest anti-choice recipient of North Carolina state funding, and is a major conduit of state funding to CPCs. In April 2018, Rewire News alleged that, since at least 2015, certain CPCs (all Carolina Pregnancy Fellowship members) had used federal funds to buy religious materials. In late 2018, the North Carolina Department of Health and Human Services found that Carolina Pregnancy Fellowship had misspent $50,000 in public funding in violation of the federal law. In 2021, the North Carolina state legislature decided to stop allocating federal money to the Carolina Pregnancy Care Fellowship and instead designate direct state funding for the organization, which comes with fewer requirements."},
    {"id":"Carolina Pregnancy Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Celanese Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Charles A. Sullivan Foundation","type":"org","notes":null,"proximity":5,"description":"The Charles A. Sullivan Charitable Foundation focuses on donating to anti-choice causes and victims of domestic violence. Sullivan, who died in December 2021, was CEO and later chairman of Interstate Bakeries Corporation (the makers of Wonder Bread and Hostess Cake). He was also a founder of Wyandotte Pregnancy Clinic in Kansas, and served on its board. In 2020, the foundation donated approximately $535,000 to pro-life organizations, including the Life Care Pregnancy Center in Carthage, NC."},
    {"id":"Charles A. Donovan","type":"Individual","notes":null,"proximity":3,"description":"Charles A. Donovan is a director of Heartbeat Internatinal, Inc "},
    {"id":"Choices Women's Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Chou Family Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Christian Action League","type":"State Org","notes":null,"proximity":3,"description":""},
    {"id":"Christian Life Home","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Cities4Life","type":"Local Org","notes":null,"proximity":2,"description":"Cities4Life is a Charlotte-based anti-abortion activist group founded by David Benham. It describes itself as a “gospel-centered sidewalk counseling ministry,” according to its Instagram profile."},
    {"id":"Clair Williams","type":"Individual","notes":null,"proximity":3,"description":"Clair Williams is the secretary of North Carolia Right to Life, Inc. "},
    {"id":"Clifford A & Lillian C Peeler","type":"org","notes":null,"proximity":5,"description":"The Clifford A and Lillian C Peeler Foundation was established in 1997 and is based in Salisbury, NC."},
    {"id":"Community Foundation Of Henderson County, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Community Ministry Support, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Compassion Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Concerned Women for America","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"Coastal Pregnancy Care Center, Inc.","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Crisis Pregnancy Center Of Gaston County, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Crisis Pregnancy Center Of Lincoln County","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Crossroads Fellowship Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Crystal Regan","type":"Individual","notes":null,"proximity":3,"description":"Crystal Regan is the chairman of the Carolina Pregnancy Care Fellowship. "},
    {"id":"Curo Women's Clinic - Raleigh","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Dameron Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Davie Pregnancy Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Delmarva Education Association","type":"org","notes":null,"proximity":5,"description":"Delmarva Education Association, based in Winston-Salem, is focused on owning and operating religious radio stations, according to its 2019 IRS Form 990, which indicated that it had $6.6 million in total assets. The group donated to multiple religious and conservative organizations, including the Salem Pregnancy Care Center."},
    {"id":"Dr. William Pincus","type":"Individual","notes":null,"proximity":3,"description":"Dr. William Pincus is the president of North Carolina Right to Life, Inc. "},
    {"id":"Edge Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Ethics & Religious Liberty Council of the Southern Baptist Convention","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"Family Research Council","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"Fidelity Investments Charitable Gift Fund","type":"org","notes":null,"proximity":5,"description":"Fidelity Charitable provides donor-advised fund accounts through an independent 501(c)(3) organization."},
    {"id":"Fletcher Hospital, Inc.","type":"org","notes":null,"proximity":5,"description":"Fletcher Hospital, Inc., based in Hendersonville, N.C. and formed by the Seventh-Day Adventist Church, has 36 practice medical offices located across North Carolina."},
    {"id":"Flip Benham","type":"Individual","notes":null,"proximity":3,"description":"Philip “Flip” Benham and his twin sons David and Jason are prominent anti-choice activists in North Carolina. Flip Benham was formerly the national director of Operation Save America (f/k/a Operation Rescue National), which conducts mass protests at abortion clinics. He is reportedly largely responsible for bringing “anti-abortion extremism” to North Carolina. Flip was convicted of stalking a doctor that provided abortions in 2011, after distributing posters about the doctor that read, “Wanted ... By Christ, to Stop Killing Babies.” There are now reportedly viral recordings of him harassing women and calling them fat and ugly on TikTok."},
    {"id":"Friends of Pregnancy Resouce Center Of Statesville","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"G Gregory Smith Family Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Gaston Community Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Gate Pregnancy Resource Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Gateway Women's Care","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"George Delgado, M.D.","type":"Individual","notes":null,"proximity":4,"description":"George Delgado, M.D. is a medical advisor for the Abortion Pill Rescue Network. "},
    {"id":"Greg Barefoot","type":"Individual","notes":null,"proximity":3,"description":"Greg Barefoot is a director of the Christian Action Legue. "},
    {"id":"H.E.L.P. Crisis Pregnancy Center","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Hands Of Hope For Life, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Havelock Pregnancy Resource Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Heartbeats Women's Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Heartbeat International, Inc.","type":"National Org","notes":null,"proximity":4,"description":"Heartbeat International is a Columbus, Ohio-based international Christian network that supports the largest network of CPCs in the world, with over 3,000 affiliates across 68 countries. Founded as “Alternatives to Abortion” in 1971 by Dr. John Hillabrand, Heartbeat International, which adopted its current name in 1993, advertises itself as “an umbrella nonprofit that offers pregnancy centers behind-the-scenes support,” such as “legal education and staff training in exchange for membership dues.” The organization is also anti-LGBTQ, per its website, and has been accused of promoting racist viewpoints in the past. Heartbeat has partnerships with several North Carolina anti-choice groups and individuals, such as Carolina Pregnancy Care Fellowship, which is a Heartbeat state affiliate. Heartbeat also sells a training on anti-abortion sidewalk advocacy presented by Sidewalk Advocates' founder Lauren Muzyka, called "},
    {"id":"Hope Pregnancy Care Center, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Ichoose Pregnancy Support Services","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Image Clear Ultrasound, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"In His Hands Life Ministry","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Injoy Thrift Goldsboro, Inc.","type":"org","notes":null,"proximity":5,"description":"InJoy Thrift Goldsboro, Inc. operates thrift stores in North Carolina and Arizona, and is a non-profit ministry supporting local and international Christian charities, according to its website. Income from the sale of products at its stores goes to support and fund Christian-based ministries throughout the world."},
    {"id":"Iskander Family Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Jack Marshburn","type":"Individual","notes":null,"proximity":3,"description":"Jack Marshburn is the president of the Christian Action Legue. "},
    {"id":"Jennifer Gross","type":"Individual","notes":null,"proximity":4,"description":"Jennifer Gross is the treasurer of the Women Speak Out PAC."},
    {"id":"Jill Coward","type":"Individual","notes":null,"proximity":3,"description":"Jill Coward is the North Carolina state director of Concerned Women for America. "},
    {"id":"Jim Quack","type":"Individual","notes":null,"proximity":3,"description":"Jim Quack is a communications official of Tami Fitzgerald's North Carolina Values Coalition and previously worked for the Benham family. "},
    {"id":"Joanie Page","type":"Individual","notes":null,"proximity":3,"description":"Joanie Page is the director of finance of the Carolina Pregnancy Care Fellowship. "},
    {"id":"Justin Reeder","type":"Individual","notes":null,"proximity":2,"description":"Justin Reeder is the founder of Love Life Charlotte and a director of the Pregnancy Resource Center of Charlotte. He is a "},
    {"id":"Kimley Horn Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Laura Macklem","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Leonard O. Geoganga","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Life Care Pregnancy Center, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Life Line Pregnancy Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Lifeline Pregnancy Help Center","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Living Hope Pregnancy Support Services","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Love Life Charlotte","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"M & J Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Machelle Kirby","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Marjorie Dannenfelser","type":"Individual","notes":null,"proximity":4,"description":"Marjorie Dannenfelser is a leading anti-abortion activist in the U.S. She serves as president of the Susan B. Anthony List (“SBA List”). She is cited as the driving force behind the SBA List’s shift from its original bipartisan credo to the “anti-abortion juggernaut” it is today. In 2016, Dannenfelser was appointed as Donald Trump's campaign "},
    {"id":"Mark Creech","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Mary Fainn","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Mission Pre Born, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Moss Family Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Mountain Area Pregnancy Services","type":"CPC","notes":null,"proximity":1,"description":"Asheville-based Mountain Area Pregnancy Services (MAPS) is one of 10 CPCs that receive direct state funding. In June 2018, the state allocated $250,000 in federal block grant money to MAPS. This funding reportedly “came as a surprise” to MAPS director Kristi Brown, who stated that the CPC “didn’t ask” for the funding. At the time it received the grant, MAPS “didn’t know what the guidelines were” regarding budgeting and performance requirements that govern federal grants. Brown reportedly submitted her grant budget proposal to DHHS, to which DHHS employee Tara Owens Shuler responded in an email, “The prices look very inflated to me throughout the budget…For example a $400 chair will send up a red flag immediately.” Brown expressed concern about the organization’s ability to maintain its religious mission under the federal constraints. As a result, MAPS ultimately turned down all but $46,235 of the $250,00 it was allotted. In July 2019, the legislature proposed to allot MAPS $200,000 in state funds plus $50,000 in federal block grant funds. In NC’s 2021 budget, MAPS was awarded $500,000 in direct state funding. We note that MAPS’s website displays a “statement of faith,” in which MAPS declares: “We believe the Bible to be the inspired, the only infallible, authoritative Word of God.”"},
    {"id":"National Christian Charitable Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"National Institute of Family Life Advocate","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"NC Values Coalition","type":"State Org","notes":null,"proximity":3,"description":"NC Values Coalition is a Raleigh-based conservative lobbying organization with an anti-abortion and anti-LGBT agenda. It is led by Tami Fitzgerald. The organization frequently partners with SBA List and the Women Speak Out PAC to push its anti-choice agenda across North Carolina."},
    {"id":"Network For Good","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"New Hope Crisis Pregnancy Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"New Hope Pregnancy Care","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"New Life Family Outreach","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Nikolai Brelinsky","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"North Carolina Baptist Hospital","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"North Carolina Community Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"North Carolina Right to Life, Inc.","type":"State Org","notes":null,"proximity":3,"description":""},
    {"id":"Onslow Pregnancy Resource Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Open Arms Crisis Pregnancy Center","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Operation Save America","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"Option Line","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"Pee Dee Pregnancy Resource Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Peggy Hartshorn","type":"Individual","notes":null,"proximity":4,"description":""},
    {"id":"Pratt Family Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Pregnancy & Parenting Center - Andrews","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Pregnancy & Parenting Center - Murphy","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Pregnancy Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Pregnancy Care Center Of Ahoskie","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Pregnancy Care Center Of Catawba Valley","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Pregnancy Resource Center Of Statesville","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Pregnancy Resource Center of Charlotte","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Pregnancy Resource Center Of Cleveland County, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Pregnancy Resource Center Of Stanly County","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Pregnancy Support Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Pregnancy Support Services, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"R A Bryan Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Raymond James Charitable Endowment Fund","type":"org","notes":null,"proximity":5,"description":"Raymond James Charitable is a donor-advised fund established in 2000 by Raymond James Financial, Inc."},
    {"id":"Reach Out Crisis Pregnancy Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Reynolds American Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Roberta 'Bobbie' Meyer","type":"Individual","notes":null,"proximity":3,"description":"Roberta “Bobbie” Meyer is the state director of the Carolina Care Pregnancy Fellowship. In May 2018, a month after ReWire News released a report revealing CPCF’s misuse of federal funds, Meyer accused the state of failing to inform CPCF about the federal ban on religious materials until it was added to the group’s contract with the state for receiving the grant for the 2018 budget year. A DHHS employee, Belinda Pettiford, revealed in an email to colleagues that Meyer was “likely correct that program staff may not have reiterated this language to them.”  "},
    {"id":"Rockingham Pregnancy Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Ronnda Patrick","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Rowan County Pregnancy Counseling Center, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Russell Capps","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Salem Pregnancy Care Center","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Santa Maria Council 2829 Lodge Legacy Fund","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Save the Storks","type":"National Org","notes":null,"proximity":5,"description":"Save the Storks is a national anti-choice nonprofit organization. It runs a “Stork Bus” program, through which it partners with local anti-choice groups and individuals to provide “mobile medical clinics” outside of abortion clinics for the purpose of providing ultrasounds. The buses are “owned and operated by local pregnancy centers,” according to its website. Seven CPCs in North Carolina currently operate Save the Storks buses. In 2021, Save the Storks also partnered with Human Coalition to provide mobile clinics for deployment in Raleigh, Dallas and Pittsburgh."},
    {"id":"Schwab Charitable Fund","type":"org","notes":null,"proximity":5,"description":"Schwab Charitable provides donor-advised fund accounts through a an independent 501(c)(3) organization. Schwab Charitable Fund is a separate entity from the Charles Schwab Corporation and its affiliates. However, Charles Schwab & Co., Inc. and its affiliates provide certain investment management, administrative and recordkeeping services to Schwab Charitable."},
    {"id":"Senator Chad Barefoot","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Servant Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Servants for Life","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"Sharon Kelly","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Sherman Charitable Foundation Inc Agency Acct","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Smoky Mountain Pregnancy Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Speedway Childrens Charities","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Stacey Holland","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"State Senator Bill Cook","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Susan B. Anthony List","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"Susan Sturgill","type":"Individual","notes":null,"proximity":2,"description":""},
    {"id":"Tami Fitzgerald","type":"Individual","notes":null,"proximity":3,"description":"Tami Fitzgerald is a nexus of the anti-choice and conservative movement in N.C. She is executive director of the lobbying group North Carolina Values Coalition. She served as State Chairwoman for Susan B. Anthony List and Women's Speak Out PAC. She is an attorney with Alliance Defending Freedom’s national network. She was also a chairwoman of Vote FOR Marriage NC, the official referendum committee that successfully passed the North Carolina Marriage Amendment banning same-sex marriage in 2012; a lobbyist in the North Carolina General Assembly for 17 years on pro-family and business issues; a former board member of a pro-family policy group and Trinity Academy of Raleigh, a Classical Christian School in North Carolina; and a former board member of the Ethics & Religious Liberty Council of the Southern Baptist Convention."},
    {"id":"Teresa Pannell","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"The Ayco Charitable Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"The Bolick Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"The Borden Fund, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"The Center for Women","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"The Epic Center (Eastern Pregnancy Information Clinic)","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"The Lagomarsino Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"The Legacy Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"The Minnie And Bernard Lane Foundation","type":"org","notes":null,"proximity":5,"description":"Established in 1957, the Minnie and Bernard Lane Foundation gives “primarily for a food distribution program” but also supports “Methodist churches and other Christian organizations, social and human services, and international giving, including relief and missionary programs,” according to its FoundationCenter.org profile."},
    {"id":"The Pregnancy Network, Inc.","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"The Pregnancy Network Winston-Salem","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"The Stone Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"The Sylvester Family Foundation, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"TruthGirlz","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"Victoria Miglin","type":"Individual","notes":null,"proximity":3,"description":""},
    {"id":"Vitamin Angel Alliance, Inc.","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Wayne Pregnancy Care Center","type":"CPC","notes":null,"proximity":1,"description":""},
    {"id":"Wilkes Pregnancy Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Winston Salem Foundation","type":"org","notes":null,"proximity":5,"description":""},
    {"id":"Women Speak Out PAC","type":"National Org","notes":null,"proximity":4,"description":"The Women Speak Out PAC is an anti-abortion super-PAC and affiliate of Susan B. Anthony List. Tami Fitzgerald serves as the state director."},
    {"id":"Your Choice Pregnancy Clinic","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Your Choice Resource Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Your Choices Randolph","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Western Carolina Pregnancy Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Life Choice Pregnancy Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Tri-County Family Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"MiraVia","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"U City Women’s Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Lifeline Sampson","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Crisis Pregnancy Center North","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Heartbeat Women’s Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Triad Coalition for Life","type":"Local Org","notes":null,"proximity":2,"description":"Triad Coalition for Life is a Christian, anti-choice nonprofit organization based in Greensboro, North Carolina. It was founded by Bobby Singleton and Tim Rogers. Members partake in 40 Days for Life, a national anti-abortion event, sidewalk protesting and “healing workshops” with people who have received abortions. The group frequently protests outside A Woman’s Choice, Greensboro’s only abortion clinic. In partnership with Save the Storks, the group also operates a mobile crisis pregnancy clinic called Triad Pregnancy Care."},
    {"id":"Ashe Pregnancy Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"McDowell Pregnancy Care Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Creative Choices Pregnancy Resource Center","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Not Forgotten Ministries","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"State of North Carolina","type":"State Org","notes":null,"proximity":3,"description":"The NC General Assembly began funding CPCs in 2013, and has increased funding each budget cycle since then. In November 2021, North Carolina reportedly allocated more than $15 million to CPCs across a two-year period. In June 2022—following the Dobbs decision—the state allocated an additional $3.1 million for CPCs. This budget revision included a recurring $500,000 annual payment and a one-time $1.2 million payment to Carolina Pregnancy Care Fellowship (with an additional $2.5 million payment scheduled for next year) and $6.4 million to Human Coalition. These funds represent more than a tenfold increase from 2017, and were allocated despite recent allegations that these organizations used taxpayer dollars illegally or ineffectively. Some funds allocated to CPCs specify that they are for the purchase of ultrasound equipment, such as the $400,000 in appropriations that would go to the Cabarrus Women’s Center and $255,000 to the Salem Pregnancy Support Center, Inc., for renovations and equipment."},
    {"id":"Right to Life, Inc.","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"North Carolina Pastors Network","type":"State Org","notes":null,"proximity":3,"description":""},
    {"id":"Watchmen on the Wall","type":"State Org","notes":null,"proximity":3,"description":""},
    {"id":"North Carolina Family Policy Council","type":"State Org","notes":null,"proximity":3,"description":""},
    {"id":"Human Coalition","type":"National Org","notes":null,"proximity":4,"description":"Human Coalition is a national anti-abortion Christian nonprofit with offices in Raleigh and Charlotte. It is the largest anti-choice recipient of NC state funding. In November 2021, the state's legislature allocated $6.4 million to Human Coalition to expand a program designed, in part, to “support childbirth as an alternative to abortion.”"},
    {"id":"Human Coalition - Charlotte","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Earn While You Learn Curriculum","type":"National Org","notes":null,"proximity":4,"description":"The Earn While You Learn program is designed to help anti-choice organizations “share Christ” and convince “abortion-minded” people to carry pregnancies to term. This program created many of the religious materials used by Carolina Pregnancy Fellowship. The materials included DVDs intended to help men “discover authentic manhood as modeled by Jesus Christ;” lessons that exhorted women to embrace the “blessing” of marriage as “a sacred institution created by God in the Garden of Eden;” and a DVD in which the narrator falsely claims a fetus can feel pain at 18 weeks."},
    {"id":"Reverend Dean Nelson","type":"Individual","notes":null,"proximity":4,"description":""},
    {"id":"NC Department of Transportation","type":"State Org","notes":null,"proximity":3,"description":"In 2011, prior to the state’s 2013 decision to allocate direct state funding to CPCs, the General Assembly approved the “Choose Life” license plates program to funnel public dollars to CPCs. Through this program, the NC Department of Transportation allocates a portion of the proceeds from the statewide sale of specialized “NC Choose Life” license plates to the Carolina Pregnancy Care Fellowship, which, in turn, allocates these proceeds to participating CPCs. In 2020, 45 participating CPCs received a total of $12,099 from this program."},
    {"id":"NC Department of Health and Human Services","type":"State Org","notes":null,"proximity":3,"description":"The NC Department of Health and Human Services (DHHS) oversees state funding allocated to CPCs. In 2018, DHHS found that Carolina Pregnancy Care Fellowship misspent $50,000 in public funding by purchasing religious materials in violation of federal law. In July 2019, North Carolina lawmakers claimed DHHS failed to alert them to a DHHS report that it could not determine the “effectiveness or cost” of expanding Human Coalition’s anti-choice programming. Senator Mike Woodward (D), a member of the Joint Legislative Oversight Committee on Health and Human Services – the body to which DHHS’ report was addressed – told reporters that he “would have liked to have had the information…before [they] had [their] budget discussion.” Representative Julie von Haefen (D) reportedly stated, “We’re putting more money into a program that we had no oversight over.”"},
    {"id":"North Carolina General Assembly","type":"State Org","notes":null,"proximity":3,"description":"In addition to aiding the anti-choice movement by allocating state and federal funding to CPCs, the North Carolina General Assembly passed a law requiring that CPCs be listed on a North Carolina Department of Health and Human Services referral website, despite the fact that CPCs often not being medically licensed, according to Pro-Choice NC, which did not specify when this law was passed."},
    {"id":"Federal Agencies","type":"National Org","notes":null,"proximity":4,"description":"North Carolina is one of 10 states that used money from the federal Temporary Assistance for Needy Families (TANF) program, known colloquially as “welfare,” to fund crisis pregnancy centers, The Guardian reported in June 2021. The reporting was based on investigative research by the accountability group Equity Forward, which did not specify the amount of money that was allocated. Additionally, in July 2019, Facing South reported that North Carolina has redirected $650,000 to CPCs from federal Maternal and Child Health Services grants, which are supposed to improve the health of low-income women."},
    {"id":"Danny Bracken","type":"Individual","notes":null,"proximity":2,"description":"In June 2022, Danny Bracken, a Triad Coalition for Life member, intentionally drove a car into Kirstin Cassell, a volunteer “clinic escort” for abortion clinic A Woman’s Choice, while she was escorting an individual into the clinic. Bracken returned to the clinic to protest after the attack. Triad Coalition founders Bobby Singleton and Tim Rogers reportedly supported Bracken by attending his first court hearing following the attack. In June 2022, Bracken was charged with assault with a deadly weapon in Guilford County.  In September 2022, at Cassell’s request, the court added an obstruction of a healthcare facility charge (pursuant to the Freedom of Access to Clinic Entrances Act). Ultimately, Bracken was convicted of a lesser charge, simple assault, later that month."},
    {"id":"Dan Forest","type":"Individual","notes":null,"proximity":3,"description":"Dan Forest served as the 34th lieutenant governor of North Carolina from 2013 to 2021 and is vocally anti-choice. In 2016, he received the Religious Freedom Award from NC Values Coalition."},
    {"id":"Scott Gaylord","type":"Individual","notes":null,"proximity":3,"description":"Scott Gaylord, an Elon University professor and member of the Federalist Society, is one of 4,600 attorneys in the Alliance Defending Freedom network. He is a prominent speaker and writer in the anti-choice world. He serves as counsel representing David Benham, Cities4Life and Global Impact Ministries against the city of Charlotte."},
    {"id":"Tina Marshall","type":"Individual","notes":null,"proximity":2,"description":"Tina Marshall is the founder the Black Abortion Defense League and an abortion clinic escort in North Carolina. She has recently stated that there has been an escalation in aggressive anti-abortion activity following the Dobbs decision, telling Bustle that she has seen anti-abortion protesters show up to abortion clinics “with knives strapped to them, with guns in their cars. They seem a lot more emboldened.”"},
    {"id":"Calla Hales","type":"Individual","notes":null,"proximity":2,"description":"Calla Hales is the director of A Preferred Women’s Health Clinic (“APWHC”) in Charlotte, North Carolina, reportedly one of the busiest abortion clinics in the state. The clinic is the site of large, weekly anti-abortion protests, orchestrated by Flip Benham and his son’s anti-abortion group Love Life. Hales was on the phone with her father while she watched news coverage of the events of January 6. “On the phone, my dad made a joke about how I’d probably see [Benham] at the Capitol and it wasn’t long after that I actually saw faces I recognized,” Hales told Prism in a phone interview. “It’s scary and it shakes you, but it’s also frustrating. Many abortion providers, clinic workers, advocates, and activists have said that anti-choice protestors are capable of terrorism and their movements are a breeding ground for racism and violence.”"},
    {"id":"Sharon Dooley","type":"Individual","notes":null,"proximity":2,"description":"Sharon Dooly is an anti-choice activist who is an “incredibly pervasive and an abusive presence” at a local North Carolina abortion clinic, according to according to Kelsea McLain, a coordinator for the North Carolina clinic escort group Triangle Abortion Access Coalition. McLain told TruthOut that Dooly “uses being a white, conservative woman almost as armor. She escapes accountability and no one listens to us when we say that she is truly abusive and violent.” Dooley, who is an avid believer in the QAnon conspiracy theory, falsely accused a volunteer of assault and has doxxed clinic escorts — including McLain. Dooley is reportedly so committed to harassing patients outside of the North Carolina clinic that after going to Washington, D.C. to support Trump on Jan. 6, she returned to harassing patients outside of the abortion clinic Jan. 7."},
    {"id":"Triangle Abortion Access Coalition","type":"State Org","notes":null,"proximity":3,"description":""},
    {"id":"Sidewalk Advocates for Life","type":"National Org","notes":null,"proximity":4,"description":"Sidewalk Advocates for Life (“SAFL”) is a national organization training people to do targeted anti-abortion advocacy outside of abortion clinics. It has in eight branches in North Carolina cities. The “program leaders” of at least five of these branches hold executive positions at three North Carolina CPCs. One of them, Bobby Singleton, is program leader of SAFL’s branches in eastern Winston-Salem, western Winston-Salem and Greensboro (see "},
    {"id":"Tonya Baker-Nelson","type":"Individual","notes":null,"proximity":2,"description":"Tonya Baker-Nelson is CEO of Hand of Hope and a program leader at Sidewalk Advocates for Life - Raleigh."},
    {"id":"Christine Moody","type":"Individual","notes":null,"proximity":2,"description":"Christine Moody is executive director of Coastal Pregnancy Care Center and a program leader at Sidewalk Advocates for Life - Crystal Coast."},
    {"id":"SAFL - Raleigh","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"SAFL - Charlotte","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"SAFL - Asheville","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"SAFL - Crystal Coast","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"SAFL - Fayetteville","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"SAFL - Greensboro","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"SAFL - Winston-Salem (East)","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"SAFL - Winston-Salem (West)","type":"Local Org","notes":null,"proximity":2,"description":""},
    {"id":"40 Days for Life","type":"National Org","notes":null,"proximity":4,"description":""},
    {"id":"Pregnancy Care Center of Burke County","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Lauren Muzyka","type":"Individual","notes":null,"proximity":2,"description":"Lauren Muzyka is the founder and CEO of Sidewalk Advocates for Life. "},
    {"id":"Tim Rogers","type":"Individual","notes":null,"proximity":2,"description":"Tim Rogers is a co-founder and operations director at Triad Coalition for Life."},
    {"id":"Triad Pregnancy Care","type":"CPC","notes":null,"proximity":0,"description":""},
    {"id":"Rep. Ted Budd","type":"Individual","notes":null,"proximity":3,"description":"In July 2022, N.C. Congressman Ted Budd co-signed a letter to the North Carolina Attorney General urging him to “protect Pregnancy Crisis Centers” and prosecute the “attackers” who had allegedly vandalized Asheville-based CPC Mountain Area Pregnancy Services earlier that summer."},
    {"id":"U.S. Senator Thom Tillis","type":"Individual","notes":null,"proximity":3,"description":"In July 2022, Senator Thom Tillis co-signed a letter to the North Carolina Attorney General urging him to “protect Pregnancy Crisis Centers” and prosecute the “attackers” who had allegedly vandalized Asheville-based CPC Mountain Area Pregnancy Services earlier that summer."},
    {"id":"Rep. Richard Hudson","type":"Individual","notes":null,"proximity":3,"description":"In July 2022, N.C. Congressman Richard Hudson co-signed a letter to the North Carolina Attorney General urging him to “protect Pregnancy Crisis Centers” and prosecute the “attackers” who had allegedly vandalized Asheville-based CPC Mountain Area Pregnancy Services earlier that summer."},
    {"id":"Rep. Dan Bishop","type":"Individual","notes":null,"proximity":3,"description":"In July 2022, N.C. Congressman Dan Bishop co-signed a letter to the North Carolina Attorney General urging him to “protect Pregnancy Crisis Centers” and prosecute the “attackers” who had allegedly vandalized Asheville-based CPC Mountain Area Pregnancy Services earlier that summer."},
    {"id":"Rep. Gregory Murphy","type":"Individual","notes":null,"proximity":3,"description":"In July 2022, N.C. Congressman Gregory Murphy co-signed a letter to the North Carolina Attorney General urging him to “protect Pregnancy Crisis Centers” and prosecute the “attackers” who had allegedly vandalized Asheville-based CPC Mountain Area Pregnancy Services earlier that summer."}],
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
    {"source":"Heartbeat International, Inc.","target":"A Heart's Cry","description":"Affiliate","amount":null},
    {"source":"Heartbeat International, Inc.","target":"1st Choice Pregnancy Resources of Pamlico","description":"Affiliate","amount":null},
    {"source":"Heartbeat International, Inc.","target":"AAA Crisis Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Abiding Hope, Inc.","description":"Affiliate","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Abundant Exchange Services, Inc.","description":"Affiliate","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Agape Pregnancy Support Services","description":"Affiliate","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Albemarle Crisis Pregnancy Center","description":"Affiliate","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Agape Pregnancy Support Services","description":"Affiliate","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Alleghany Pregnancy Care Center","description":"Affiliate","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Alpha Pregnancy Support, Inc.","description":"Affiliate","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Abortion Pill Rescue Network","description":"Subsidiary","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Peggy Hartshorn","description":"Board Chair","amount":null},
    {"source":"Abortion Pill Rescue Network","target":"George Delgado, M.D.","description":"Medical Advisor","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Charles A. Donovan","description":"Director","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Care Net","description":"Partners","amount":null},
    {"source":"Care Net","target":"Option Line","description":"Joint Venture","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Option Line","description":"Joint Venture","amount":null},
    {"source":"Coastal Pregnancy Care Center, Inc.","target":"State Senator Bill Cook","description":"Supporter","amount":null},
    {"source":"Servants for Life","target":"Amy Jones","description":"Director","amount":null},
    {"source":"Rowan County Pregnancy Counseling Center, Inc.","target":"Mary Fainn","description":"Director","amount":null},
    {"source":"Caldwell Pregnancy Care Center","target":"Machelle Kirby","description":"Director","amount":null},
    {"source":"Lifeline Pregnancy Help Center","target":"Sharon Kelly","description":"Director","amount":null},
    {"source":"North Carolina Right to Life, Inc.","target":"Barbara Holt","description":"Former President","amount":null},
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
    {"source":"Heartbeat International, Inc.","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"Care Net","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"National Institute of Family Life Advocate","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":null},
    {"source":"NC Values Coalition","target":"Laura Macklem","description":"Press and Political Director","amount":null},
    {"source":"Women Speak Out PAC","target":"Tami Fitzgerald","description":"","amount":null},
    {"source":"Tami Fitzgerald","target":"Ethics & Religious Liberty Council of the Southern Baptist Convention","description":"Former Director","amount":null},
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
    {"source":"Carolina Pregnancy Care Fellowship","target":"The Epic Center (Eastern Pregnancy Information Clinic)","description":"","amount":6941},
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
    {"source":"Carolina Pregnancy Care Fellowship","target":"Crisis Pregnancy Center North","description":"Affiliate","amount":null},
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
    {"source":"Carolina Pregnancy Care Fellowship","target":"Your Choice Pregnancy Clinic","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Your Choice Resource Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"A Hand Of Hope Pregnancy Resource Center","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Christian Life Home","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Gate Pregnancy Resource Center","description":"Affiliate","amount":null},
    {"source":"State of North Carolina","target":"Carolina Pregnancy Care Fellowship","description":"Affiliate","amount":4200000},
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
    {"source":"Charles A. Sullivan Foundation","target":"Life Care Pregnancy Center, Inc.","description":"","amount":20000},
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
    {"source":"The Sylvester Family Foundation, Inc.","target":"Onslow Pregnancy Resource Center","description":"","amount":5000},
    {"source":"Vitamin Angel Alliance, Inc.","target":"Life Line Pregnancy Center","description":"","amount":15479},
    {"source":"Winston Salem Foundation","target":"Salem Pregnancy Care Center","description":"","amount":37200},
    {"source":"Love Life Charlotte","target":"Concerned Women for America","description":"Partners","amount":null},
    {"source":"NC Values Coalition","target":"Concerned Women for America","description":"Partners","amount":null},
    {"source":"Right to Life, Inc.","target":"North Carolina Right to Life, Inc.","description":"Partners","amount":null},
    {"source":"Love Life Charlotte","target":"Justin Reeder","description":"Founder","amount":null},
    {"source":"Flip Benham","target":"Benham Brothers","description":"Family","amount":null},
    {"source":"Justin Reeder","target":"Benham Brothers","description":"Friends","amount":null},
    {"source":"Justin Reeder","target":"Flip Benham","description":"Friends","amount":null},
    {"source":"Love Life Charlotte","target":"Flip Benham","description":"Partners","amount":null},
    {"source":"Love Life Charlotte","target":"Benham Brothers","description":"Partners","amount":null},
    {"source":"Cities4Life","target":"Benham Brothers","description":"Principals","amount":null},
    {"source":"Cities4Life","target":"Love Life Charlotte","description":"Partners","amount":null},
    {"source":"American Family Association","target":"Christian Action League","description":"Affiliate","amount":null},
    {"source":"NC Values Coalition","target":"Love Life Charlotte","description":"Partners","amount":null},
    {"source":"North Carolina Pastors Network","target":"Christian Action League","description":"Partners","amount":null},
    {"source":"North Carolina Pastors Network","target":"NC Values Coalition","description":"Partners","amount":null},
    {"source":"North Carolina Pastors Network","target":"Watchmen on the Wall","description":"Partners","amount":null},
    {"source":"North Carolina Pastors Network","target":"North Carolina Family Policy Council","description":"Partners","amount":null},
    {"source":"North Carolina Pastors Network","target":"Mark Creech","description":"Speaker","amount":null},
    {"source":"North Carolina Pastors Network","target":"Tami Fitzgerald","description":"Speaker","amount":null},
    {"source":"Human Coalition","target":"Curo Women's Clinic - Raleigh","description":"Affiliate","amount":null},
    {"source":"Human Coalition","target":"Tami Fitzgerald","description":"Supporter","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Human Coalition","description":"Donor","amount":null},
    {"source":"Human Coalition","target":"Human Coalition - Charlotte","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Curo Women's Clinic - Raleigh","description":"Partners","amount":null},
    {"source":"Family Research Council","target":"Christian Action League","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"Earn While You Learn Curriculum","description":"Purchase","amount":null},
    {"source":"Heartbeat International, Inc.","target":"Earn While You Learn Curriculum","description":"Purchase","amount":null},
    {"source":"Care Net","target":"Earn While You Learn Curriculum","description":"Purchase","amount":null},
    {"source":"National Institute of Family Life Advocate","target":"Human Coalition","description":"Partners","amount":null},
    {"source":"Human Coalition","target":"Save the Storks","description":"Partners","amount":null},
    {"source":"Human Coalition","target":"Alliance Defending Freedom","description":"Partners","amount":null},
    {"source":"State of North Carolina","target":"Human Coalition","description":"","amount": 6400000 },
    {"source":"Human Coalition","target":"Reverend Dean Nelson","description":"Vice President of Government Relations and Executive Director","amount":null},
    {"source":"Care Net","target":"Reverend Dean Nelson","description":"Former Vice President of Underserved Outreach","amount":null},
    {"source":"Family Research Council","target":"Reverend Dean Nelson","description":"Affiliate","amount":null},
    {"source":"Americans United for Life","target":"Susan B. Anthony List","description":"Collaborators","amount":null},
    {"source":"Ethics & Religious Liberty Council of the Southern Baptist Convention","target":"Susan B. Anthony List","description":"Collaborators","amount":null},
    {"source":"Concerned Women for America","target":"Susan B. Anthony List","description":"Collaborators","amount":null},
    {"source":"Americans United for Life","target":"NC Values Coalition","description":"Collaborators","amount":null},
    {"source":"Operation Save America","target":"Flip Benham","description":"Affiliate","amount":null},
    {"source":"Carolina Pregnancy Care Fellowship","target":"In His Hands Life Ministry","description":"","amount":11478},
    {"source":"1st Choice Pregnancy Resources of Pamlico","target":"Havelock Pregnancy Resource Center","description":"Collaborators","amount":null},
    {"source":"State of North Carolina","target":"Mountain Area Pregnancy Services","description":"","amount":550000},
    {"source":"State of North Carolina","target":"Davie Pregnancy Care Center","description":"`","amount":260000},
    {"source":"State of North Carolina","target":"Heartbeats Women's Center","description":"","amount":325000},
    {"source":"State of North Carolina","target":"Open Arms Crisis Pregnancy Center","description":"","amount":500000},
    {"source":"State of North Carolina","target":"Salem Pregnancy Care Center","description":"","amount":100000},
    {"source":"State of North Carolina","target":"H.E.L.P. Crisis Pregnancy Center","description":"","amount":150000},
    {"source":"State of North Carolina","target":"Cabarrus Women's Center, Inc.","description":"","amount":250000},
    {"source":"State of North Carolina","target":"Coastal Pregnancy Care Center, Inc.","description":"","amount":250000},
    {"source":"State of North Carolina","target":"Havelock Pregnancy Resource Center","description":"","amount":250000},
    {"source":"State of North Carolina","target":"The Epic Center (Eastern Pregnancy Information Clinic)","description":"","amount":250000},
    {"source":"State of North Carolina","target":"1st Choice Pregnancy Resources of Pamlico","description":"","amount":250000},
    {"source":"Wilkes Pregnancy Care Center","target":"Susan Sturgill","description":"","amount":null},
    {"source":"NC Department of Transportation","target":"Carolina Pregnancy Care Fellowship","description":"","amount":12099},
    {"source":"State of North Carolina","target":"NC Department of Transportation","description":"","amount":null},
    {"source":"NC Department of Health and Human Services","target":"Carolina Pregnancy Care Fellowship","description":"","amount":null},
    {"source":"State of North Carolina","target":"NC Department of Health and Human Services","description":"","amount":null},
    {"source":"North Carolina General Assembly","target":"NC Department of Health and Human Services","description":"","amount":null},
    {"source":"NC Department of Health and Human Services","target":"Human Coalition","description":"","amount":null},
    {"source":"NC Department of Health and Human Services","target":"Carolina Pregnancy Care Fellowship","description":"","amount":null},
    {"source":"State of North Carolina","target":"North Carolina General Assembly","description":"","amount":null},
    {"source":"Federal Agencies","target":"State of North Carolina","description":"","amount":null},
    {"source":"Triad Coalition for Life","target":"Danny Bracken","description":"","amount":null},
    {"source":"Calla Hales","target":"Flip Benham","description":"","amount":null},
    {"source":"Calla Hales","target":"Love Life Charlotte","description":"","amount":null},
    {"source":"Sharon Dooley","target":"Triangle Abortion Access Coalition","description":"","amount":null},
    {"source":"State of North Carolina","target":"Dan Forest","description":"","amount":null},
    {"source":"Dan Forest","target":"NC Values Coalition","description":"","amount":null},
    {"source":"NC Department of Health and Human Services","target":"Mountain Area Pregnancy Services","description":"","amount":null},
    {"source":"Triad Coalition for Life","target":"Tim Rogers","description":"","amount":null},
    {"source":"Triad Coalition for Life","target":"Bobby Singleton","description":"","amount":null},
    {"source":"H.E.L.P. Crisis Pregnancy Center","target":"Cities4Life","description":"","amount":null},
    {"source":"Alliance Defending Freedom","target":"Benham Brothers","description":"","amount":null},
    {"source":"Alliance Defending Freedom","target":"Love Life Charlotte","description":"","amount":null},
    {"source":"Alliance Defending Freedom","target":"Cities4Life","description":"","amount":null},
    {"source":"Alliance Defending Freedom","target":"Scott Gaylord","description":"","amount":null},
    {"source":"Cities4Life","target":"Scott Gaylord","description":"","amount":null},
    {"source":"Scott Gaylord","target":"Benham Brothers","description":"","amount":null},
    {"source":"Love Life Charlotte","target":"Scott Gaylord","description":"","amount":null},
    {"source":"Save the Storks","target":"Sidewalk Advocates for Life","description":"","amount":null},
    {"source":"Sidewalk Advocates for Life","target":"SAFL - Raleigh","description":"","amount":null},
    {"source":"Sidewalk Advocates for Life","target":"SAFL - Charlotte","description":"","amount":null},
    {"source":"Sidewalk Advocates for Life","target":"SAFL - Asheville","description":"","amount":null},
    {"source":"Sidewalk Advocates for Life","target":"SAFL - Crystal Coast","description":"","amount":null},
    {"source":"Sidewalk Advocates for Life","target":"SAFL - Fayetteville","description":"","amount":null},
    {"source":"Sidewalk Advocates for Life","target":"SAFL - Greensboro","description":"","amount":null},
    {"source":"Sidewalk Advocates for Life","target":"SAFL - Winston-Salem (East)","description":"","amount":null},
    {"source":"Sidewalk Advocates for Life","target":"SAFL - Winston-Salem (West)","description":"","amount":null},
    {"source":"Sidewalk Advocates for Life","target":"Lauren Muzyka","description":"","amount":null},
    {"source":"Lauren Muzyka","target":"Heartbeat International, Inc.","description":"","amount":null},
    {"source":"Coastal Pregnancy Care Center, Inc.","target":"Christine Moody","description":"","amount":null},
    {"source":"Bobby Singleton","target":"SAFL - Winston-Salem (East)","description":"","amount":null},
    {"source":"Bobby Singleton","target":"SAFL - Winston-Salem (West)","description":"","amount":null},
    {"source":"Bobby Singleton","target":"SAFL - Greensboro","description":"","amount":null},
    {"source":"Christine Moody","target":"SAFL - Crystal Coast","description":"","amount":null},
    {"source":"A Hand Of Hope Pregnancy Resource Center","target":"Tonya Baker-Nelson","description":"","amount":null},
    {"source":"Tonya Baker-Nelson","target":"SAFL - Raleigh","description":"","amount":null},
    {"source":"40 Days for Life","target":"Sidewalk Advocates for Life","description":"","amount":null},
    {"source":"40 Days for Life","target":"Bobby Singleton","description":"","amount":null},
    {"source":"Save the Storks","target":"Triad Pregnancy Care","description":"","amount":null},
    {"source":"Save the Storks","target":"Heartbeats Women's Center","description":"","amount":null},
    {"source":"Save the Storks","target":"Compassion Care Center","description":"","amount":null},
    {"source":"Save the Storks","target":"Pregnancy Care Center of Burke County","description":"","amount":null},
    {"source":"Save the Storks","target":"Albemarle Pregnancy Resource Center & Clinic","description":"","amount":null},
    {"source":"Save the Storks","target":"Coastal Pregnancy Care Center, Inc.","description":"","amount":null},
    {"source":"Save the Storks","target":"Your Choice Resource Center","description":"","amount":null},
    {"source":"Save the Storks","target":"Compassion Care Center","description":"","amount":null},
    {"source":"North Carolina General Assembly","target":"Senator Chad Barefoot","description":"","amount":null},
    {"source":"North Carolina General Assembly","target":"State Senator Bill Cook","description":"","amount":null},
    {"source":"Triad Coalition for Life","target":"Triad Pregnancy Care","description":"","amount":null},
    {"source":"Bobby Singleton","target":"Triad Pregnancy Care","description":"","amount":null},
    {"source":"Tim Rogers","target":"Triad Pregnancy Care","description":"","amount":null},
    {"source":"Rep. Ted Budd","target":"Mountain Area Pregnancy Services","description":"","amount":null},
    {"source":"U.S. Senator Thom Tillis","target":"Mountain Area Pregnancy Services","description":"","amount":null},
    {"source":"Rep. Richard Hudson","target":"Mountain Area Pregnancy Services","description":"","amount":null},
    {"source":"Rep. Dan Bishop","target":"Mountain Area Pregnancy Services","description":"","amount":null},
    {"source":"Rep. Gregory Murphy","target":"Mountain Area Pregnancy Services","description":"","amount":null}]
};

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
  .text("Mapping N.C.’s Anti-Choice Landscape");

// Map graph.nodes to a 
// set the nodes
var nodes = graph.nodes;
// links between nodes
var links = graph.links;

var lineScale = d3.scaleLinear()
    .domain(d3.extent(links, d => d.amount))
    .range([1,12]);

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
.attr("stroke-width", function(d){
    return lineScale(d.amount);
})
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

var legend = svg
.append('g')
.attr('class', 'legend')
.attr('transform', 'translate(300, -240)');
// Legend box
svg.select('.legend')
    .append("rect")
    .attr('width', 123)
    .attr('height', 150)
    .attr('stroke', '#666')
    .attr('stroke-width', 1)
    .style('fill','#FCF3C8')
    .style('fill-opacity', .6);


// Individual
svg.select('.legend')
    .append('circle')
    .attr('cx', 20)
    .attr('cy', 39)
    .attr('r', 5)
    .style('fill', '#0076ba');

// Organization
svg.select('.legend')
    .append('rect')
    .attr('width', 12)
    .attr('height', 12)
    .attr('x', 13)
    .attr('y', 50)
    .style('fill', '#929292');

// Local Organization
svg.select('.legend')
    .append('rect')
    .attr('width', 12)
    .attr('height', 12)
    .attr('x', 13)
    .attr('y', 70)
    .style('fill', '#006c65');

// State Organization
svg.select('.legend')
    .append('rect')
    .attr('width', 12)
    .attr('height', 12)
    .attr('x', 13)
    .attr('y', 90)
    .style('fill', '#f27200');

// National Organization
svg.select('.legend')
    .append('rect')
    .attr('width', 12)
    .attr('height', 12)
    .attr('x', 13)
    .attr('y', 110)
    .style('fill', '#ff42a1');

// CPC
svg.select('.legend')
.append('path')
.attr('d', d3.symbol(d3.symbolTriangle))
.style('fill', '#B51800')
.attr('transform', 'translate(19,137)');



svg.select('.legend')
    .append('text')
    .attr('class', 'legendtext')
    .attr('x', 30)
    .attr('y', 22)
    .text('LEGEND');
svg.select('.legend')
    .append('text')
    .attr('class', 'legendtext')
    .attr('x', 30)
    .attr('y', 42)
    .text('Individual');
svg.select('.legend')
    .append('text')
    .attr('class', 'legendtext')
    .attr('x', 30)
    .attr('y', 60)
    .text('Funder');
svg.select('.legend')
    .append('text')
    .attr('class', 'legendtext')
    .attr('x', 30)
    .attr('y', 80)
    .text('Local Organization');
svg.select('.legend')
    .append('text')
    .attr('class', 'legendtext')
    .attr('x', 30)
    .attr('y', 100)
    .text('State Organization');
svg.select('.legend')
    .append('text')
    .attr('class', 'legendtext')
    .attr('x', 30)
    .attr('y', 120)
    .text('National Organization');
svg.select('.legend')
    .append('text')
    .attr('class', 'legendtext')
    .attr('x', 30)
    .attr('y', 140)
    .text('CPC');

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
    return "<b>"+ d.id + "</b><br/>"+ d.description ;
})
.attr("class", "tt")
.attr("stroke-width", 2);

node.on("click", showLinks(.1));
node.on("dblclick", resetLinks);

// SIMULATION
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

// Draw Labels
var labels = node.append("text")
    .text(function(d) {
    return d.id;
    })
    .attr('class', 'label')
    .attr('x', 10)
    .attr('y', 3)
    .attr("opacity", .3);

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
            thisOpacity = isConnected(i, o) ? 1 : opacity;
            return thisOpacity;
        })
        // also style link accordingly
        link.style("opacity", function(o) {
            return o.source === i || o.target === i ? 1 : opacity;
        });

    };
}
function resetLinks() {
    node.style("stroke-opacity", 1);
    node.style("fill-opacity", 1);
    link.style("opacity", 1);
    initZoom();
}

function reset() {
    resetLinks();
    initZoom();
}
tippy('[data-tippy-content]', {
    allowHTML: true,
    hideOnClick: 'false',
    trigger: 'mouseenter',
    offset: [0, -25]
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
};


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