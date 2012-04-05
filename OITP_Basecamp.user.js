// ==UserScript==
// @name           OTI Basecamp
// @namespace      http://oti.newamerica.net
// @description    Add drop downs to all OTI Basecamp time trackers. By Josh King, based on script by James Vasille.
// @include        https://oti.basecamphq.com/projects/*/time_entries
// @updateURL      https://github.com/jvasile/OITP-Basecamp/raw/master/OITP_Basecamp.user.js
// @downloadURL    https://github.com/jvasile/OITP-Basecamp/raw/master/OITP_Basecamp.user.js
// @version        1.3
// ==/UserScript==

var project = '';
var pid = window.location.pathname.split('/')[2].split('-')[0];
//This is where you add in additional projects.
switch(pid)
{
  case "6219166":
    project = 'Philly';
    break;
  case "8603089":
    project = 'Commotion';
    break;
  case "9015896":
    project = 'OITP';
    break;
}

//This is where you modify the text strings for each case.
var options = new Array();
switch(project)
{
  case 'Philly':
    options[0] = "OTI FRP Evaluation Team meetings";
    options[1] = "Preparation for UAC meetings";
    options[2] = "UAC meetings";
    options[3] = "UAC meetings follow-up";
    options[4] = "Complete UAC-assigned project management tasks";
    options[5] = "Review and adjust OTI staff assignments as needed";
    options[6] = "EWG meetings preparation";
    options[7] = "EWG meeting";
    options[8] = "EWG meeting follow-up";
    options[9] = "OTI revised Focus Group and/or Interview questionnaires for 2/03"
    options[10] = "Revised focus group questions for 02-17";
    options[11] = "Preparing for Focus Groups/Interviews";
    options[12] = "Coordinate short WUS data collection at SBA sites";
    options[13] = "WUS coordination ongoing";
    options[14] = "Memo on exit survey by 2/10";
    options[15] = "Standardized exit survey";
    options[16] = "Subset of EWG met to discuss on 02-24-12";
    options[17] = "Revise SBA reporting tool to revise shared outcomes";
    options[18] = "Expanded reporting begins";
    options[19] = "Ongoing maintenance of reporting tool";
    options[20] = "Developing long and short WUS";
    options[21] = "Ongoing maintenance";
    options[22] = "Review relevant methodologies and documents as needed";
    options[23] = "Quarterly and Monthly Report Templates";
    options[24] = "Quarterly reports analysis";
    options[25] = "Quarterly report for Jan - March 2012";
    options[26] = "Seeking IRB approval for Evaluation plan";
    options[27] = "Revisions of FRP Evaluation and Research Plan by 2/03";
    options[28] = "OTI Memo responding to prime's feedback";
    options[29] = "OTI revised Detailed Data Collection Chart";
    options[30] = "OTI revised Quantitative Methodologies by 2/03";
    options[31] = "Discussing evaluation with Primes 2/17";
    options[32] = "Revised Evaluation Plan for 3/15";
    options[33] = "Revised Evaluation Plan for 3/30";
    options[34] = "OTI delivers data collection plan for partners by 2/29";
    options[35] = "OTI gathers feedback from Evaluation Working Group on quarterly report contents and format and partner data collection plan by 3/15";
    options[36] = "Revisions of FRP Evaluation and Research Plan";
    options[37] = "Sub-element due dates added to Timeline by 2/17";
    options[38] = "Revised Evaluation Timeline for 2-23";
    options[39] = "One on one meetings wtih all partners on evaluation plan by 3/15";
    options[40] = "One on one meetings with all partners on evaluation plan follow-up";
    options[41] = "Grant paperwork & reporting requirements";
    break;
  case 'OITP':
    options[0] = "Incubating Open Source Projects";
    options[1] = "Hosting Code Sprints and Developer Convenings";
    options[2] = "Project Monitoring and Evaluation";
    options[3] = "In-kind Open Source Developer Time";
    break;
  case 'Commotion':
    options[0] = "Development";
    options[1] = "Deployment and Documentation";
    options[2] = "Project Monitoring and Evaluation";
    options[3] = "In-Kind Open-Source Developer Time";
    break;
}

var optLength = options.length;
if(optLength > 0)
{
  options.push("PTO");
  optLength = options.length;

  var selector = '<select id="time_entry_description" name="time_entry[description]">';
  for(var i=0; i<optLength; i++)
  {
    selector += '<option>' + options[i] + '</option>'; 
  }
  selector += '</select>';
  
  var descrip = document.getElementById('time_entry_description');
  descrip.parentNode.innerHTML = selector;
}
