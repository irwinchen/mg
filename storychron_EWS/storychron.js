const svg = d3.select("svg");
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const data = [{"id":"PL1_jan2018","start":"01/2018","end":"null","excerpt":"In January 2018, Searles and his wife, Jamie Mapstead Searles, filed a petition against the Commissioner of Internal Revenue in U.S. Tax Court regarding a paid tax fee, according to court docket (Attachment 3).","label":"Filed Tax Court Case with Wife","section":"Personal Litigation","parent":"PL1","type":"event"},
{"id":"PL1_feb2019","start":"02/2019","end":"null","excerpt":"The parties settled the matter in February 2019, and the case was closed.","label":"Filed Tax Court Case with Wife","section":"Personal Litigation","parent":"PL1","type":"event"},
{"id":"PL2_mar2008","start":"03/2008","end":"null","excerpt":"In March 2008, Ay Lee Lai sued Searles in a small claims lawsuit for $2,851 in Santa Clara County Superior Court, according to court records (Attachment 4).","label":"Defendant","section":"Personal Litigation","parent":"PL2","type":"event"},
{"id":"PL3_oct2005","start":"10/2005","end":"null","excerpt":"In October 2005, Searles filed for divorce from Anne Searles and sought custody of their children in Contra Costa Superior Court, according to court records (Attachment 5).","label":"Divorce","section":"Personal Litigation","parent":"PL3","type":"event"},
{"id":"PL3_mar2008","start":"03/2008","end":"null","excerpt":"In March 2008, the court entered a final judgment for dissolution of marriage.","label":"Divorce","section":"Personal Litigation","parent":"PL3","type":"event"},
{"id":"PL3_apr2018","start":"04/2018","end":"null","excerpt":"Most recently, in April 2018, the court denied Searles’ motion to modify child and spousal support.","label":"Divorce","section":"Personal Litigation","parent":"PL3","type":"event"},
{"id":"PL3_mar2021","start":"03/2021","end":"null","excerpt":"The case was last updated in March 2021, when Anne Searles filed to change her address.","label":"Divorce","section":"Personal Litigation","parent":"PL3","type":"event"},
{"id":"ProLit1_mar2009","start":"03/2009","end":"null","excerpt":"As mentioned above, Searles founded Sprockets Clothing Inc. in March 2009, which was engaged in clothing retail and changed its named to SCI Apparel Ltd. in November 2011.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit1","type":"event"},
{"id":"ProLit1_nov2011","start":"11/2011","end":"null","excerpt":"As mentioned above, Searles founded Sprockets Clothing Inc. in March 2009, which was engaged in clothing retail and changed its named to SCI Apparel Ltd. in November 2011.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit1","type":"event"},
{"id":"ProLit1_jan2012","start":"01/2012","end":"null","excerpt":"Beginning in 2012, roughly three years after he formed the entity, and after he had left the business to join Oakley in a senior retail position, he was sued by former investors who obtained a total of $3.09 million in judgments against Searles.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit1","type":"event"},
{"id":"ProLit1_feb2015","start":"02/2015","end":"null","excerpt":"In February 2015, he filed for personal bankruptcy protection and listed $4.5 million in liabilities related to personally guaranteed business loans.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit1","type":"event"},
{"id":"ProLit1_sep2015","start":"09/2015","end":"null","excerpt":"His personal bankruptcy was discharged in September 2015.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit1","type":"event"},
{"id":"ProLit1_dec2019","start":"12/2019","end":"null","excerpt":"The judgments were satisfied in December 2019.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit1","type":"event"},
{"id":"ProLit2_apr2012","start":"04/2012","end":"null","excerpt":"In April 2012 and February 2013, SCI Apparel investors Afou Shadafni, Sharon Ajlouni and Karen Ajlouni sued SCI Apparel Ltd., Searles and Derar Hawari (aka Alex Hawari), in two business tort and unfair competition lawsuits filed in state court in Santa Clara County, California, according to court dockets (Attachment 6).","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit2","type":"event"},
{"id":"ProLit2_feb2013","start":"02/2013","end":"null","excerpt":"In April 2012 and February 2013, SCI Apparel investors Afou Shadafni, Sharon Ajlouni and Karen Ajlouni sued SCI Apparel Ltd., Searles and Derar Hawari (aka Alex Hawari), in two business tort and unfair competition lawsuits filed in state court in Santa Clara County, California, according to court dockets (Attachment 6).","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit2","type":"event"},
{"id":"ProLit2_sep2013","start":"09/2013","end":"null","excerpt":"In September 2013, the parties settled both matters, with the court entering $305,000 in judgments against the defendants, according to the docket.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit2","type":"event"},
{"id":"ProLit2_jan2015","start":"01/2015","end":"null","excerpt":"While the required installment payments were made initially, later they stopped, resulting the court entering a stipulated judgment against defendants in January 2015 (Searles filed for bankruptcy in February 2015 and plaintiffs were listed as creditors) according to a January 2019 court order.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit2","type":"event"},
{"id":"ProLit2_feb2015","start":"02/2015","end":"null","excerpt":"While the required installment payments were made initially, later they stopped, resulting the court entering a stipulated judgment against defendants in January 2015 (Searles filed for bankruptcy in February 2015 and plaintiffs were listed as creditors) according to a January 2019 court order.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit2","type":"event"},
{"id":"ProLit2_dec2016","start":"12/2016","end":"null","excerpt":"In December 2016, defendant Hawari filed a malpractice lawsuit against his former attorneys, which was settled with the attorneys paying Hawari $55,000.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit2","type":"event"},
{"id":"ProLit2_apr2018","start":"04/2018","end":"null","excerpt":"In April 2018, plaintiffs filed a motion to compel the distribution of the malpractice award, which the court granted in January 2019.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit2","type":"event"},
{"id":"ProLit2_jan2019","start":"01/2019","end":"null","excerpt":"In April 2018, plaintiffs filed a motion to compel the distribution of the malpractice award, which the court granted in January 2019.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit2","type":"event"},
{"id":"ProLit2_dec2019","start":"12/2019","end":"null","excerpt":"The judgments were satisfied in December 2019.","label":"Sued over Debts","section":"Professional Litigation","parent":"ProLit2","type":"event"},
{"id":"ProLit3_may2012","start":"05/2012","end":"null","excerpt":"In May 2012, Hartsko Financial Funding LLC (“Hartsko Financial”), which had provided a loan to Sprockets Clothing Inc., sued Searles, Hawari and Mark Cardinale alleging breach of personal guarantee in state court in Orange County, California, according to the docket (Attachment 7).","label":"Breach","section":"Professional Litigation","parent":"ProLit3","type":"event"},
{"id":"ProLit3_dec2014","start":"12/2014","end":"null","excerpt":"In December 2014, the court entered a $2.79 million judgment against defendants (Attachment 8).","label":"Breach","section":"Professional Litigation","parent":"ProLit3","type":"event"},
{"id":"ProLit3_feb2015","start":"10/2015","end":"null","excerpt":"In February 2015, Hartsko Financial filed an order of examination in Santa Clara County Superior Court against Searles, Cardinale and Hawari, in order to collect the debts, according to the docket (Attachment 9).","label":"Breach","section":"Professional Litigation","parent":"ProLit3","type":"event"},
{"id":"ProLit3_jun2016","start":"03/2016","end":"null","excerpt":"The judgment was satisfied in June 2016, following Searles’ personal bankruptcy filing, according to the docket (Attachment 10).","label":"Breach","section":"Professional Litigation","parent":"ProLit3","type":"event"},
{"id":"ProLit4_feb2015","start":"02/2015","end":"null","excerpt":"In February 2015, Searles filed a petition for a Chapter 7 personal bankruptcy protection in the California, according to the bankruptcy petition (Attachment 11).","label":"Bankruptcy","section":"Professional Litigation","parent":"ProLit4","type":"event"},
{"id":"ProLit4_may2015","start":"05/2015","end":"null","excerpt":"In May 2015, Shadafni and the Ajlounis filed an adversary proceeding against Searles, according to court records (Attachment 12).","label":"Bankruptcy","section":"Professional Litigation","parent":"ProLit4","type":"event"},
{"id":"ProLit4_sep2015","start":"09/2015","end":"null","excerpt":"In September 2015, Searles was discharged from bankruptcy, and the case was closed, according to the docket.","label":"Bankruptcy","section":"Professional Litigation","parent":"ProLit4","type":"event"},
{"id":"ProLit4_may2016","start":"05/2016","end":"null","excerpt":"In May 2016, the adversarial proceeding was settled and dismissed, according to a discharge of debtor record (Attachment 13).","label":"Bankruptcy","section":"Professional Litigation","parent":"ProLit4","type":"event"},
{"id":"DH_aug2019","start":"08/2019","end":"null","excerpt":"According to Searles’ California driving record, he has a valid driver’s license that was last issued in August 2019 and expires in September 2024.","label":"Driving","section":"Driving History","parent":"DH","type":"event"},
{"id":"DH_feb2020","start":"02/2020","end":"null","excerpt":"Searles was cited for speeding in February 2020 in Chesterfield County, Virginia, according to his driving record and court records.","label":"Driving","section":"Driving History","parent":"DH","type":"event"},
{"id":"DH_jun2020","start":"06/2020","end":"null","excerpt":"He paid a fine of $164 in June 2020 and the matter was dismissed.","label":"Driving","section":"Driving History","parent":"DH","type":"event"},
{"id":"P1_apr2011","start":"04/2011","end":"null","excerpt":"In April 2011, in Oakley announced that it had launched a store in Times Square in New York.","label":"Commented on Oakley","section":"Press","parent":"P1","type":"event"},
{"id":"P2_jan2009","start":"01/2009","end":"null","excerpt":"As noted above, in January 2009, Searles, his former Mervyn’s colleague Mark Cardinale and two other business partners purchased the children’s clothing brand Sprockets, from Mervyn’s in 2008 and relaunched Sprockets as a standalone brand in April 2009, according to a January 2011 Retail Info Systems article (Attachment 15).","label":"Commented on Sprockets","section":"Press","parent":"P2","type":"event"},
{"id":"P2_apr2009","start":"04/2009","end":"null","excerpt":"As noted above, in January 2009, Searles, his former Mervyn’s colleague Mark Cardinale and two other business partners purchased the children’s clothing brand Sprockets, from Mervyn’s in 2008 and relaunched Sprockets as a standalone brand in April 2009, according to a January 2011 Retail Info Systems article (Attachment 15).","label":"Commented on Sprockets","section":"Press","parent":"P2","type":"event"},
{"id":"p2_jan2011","start":"01/2011","end":"null","excerpt":"As noted above, in January 2009, Searles, his former Mervyn’s colleague Mark Cardinale and two other business partners purchased the children’s clothing brand Sprockets, from Mervyn’s in 2008 and relaunched Sprockets as a standalone brand in April 2009, according to a January 2011 Retail Info Systems article (Attachment 15).","label":"Commented on Sprockets","section":"Press","parent":"P2","type":"event"},

];

// Assign tooltip classes to ids so bootstrap can register them as tooltips, using the title attribute for the content
data.forEach((element) => {
    d3.select("#"+element.id)
    .attr("data-bs-toggle", "tooltip")
    .attr("title", element.excerpt)
    .attr("class", "tt");
})