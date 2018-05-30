
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "")
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}




//

//
function myFunction () {
	var x = document.getElementById("myTopnav");
	if (x.className === "nav") {
		x.className += " responsive";
	} 	
	else {
		x.className = "nav";
	}
}
		
				
function myReveal() {
	var x = document.getElementById("item");
	if (x.style.display === "none") {
	x.style.display = "block";
	} else {
	x.style.display = "none";
	}
}

//var cacheNum = 1;
//TODO: ADD A WAY TO DISPLAY
//For now just open console log to see outcomes
var crystalButton = document.querySelector('button');
var arr = [];
var endArr = [];
var answer = "";
var champ="";

var mutantArr = ['Archangel','Iceman','Wolverine','Sabretooth','Wolverine X-23','Rogue','Cable','Bishop','Nightcrawler','Psylocke','Storm','Nightcrawler','Beast','Cyclops (BlueTeam)','Cyclops (New Xavier School)','Gambit','Deadpool X-Force','Magneto','Magneto (MARVEL NOW!)','Old Man Logan', 'Colossus'];

var skillArr = ['Gwenpool', 'Blade', 'Hawkeye', 'Elektra','Daredevil (Classic)', 'Thor (Ragnarok)', 'Crossbones', 'Black Widow', 'Taskmaster','Killmonger','Punisher','Winter Soldier','Karnak','Black Panther (Classic)','Moon Knight','Kingpin','Agent Venom','Falcon','Daredevil (Netflix)','Black Panther (Civil War)'];

var mysticArr = ['Doctor Voodoo','Scarlet Witch','Ghost Rider','Magik','Dormammu','The Hood','Morningstar','Mephisto','Guillotine','Thor (Jane Foster)','Iron Fist','Mordo','Dr. Strange','Unstoppable Colossus','Juggernaut','Loki'];

var cosmicArr = ['Medusa','Hyperion','Angela','Drax','Thor','Hela','Ms. Marvel','Captain Marvel','Black Bolt','Phoenix','Spider-Man Symbiote','Gamora','King Groot','Venom','Superior Iron Man','Venompool','Carnage','Ronan','Groot','Kamala Khan','Proxima Midnight'];

var techArr = ['Spider-Man (Stark)','Star-Lord','Vision (Classic)','Vision (Age of Ultron)', 'Ultron','Doctor Octopus','Sentinel','Yondu','Green Goblin','Nebula','Punisher 2099','Rocket Raccoon','Howard The Duck','Kang','Vulture','Iron Man','Civil Warrior','War Machine','Hulkbuster','Iron Patriot'];

var sciArr = ['Quake','Void','Hulk','Red Hulk','Luke Cage','Gladiator Hulk','M.O.D.O.K','Captain America WW2','Yellowjacket','Sentry','Captain America (Classic)','Spider-Man (Classic)','Electro','Spider Gwen','Spider-Man Miles Morales','Rhino','Joe Fixit','She Hulk','Ant-Man','Abomination'];

var champNum = 0;
var champArray = [];
var typeNum=0;
var answer = document.querySelector('#center_page');
/*crystalButton.onclick = function(){
	start();
	
}*/
function start(){
	arr.length=0;
	endArr.length =0;
	var crystalCount = 0;
	crystalCount = prompt('How many crystals do you want to spin? (Warning: Numbers over 20 go back to 20)');
	localStorage.setItem('crystals',crystalCount);
	var crystalNum = Number(crystalCount);
	if (crystalNum >= 21){
		crystalNum = 20;
	}
	for(var i = 1; i <=crystalNum; i++) {
		arr.push(i);
		endArr.push(i);
	}
	spinPHC(crystalNum);
	for (var k = 0; k<arr.length;k++){
		champ="";
		assignChamp();
		champArray[k] = champ;
		if(arr[k] >=1 && arr[k]<=84)
		{
			endArr[k] = '★★ '+ champ +"";
		}
		else if (arr[k]>=85 && arr[k]<=98){
			endArr[k]= '★★★ '+ champ + "";
		}
		else if (arr[k]>=99){
			endArr[k]= '★★★★ '+ champ +"";
		}
		else{
			endArr[k] = 'error';
		}
	}
	//console.log(endArr);	
	console.log(champArray);
	//var stars = endArr.sort();
	//console.log(endArr);
	var spinAnswer = endArr.join(", ");
	makeUL(endArr, champArray);
	//displayAnswer(spinAnswer);

}

function assignChamp(){	
	typeNum=1;
	typeNum=Math.floor(Math.random()*6)+1;
	if(typeNum <= 1){
		champNum=0;
		champNum =  Math.floor(Math.random() * mutantArr.length);
		champ = mutantArr[champNum];
	}
	else if (typeNum ===2){
		champNum=0;
		champNum =  Math.floor(Math.random() *mysticArr.length);
		champ = mysticArr[champNum];
	}
	else if(typeNum === 3){
		champNum=0;
		champNum =  Math.floor(Math.random() *skillArr.length);
		champ = skillArr[champNum];
	}
	else if(typeNum === 4){
		champNum=0;
		champNum =  Math.floor(Math.random() *cosmicArr.length);
		champ = cosmicArr[champNum];
	}
	else if(typeNum === 5){
		champNum=0;
		champNum =  Math.floor(Math.random() * techArr.length);
		champ = techArr[champNum];
	}
	else if(typeNum >= 6){
		champNum=0;
		champNum =  Math.floor(Math.random() * sciArr.length);
		champ = sciArr[champNum];
	}
	else{
		champ = 'Thanos';
	}
}

function makeUL (endArr, champArray){
	var list = "";
	for (var l = 0; l<endArr.length; l++){
	 	list += "<div class='spinResult'>" + endArr[l] + "<img src='../ChampionImg/" + champArray[l] + ".png'>"+ "</div>";
	}
	console.log(list);
	answer.innerHTML = ('' + list);
}
/*function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
	console.log(list);
    return list;
}*/


function displayAnswer(string){
	//console.log(string); 
	answer.textContent = ('' + string);
}

function spinPHC (n){
	n--;
	for(;n>=0; n--){
		var draw =  Math.floor(Math.random() * 100) + 1; 
		arr[n] = draw;
		
	}
	
}

//
//
//
var coll = document.getElementsByClassName("tierButton");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//

//

//

var acc = document.getElementsByClassName("tierButton");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

