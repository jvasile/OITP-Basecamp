// ==UserScript==
// @name           OITP Basecamp 
// @namespace      http://jamesvasile.com
// @description    Add drop downs to the OITP basecamp Time log descriptions
// @include        https://oti.basecamphq.com/projects/9015896-open-internet-tools-project-oitp/time_entries
// @updateURL      https://github.com/jvasile/OITP-Basecamp/raw/master/OITP_Basecamp.user.js
// @downloadURL    https://github.com/jvasile/OITP-Basecamp/raw/master/OITP_Basecamp.user.js
// @version        1.0
// ==/UserScript==

var descrip = document.getElementById('time_entry_description');
descrip.parentNode.innerHTML = '<select id="time_entry_description" name="time_entry[description]"><option value="Financially incubating open source software projects that build open internet technologies and circumvention tools.">Financially incubating projects</option><option value="Ensuring the ancillary development support that ultimately ensures the viability of any open source project.">Ancillary dev support</option><option value="Promoting project visibility and building a central web presence and developer portal.">OITP public outreach</option><option value="Hosting in-person developer meetings and code sprints.">Hackfests</option><option value="Hiring a core OITP staff to coordinate organizational set-up and assist on projects.">Hiring</option></select>';
