$(document).ready(function() {

	//var America = {Enabled:false};
	var allCivs = {};
	allCivs["Alexander"] = true;
	allCivs["Asoka"] = true;
	allCivs["Augustus"] = true;
	allCivs["Bismarck"] = true;
	allCivs["Boudica"] = true;
	allCivs["Brennus"] = true;
	allCivs["Catherine"] = true;
	allCivs["Charlemagne"] = true;
	allCivs["Churchill"] = true;
	allCivs["Cyrus"] = true;
	allCivs["Darius"] = true;
	allCivs["DeGaulle"] = true;
	allCivs["Elizabeth"] = true;
	allCivs["Frederick"] = true;
	allCivs["Gandhi"] = true;
	allCivs["Genghis"] = true;
	allCivs["Gilgamesh"] = true;
	allCivs["Hammurabi"] = true;
	allCivs["Hannibal"] = true;
	allCivs["Hatshepsut"] = true;
	allCivs["Huayna"] = true;
	allCivs["Isabella"] = true;
	allCivs["Joao"] = true;
	allCivs["Julius"] = true;
	allCivs["Justinian"] = true;
	allCivs["Kublai"] = true;
	allCivs["Lincoln"] = true;
	allCivs["Louis"] = true;
	allCivs["Mansa"] = true;
	allCivs["Mao"] = true;
	allCivs["Mehmed"] = true;
	allCivs["Montezuma"] = true;
	allCivs["Napoleon"] = true;
	allCivs["Pacal"] = true;
	allCivs["Pericles"] = true;
	allCivs["Peter"] = true;
	allCivs["Qin"] = true;
	allCivs["Ragnar"] = true;
	allCivs["Ramesses"] = true;
	allCivs["Roosevelt"] = true;
	allCivs["Saladin"] = true;
	allCivs["Shaka"] = true;
	allCivs["Sitting"] = true;
	allCivs["Stalin"] = true;
	allCivs["Suleiman"] = true;
	allCivs["Suryavarman"] = true;
	allCivs["Tokugawa"] = true;
	allCivs["Victoria"] = true;
	allCivs["Wang"] = true;
	allCivs["Washington"] = true;
	allCivs["Willem"] = true;
	allCivs["Zara"] = true;
	
	var bannedCivs = 0;
	var totalCivs = 52;
	var titleHTML = "";
	var allclicked = false;
	
	// toggle disable or enabled civ
	$(".Alexander, .Asoka, .Augustus, .Bismarck, .Boudica, .Brennus, .Catherine, .Charlemagne, .Churchill, .Cyrus, .Darius, .DeGaulle, .Elizabeth, .Frederick, .Gandhi, .Genghis, .Gilgamesh, .Hammurabi, .Hannibal, .Hatshepsut, .Huayna, .Isabella, .Joao, .Julius, .Justinian, .Kublai, .Lincoln, .Louis, .Mansa, .Mao, .Mehmed, .Montezuma, .Napoleon, .Pacal, .Pericles, .Peter, .Qin, .Ragnar, .Ramesses, .Roosevelt, .Saladin, .Shaka, .Sitting, .Stalin, .Suleiman, .Suryavarman, .Tokugawa, .Victoria, .Wang, .Washington, .Willem, .Zara").bind('click', toggleState)
	
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
	
		$(".Alexander, .Asoka, .Augustus, .Bismarck, .Boudica, .Brennus, .Catherine, .Charlemagne, .Churchill, .Cyrus, .Darius, .DeGaulle, .Elizabeth, .Frederick, .Gandhi, .Genghis, .Gilgamesh, .Hammurabi, .Hannibal, .Hatshepsut, .Huayna, .Isabella, .Joao, .Julius, .Justinian, .Kublai, .Lincoln, .Louis, .Mansa, .Mao, .Mehmed, .Montezuma, .Napoleon, .Pacal, .Pericles, .Peter, .Qin, .Ragnar, .Ramesses, .Roosevelt, .Saladin, .Shaka, .Sitting, .Stalin, .Suleiman, .Suryavarman, .Tokugawa, .Victoria, .Wang, .Washington, .Willem, .Zara").css(
			{"text-decoration": "none",
			"background-color": "#282828"
			});
			
		$(".Alexander, .Asoka, .Augustus, .Bismarck, .Boudica, .Brennus, .Catherine, .Charlemagne, .Churchill, .Cyrus, .Darius, .DeGaulle, .Elizabeth, .Frederick, .Gandhi, .Genghis, .Gilgamesh, .Hammurabi, .Hannibal, .Hatshepsut, .Huayna, .Isabella, .Joao, .Julius, .Justinian, .Kublai, .Lincoln, .Louis, .Mansa, .Mao, .Mehmed, .Montezuma, .Napoleon, .Pacal, .Pericles, .Peter, .Qin, .Ragnar, .Ramesses, .Roosevelt, .Saladin, .Shaka, .Sitting, .Stalin, .Suleiman, .Suryavarman, .Tokugawa, .Victoria, .Wang, .Washington, .Willem, .Zara").fadeTo( "slow" , 1, function() {});
			
			$.each(allCivs, function (index, value) {
				if ((index == "Alexander") || (index == "Asoka") || (index == "Augustus") || (index == "Bismarck") || (index == "Boudica") || (index == "Brennus") || (index == "Catherine") || (index == "Charlemagne")  || (index == "Churchill") || (index == "Cyrus") || (index == "Darius") || (index == "DeGaulle") || (index == "Elizabeth") ||  (index == "Frederick") ||  (index == "Gandhi") ||  (index == "Genghis") ||(index == "Gilgamesh") || (index == "Hammurabi") || (index == "Hannibal") || (index == "Hatshepsut") || (index == "Huayna") || (index == "Isabella") || (index == "Joao") ||
					(index == "Julius") || (index == "Justinian") || (index == "Kublai") || (index == "Lincoln") || (index == "Louis") || (index == "Mansa") || (index == "Mao") || (index == "Mehmed") || (index == "Montezuma") || (index == "Napoleon") || (index == "Pacal") || (index == "Pericles") || (index == "Peter") || (index == "Qin") || (index == "Ragnar") || (index == "Ramesses") || (index == "Roosevelt") || (index == "Saladin") || (index == "Shaka") || (index == "Sitting") ||
					(index == "Stalin") || (index == "Suleiman") || (index == "Suryavarman") || (index == "Tokugawa") || (index == "Victoria") || (index == "Wang") || (index == "Washington") || (index == "Willem") || (index == "Zara")) {
					allCivs[index] = false;
				} else {
					allCivs[index] = true;
				}
	  		});
					
	  		//update the title
	  		totalCivs = 52;
	  		bannedCivs = 0;
			updateBanned(totalCivs, bannedCivs);
		
		allclicked = false;
		$('#create').attr("disabled", false);
	});
	
	//set all to disabled
	$('#all').click(function() {
		$(".Akkad, .Aksum, .America, .Arabia, .Argentina, .Armenia, .Assyria, .Australia, .Austria, .Ayyubids, .Aztec, .Babylon, .Belgium, .Boers, .Bolivia, .Brazil, .Brunei, .Bulgaria, .Burma, .Byzantium, .Canada, .Carthage, .Celts, .Chile, .China, .Colombia, .Cuba, .Denmark, .Egypt, .England, .Ethiopia, .Finland, .France, .Franks, .Gaul, .Germany, .Golden, .Gaul, .Georgia, .Goths, .Greece, .Hittites, .Hungary, .Huns, .Inca, .Ireland, .India, .Indonesia, .Iroquois, .Israel, .Italy, .Japan, .Jerusalem, .Khmer, .Kilwa, .Kongo, .Korea, .Lithuania, .Macedonian, .Madagascar, .Manchuria, .Maori, .Maurya, .Maya, .Mexican, .Mongolia, .Moors, .Morocco, .Mysore, .Netherlands, .NewZealand, .Nabatea, .Normandy, .Norway, .Nubia, .Oman, .Ottomans, .Palmyra, .Persia, .Philippines, .Phoenician, .Poland, .Polynesia, .Portugal, .Prussian, .Romania, .Rome, .Russia, .Scotland, .Shoshone, .Siam, .Sioux, .Songhai, .Spain, .Sumeria, .Sweden, .Switzerland, .Tibet, .Timurids, .Tonga, .Turkey, .Ukraine, .UAE, .Vatican, .Venetian, .Vietnam, .Wales, .Yugoslavia, .Zimbabwe, .Zulu").fadeTo( "slow" , 0.25, function() {$(this).css({"text-decoration": "line-through", "background-color": "#1a1a1a"});});;
		
		$.each(allCivs, function (index, value) {
			allCivs[index] = false;
  		});
  		
  		//update the title
  		totalCivs = 52;
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
		if (neededCivs > 52) {
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

