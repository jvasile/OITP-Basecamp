// ==UserScript==
// @name           OITP Basecamp 
// @namespace      http://jamesvasile.com
// @description    Add drop downs to the OITP basecamp Time log descriptions
// @include        https://oti.basecamphq.com/projects/9015896-open-internet-tools-project-oitp/time_entries
// @updateURL      https://github.com/jvasile/OITP-Basecamp/raw/master/OITP_Basecamp.user.js
// @downloadURL    https://github.com/jvasile/OITP-Basecamp/raw/master/OITP_Basecamp.user.js
// @version        1.1
// ==/UserScript==

var descrip = document.getElementById('time_entry_description');
descrip.parentNode.innerHTML = '<select id="time_entry_description" name="time_entry[description]"><option>Incubating Open Source Projects</option><option>Hosting Code Sprints and Developer Convenings</option><option>Project Monitoring and Evaluation</option><option>In-kind Open Source Developer Time</option></select>';


