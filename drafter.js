$(document).ready(function() {

	// === Leader data: single source of truth ===
	// Add a new leader by adding one entry here. The leader grid, click
	// handlers, and reset/all logic all derive from this object.
	var leaderData = {
		"Alexander":   { displayName: "Alexander",         civilization: "Greece",            traits: ["Aggressive", "Philosophical"] },
		"Asoka":       { displayName: "Asoka",             civilization: "India",             traits: ["Organized", "Spiritual"] },
		"Augustus":    { displayName: "Augustus Caesar",   civilization: "Rome",              traits: ["Industrious", "Imperialistic"] },
		"Bismarck":    { displayName: "Bismarck",          civilization: "Germany",           traits: ["Expansive", "Industrious"] },
		"Boudica":     { displayName: "Boudica",           civilization: "Celts",             traits: ["Aggressive", "Charismatic"] },
		"Brennus":     { displayName: "Brennus",           civilization: "Celts",             traits: ["Spiritual", "Charismatic"] },
		"Catherine":   { displayName: "Catherine",         civilization: "Russia",            traits: ["Imperialistic", "Creative"] },
		"Charlemagne": { displayName: "Charlemagne",       civilization: "Holy Roman Empire", traits: ["Protective", "Imperialistic"] },
		"Churchill":   { displayName: "Churchill",         civilization: "England",           traits: ["Charismatic", "Protective"] },
		"Cyrus":       { displayName: "Cyrus",             civilization: "Persia",            traits: ["Imperialistic", "Charismatic"] },
		"Darius":      { displayName: "Darius I",          civilization: "Persia",            traits: ["Organized", "Financial"] },
		"DeGaulle":    { displayName: "De Gaulle",         civilization: "France",            traits: ["Industrious", "Charismatic"] },
		"Elizabeth":   { displayName: "Elizabeth",         civilization: "England",           traits: ["Philosophical", "Financial"] },
		"Frederick":   { displayName: "Frederick",         civilization: "Germany",           traits: ["Philosophical", "Organized"] },
		"Gandhi":      { displayName: "Gandhi",            civilization: "India",             traits: ["Spiritual", "Philosophical"] },
		"Genghis":     { displayName: "Genghis Khan",      civilization: "Mongolia",          traits: ["Aggressive", "Imperialistic"] },
		"Gilgamesh":   { displayName: "Gilgamesh",         civilization: "Sumeria",           traits: ["Creative", "Protective"] },
		"Hammurabi":   { displayName: "Hammurabi",         civilization: "Babylon",           traits: ["Aggressive", "Organized"] },
		"Hannibal":    { displayName: "Hannibal",          civilization: "Carthage",          traits: ["Financial", "Charismatic"] },
		"Hatshepsut":  { displayName: "Hatshepsut",        civilization: "Egypt",             traits: ["Spiritual", "Creative"] },
		"Huayna":      { displayName: "Huayna Capac",      civilization: "Inca",              traits: ["Financial", "Industrious"] },
		"Isabella":    { displayName: "Isabella",          civilization: "Spain",             traits: ["Expansive", "Spiritual"] },
		"Joao":        { displayName: "Joao II",           civilization: "Portugal",          traits: ["Imperialistic", "Expansive"] },
		"Julius":      { displayName: "Julius Caesar",     civilization: "Rome",              traits: ["Imperialistic", "Organized"] },
		"Justinian":   { displayName: "Justinian I",       civilization: "Byzantium",         traits: ["Spiritual", "Imperialistic"] },
		"Kublai":      { displayName: "Kublai Khan",       civilization: "Mongolia",          traits: ["Aggressive", "Creative"] },
		"Lincoln":     { displayName: "Lincoln",           civilization: "America",           traits: ["Philosophical", "Charismatic"] },
		"Louis":       { displayName: "Louis XIV",         civilization: "France",            traits: ["Creative", "Industrious"] },
		"Mansa":       { displayName: "Mansa Musa",        civilization: "Mali",              traits: ["Financial", "Spiritual"] },
		"Mao":         { displayName: "Mao Zedong",        civilization: "China",             traits: ["Expansive", "Protective"] },
		"Mehmed":      { displayName: "Mehmed II",         civilization: "Ottomans",          traits: ["Expansive", "Organized"] },
		"Montezuma":   { displayName: "Montezuma",         civilization: "Aztecs",            traits: ["Aggressive", "Spiritual"] },
		"Napoleon":    { displayName: "Napoleon",          civilization: "France",            traits: ["Organized", "Charismatic"] },
		"Pacal":       { displayName: "Pacal II",          civilization: "Maya",              traits: ["Financial", "Expansive"] },
		"Pericles":    { displayName: "Pericles",          civilization: "Greece",            traits: ["Creative", "Philosophical"] },
		"Peter":       { displayName: "Peter",             civilization: "Russia",            traits: ["Expansive", "Philosophical"] },
		"Qin":         { displayName: "Qin Shi Huang",     civilization: "China",             traits: ["Industrious", "Protective"] },
		"Ragnar":      { displayName: "Ragnar",            civilization: "Vikings",           traits: ["Aggressive", "Financial"] },
		"Ramesses":    { displayName: "Ramesses II",       civilization: "Egypt",             traits: ["Spiritual", "Industrious"] },
		"Roosevelt":   { displayName: "Roosevelt",         civilization: "America",           traits: ["Industrious", "Organized"] },
		"Saladin":     { displayName: "Saladin",           civilization: "Arabia",            traits: ["Protective", "Spiritual"] },
		"Shaka":       { displayName: "Shaka",             civilization: "Zulu",              traits: ["Aggressive", "Expansive"] },
		"Sitting":     { displayName: "Sitting Bull",      civilization: "Native Americans",  traits: ["Philosophical", "Protective"] },
		"Stalin":      { displayName: "Stalin",            civilization: "Russia",            traits: ["Aggressive", "Industrious"] },
		"Suleiman":    { displayName: "Suleiman",          civilization: "Ottomans",          traits: ["Philosophical", "Imperialistic"] },
		"Suryavarman": { displayName: "Suryavarman II",    civilization: "Khmer",             traits: ["Expansive", "Creative"] },
		"Tokugawa":    { displayName: "Tokugawa",          civilization: "Japan",             traits: ["Aggressive", "Protective"] },
		"Victoria":    { displayName: "Victoria",          civilization: "England",           traits: ["Imperialistic", "Financial"] },
		"Wang":        { displayName: "Wang Kon",          civilization: "Korea",             traits: ["Financial", "Protective"] },
		"Washington":  { displayName: "Washington",        civilization: "America",           traits: ["Expansive", "Charismatic"] },
		"Willem":      { displayName: "Willem van Oranje", civilization: "Dutch",             traits: ["Financial", "Creative"] },
		"Zara":        { displayName: "Zara Yaqob",        civilization: "Ethiopia",          traits: ["Creative", "Organized"] }
	};

	var leaderKeys = Object.keys(leaderData);
	var leaderSelector = leaderKeys.map(function(k) { return '.' + k; }).join(', ');

	// allCivs: enabled/banned state per leader, derived from leaderData
	var allCivs = {};
	leaderKeys.forEach(function(k) { allCivs[k] = true; });

	var bannedCivs = 0;
	var totalCivs = leaderKeys.length;
	var titleHTML = "";
	var allclicked = false;

	// Build the leader grid from leaderData (8 cells per row)
	function generateCivTable() {
		var $table = $('#civilizations');
		$table.empty();
		var cellsPerRow = 8;
		var $row = null;
		leaderKeys.forEach(function(key, i) {
			if (i % cellsPerRow === 0) {
				$row = $('<tr></tr>');
				$table.append($row);
			}
			var $cell = $('<td></td>')
				.addClass(key)
				.html('<img src="img/' + key.toLowerCase() + '.png" />' + leaderData[key].displayName);
			$row.append($cell);
		});
	}
	generateCivTable();
	updateBanned(totalCivs, bannedCivs);

	// toggle disable or enabled civ
	$(leaderSelector).bind('click', toggleState);

	function toggleState(e) {        // function_tr
		if ( !$(this).is(':animated') ) {
			if ($(this).css('opacity') < 1) {
				$(this).css("text-decoration", "none");
				$(this).css("background-color", "#282828");
				$(this).fadeTo( "slow" , 1, function() {});
				allCivs[this.className] = true;
				bannedCivs--;
			} else {
				$(this).css("background-color", "#1a1a1a");
				$(this).fadeTo( "slow" , 0.25, function() {$(this).css("text-decoration", "line-through");});
				allCivs[this.className] = false;
				bannedCivs++;
			}
		}

		updateBanned(totalCivs, bannedCivs);
	};

	//reset all to enabled
	$('#reset').click(function() {

		$(leaderSelector).css({
			"text-decoration": "none",
			"background-color": "#282828"
		});

		$(leaderSelector).fadeTo( "slow" , 1, function() {});

		leaderKeys.forEach(function(k) { allCivs[k] = true; });

		//update the title
		totalCivs = leaderKeys.length;
		bannedCivs = 0;
		updateBanned(totalCivs, bannedCivs);

		allclicked = false;
		$('#create').attr("disabled", false);
	});

	//set all to disabled
	$('#all').click(function() {
		$(leaderSelector).fadeTo( "slow" , 0.25, function() {$(this).css({"text-decoration": "line-through", "background-color": "#1a1a1a"});});

		leaderKeys.forEach(function(k) { allCivs[k] = false; });

		//update the title
		totalCivs = leaderKeys.length;
		bannedCivs = totalCivs;
		updateBanned(totalCivs, bannedCivs);

		allclicked = true;

	});

	function updateBanned(totalAllowed, totalBanned) {
		var titleHTML  = (totalAllowed - totalBanned) + " Allowed - " + totalBanned + " Banned";

		$(".selectorheadline").html(titleHTML );
	}

	// make the draft
	$('#create').click(function() {
		$('#create').attr("disabled", false);
  		var players = $("#gameplayers option:selected").index() + 1;
  		var rndpicks = $("#picks option:selected").index() + 1;
  		var neededCivs = players * rndpicks;
  		var enabledCivs = 0;
  		var missingCivs = 0;
  		var allowedCivs = [];
  		var playerPicks = {};

  		//clear any previous results
  		$("#results").empty();

  		//check how many civs are enabled
  		$.each(allCivs, function (index, value) {
			if (allCivs[index] == true) {
				allowedCivs[enabledCivs] = index;
				enabledCivs++;
			};
  		});

		//check if the user is trying to pick more civs than avaliable
		if (neededCivs > leaderKeys.length) {
			$("#results").html("<p class='drawerror'>There are not enough civilizations for " + players + " players to have " + rndpicks + " picks each!</br>Select a different number of players or lower the number of random picks and try again!</p>");

		// check if we have enough enabled civs process the draft
		} else if (enabledCivs < neededCivs) {
			missingCivs = neededCivs - enabledCivs;
			$("#results").html("<p class='drawerror'>There are not enough available civilizations to make the draw!</br>Please unban at least another " + missingCivs +" civilizations and try again!</p>");

		// errors handled we can now make the draw
		} else {

			// pick 3 rand civs for each player
			var i;
			var k;
			var picksHTML = "<p class='rescopied'>Draft results have been copied to clipboard</p>";
			var resCopy = ""

			picksHTML = picksHTML + "<table class='drawresults'>";

			$("#results").css("text-align", "left");
			//loop thru each player
			for (i = 1; i <= players; i++) {

				//add this player to the results HTML
				picksHTML = picksHTML + "<tr><td>Player " + i + " choose from:</td>";
				resCopy = resCopy  + "Player " + i + " choose from: - ";

				//loop however many picks are needed
				for (k = 1; k <= rndpicks; k++) {

					//loop thru the avlaiable civs and pick 3 at random
					var thisciv = Math.floor(Math.random() * allowedCivs.length);
					picksHTML = picksHTML + "<td><img src='img/" + allowedCivs[thisciv].toLowerCase() + ".png'></img>" + allowedCivs[thisciv];

					if (k < rndpicks) {
						picksHTML = picksHTML + "<td>";
						resCopy = resCopy  + allowedCivs[thisciv] + " or ";
					} else {
						picksHTML = picksHTML + "<td>";
						resCopy = resCopy  + allowedCivs[thisciv] + "\r\n";
					}

					// remove this item from the array, create new temp array and then assign it to allowed civs
					enabledCivs = 0;
					var tmpCivs = [];

					$.each(allowedCivs, function (index, value) {
						if (index != thisciv) {
							tmpCivs[enabledCivs] = value;
							enabledCivs++;
						};
					});

					allowedCivs = tmpCivs.slice();
				}

				picksHTML = picksHTML + "</br>"
			}

			picksHTML = picksHTML + "</table>"
			picksHTML = picksHTML + "<div id='copyresults'><input class='submitbutton' name='copyres' id='copyres' type='button' value='Copy Results' /></div>"
			$("#results").html(picksHTML);

			$("#copyTarget").val(resCopy);

			document.getElementById("copyres").addEventListener("click", function() {
			    copyToClipboard(document.getElementById("copyTarget"));
			});

			$("#copyres").click();

			function copyToClipboard(elem) {
				  // create hidden text element, if it doesn't already exist
			    var targetId = "_hiddenCopyText_";
			    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
			    var origSelectionStart, origSelectionEnd;
			    if (isInput) {
			        // can just use the original source element for the selection and copy
			        target = elem;
			        origSelectionStart = elem.selectionStart;
			        origSelectionEnd = elem.selectionEnd;
			    } else {
			        // must use a temporary form element for the selection and copy
			        target = document.getElementById(targetId);
			        if (!target) {
			            var target = document.createElement("textarea");
			            target.style.position = "absolute";
			            target.style.left = "-9999px";
			            target.style.top = "0";
			            target.id = targetId;
			            document.body.appendChild(target);
			        }
			        target.textContent = elem.textContent;
			    }
			    // select the content
			    var currentFocus = document.activeElement;
			    target.focus();
			    target.setSelectionRange(0, target.value.length);

			    // copy the selection
			    var succeed;
			    try {
			    	  succeed = document.execCommand("copy");
			    } catch(e) {
			        succeed = false;
			    }
			    // restore original focus
			    if (currentFocus && typeof currentFocus.focus === "function") {
			        currentFocus.focus();
			    }

			    if (isInput) {
			        // restore prior selection
			        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
			    } else {
			        // clear temporary content
			        target.textContent = "";
			    }
			    return succeed;
			}
		}
	});
});
