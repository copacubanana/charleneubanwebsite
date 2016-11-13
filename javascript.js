/* ------------ if on current page, change style of link ---------------- */

var title = document.getElementById("title");
var links = document.getElementsByTagName('a');
var windowLocationHref = window.location.href;
var i = 0;

for (i ; i < links.length ; i++) {
	var linkHref = links[i].getAttribute('href');
	var linkClass = links[i].className;
	if (linkHref == windowLocationHref && linkClass !== "title") {
		links[i].setAttribute('class','currentlink'); 
	}
}

/* ===================== color-change-box ===================== */

/* changes font colors */

var colorContainer = document.getElementById("colorContainer");

function getTarget(e) {
	return e.target;
}

function itemsToChangeColor(e) {
	var target = getTarget(e);
	var targetId = target.id;
	var targetClass = target.className;
	var ofTargetClass = document.getElementsByClassName(targetClass);
	var numofTargetClass = ofTargetClass.length;
	var targetIdEl = document.getElementById(targetId);
	var color = getComputedStyle(targetIdEl, null).backgroundColor;
	var title = document.getElementById("title");
	var i = 0;
	if (targetClass == "color") {
		title.style.color = color;	
		aboutMeBoxEl.style.backgroundColor = color;

		for ( i ; i < numofTargetClass ; i++ ) {
			ofTargetClass[i].className = targetClass;
		}

		target.className = targetClass + " activeOpacity";
	}
}

colorContainer.addEventListener("click", function(e) { itemsToChangeColor(e); }, true);

/* ===================== toggle minimize and maximize ===================== */

var changeTextBoxEl = document.getElementById("changeTextBox");
var changeColorBoxEl = document.getElementById("changeColorBox");
var aboutMeBoxEl = document.getElementById("aboutMeBox");

var changeTextBoxMinMax = document.getElementById("change-text-minmax");
var changeColorBoxMinMax = document.getElementById("change-color-minmax");
var aboutMeBoxMinMax = document.getElementById("about-me-minmax");

/* Maximize and Minimize the style boxes and about me box */

function minimizeMaximize(targetBox, maxHeight) {
		var height = getComputedStyle(targetBox, null).height;
		var childrenOfTargetBox = targetBox.children;

		if (height !== "20px") {
			targetBox.style.height = "20px";
			for (var i = 0; i < childrenOfTargetBox.length; i++) {
				if (childrenOfTargetBox[i].className !== "navigation") {
					childrenOfTargetBox[i].style.display = "none";
				}
			}

		} else {

			targetBox.style.height = maxHeight;
			for (var i = 0; i < childrenOfTargetBox.length; i++) {
				if (childrenOfTargetBox[i].className !== "navigation") {
					childrenOfTargetBox[i].style.display = "block";
				}	
			}
		}
}

changeTextBoxMinMax.addEventListener("click", function() { minimizeMaximize(changeTextBoxEl, "140px"); }, false);
changeColorBoxMinMax.addEventListener("click", function() { minimizeMaximize(changeColorBoxEl, "266px"); }, false);
aboutMeBoxMinMax.addEventListener("click", function() { minimizeMaximize(aboutMeBoxEl, "324px"); }, false);


/*  ============================ textChangeBox ============================  */

var currentFontName = document.getElementById("currentFontName");
var fontnamesCl = document.getElementsByClassName("fontnames");
var fontnamesUlEl = document.getElementById("fontnames");
var fontOptionsEl = document.getElementById("fontOptions");

function fontNameStyles() {
	for (var k = 0; k < fontnamesCl.length; k++) {
		var font = fontnamesCl[k].getAttribute("href");
		fontnamesCl[k].style.fontFamily = font;
	}
}

fontNameStyles();

function displayFontListDropdown(e) {
	var target = getTarget(e);
	var targetId = target.id;
	var targetClass = target.className;
	if (targetClass == "fontnames") {
		fontnamesUlEl.style.display = "block";
	}
}

function hideFontListDropdown(e) {
	var target = getTarget(e);
	var targetId = target.id;
	var targetClass = target.className;
	if (targetClass == "fontnames") {
		fontnamesUlEl.style.display = "none";
	}
}

fontOptionsEl.addEventListener("mouseover", function(e) { displayFontListDropdown(e); }, false);
fontOptionsEl.addEventListener("mouseout", function(e) { hideFontListDropdown(e); }, false);

/* choose font from drop down list */

function chooseFont(e) {
	e.preventDefault();
	var target = getTarget(e);
	var targetId = target.id;
	var targetClass = target.className;
	var targetHref = target.getAttribute("href");
	var headingsOne = document.getElementsByTagName("h1");
	var title = document.getElementById("title");
	var font = currentFontName.getAttribute("href");

	if (targetId !== "currentFontName" && targetClass == "fontnames") {

		title.style.fontFamily = targetHref;	
	
	/* add the last font to the bottom of the list */
	var li = document.createElement("LI");
	var a = document.createElement("A");
	var textNode = document.createTextNode(font);
	li.appendChild(a);
	a.appendChild(textNode);
	a.className = "fontnames";
	a.setAttribute("href", font);
	fontnamesUlEl.appendChild(li);

	/* put current font to top span */

	currentFontName.textContent = targetHref;
	currentFontName.setAttribute("href", targetHref);  
	  
		/* remove current font from available list */

		for (var j = 1; j < fontnamesCl.length; j++) {
			var item = fontnamesCl[j];
			var itemParentLi = item.parentNode;
			var hrefAttr = item.getAttribute("href");

			if (hrefAttr == targetHref) {
				fontnamesUlEl.removeChild(itemParentLi);
			}
		}

	}
fontNameStyles();
}

fontOptionsEl.addEventListener("click", function(e) { chooseFont(e); }, false);


var patternContainerEl = document.getElementById("patternContainer");
var bodyTag = document.getElementsByTagName("body");

/* choose background image or color */

function chooseBackgroundImg(e) {
	e.preventDefault();
	var target = getTarget(e);
	var targetId = target.id;
	var targetClass = target.className;
	var ofTargetClass = document.getElementsByClassName(targetClass);
	var numOfTargetClass = ofTargetClass.length;

	var i = 0;

	switch (targetId) {
		case "polkadots":
			bodyTag[0].style.backgroundImage = "url('images/polkadots.png')";
		break;
		case "linen":
			bodyTag[0].style.backgroundImage = "url('images/linen.jpg')";
		break;
		case "birds":
			bodyTag[0].style.backgroundImage = "url('images/birds.jpg')";
		break;
		case "plain":
			bodyTag[0].style.backgroundImage = "none";
			bodyTag[0].style.backgroundColor = "#EEE";
		break;
	}

	for ( i ; i < numOfTargetClass ; i++ ) {
		ofTargetClass[i].className = "pattern";
	}

	target.className = "pattern" + " activeOpacity";

}

patternContainerEl.addEventListener("click", function(e) { chooseBackgroundImg(e); }, false);


var headerImg = document.getElementById("headerImg");
var headerImgContainerEl = document.getElementById("headerImgContainer");

/* !Ticket consolidate color box functions */

/* choose header image */

function chooseHeaderImage(e) {
	var target = getTarget(e);
	e.preventDefault();
	var target = getTarget(e);
	var targetId = target.id;
	var imgUrl = "";
	var targetClass = target.className;
	var ofTargetClass = document.getElementsByClassName(targetClass);
	var numofTargetClass = ofTargetClass.length;
	var i = 0;

	switch (targetId) {
		case "sunflower":
			imgUrl = "url('images/sunflower.jpg')";
		break;
		case "sprinkles":
			imgUrl = "url('images/rainbowsprinkles.jpg')";
		break;
		case "geode":
			imgUrl = "url('images/geodepurple.jpg')";
		break;
		case "hotairballoons":
			imgUrl = "url('images/hotairballoons.jpg')";
		break;
	}

	headerImg.style.backgroundImage = imgUrl;

	for ( i ; i < numofTargetClass ; i++ ) {
		ofTargetClass[i].className = targetClass;
	}

	target.className = targetClass + ' activeOpacity';
}

headerImgContainerEl.addEventListener("click", function(e) { chooseHeaderImage(e); }, false);


/* ==================== Change Text Styles Box Functions ======================== */


var increaseFontSizeBtnEl = document.getElementById("increaseFontSizeBtn");
var decreaseFontSizeBtnEl = document.getElementById("decreaseFontSizeBtn");

var headingsOne = document.getElementsByTagName("h1");


/* Increase the current Font Size by 10% */

function increaseFontSize() {
	var currentSize = getComputedStyle(title, null).getPropertyValue("font-size");	
	var pos = currentSize.indexOf("px"); /* trim px from end */
	var size = currentSize.slice(0, pos);
	size = Number(size);
	var newSize = size * 1.1;
	newSize = newSize.toFixed(1);

	title.style.fontSize = newSize + "px";

}

increaseFontSizeBtnEl.addEventListener("click", increaseFontSize, false);
 
/* Decrease the current Font Size by 10% */

function decreaseFontSize() {
	var currentSize = getComputedStyle(title, null).getPropertyValue("font-size");	
	var pos = currentSize.indexOf("px"); /* trim px from end */
	var size = currentSize.slice(0, pos);
	size = Number(size);
	var newSize = size - (size * .1);
	newSize = newSize.toFixed(1);
	title.style.fontSize = newSize + "px";

}

decreaseFontSizeBtnEl.addEventListener("click", decreaseFontSize, false);

var lowercaseBtnEl = document.getElementById("lowercaseBtn");
var uppercaseBtnEl = document.getElementById("uppercaseBtn");

/* Change text to lowercase */

function toLowerCase() {
	var text = title.textContent;
	var textToLower = text.toLowerCase();
	title.textContent = textToLower; 
}

lowercaseBtnEl.addEventListener("click", toLowerCase, false);

/* Change text to uppercase */

function toUpperCase() {
	var text = title.textContent;
	var textToUpper = text.toUpperCase();
	title.textContent = textToUpper;
}

uppercaseBtnEl.addEventListener("click", toUpperCase, false);

/* ------ main menu nav ------ */

var topnavMenuBtn = document.getElementById("main-menu-button-container");

function showSiteMenu(e) {
	var topnavUl = document.getElementById("dropdown-content-menu");
	var displayStyle = getComputedStyle(topnavUl, null).getPropertyValue("display");
	var windowWidth = window.innerWidth;
	if (windowWidth <= 500 ) {
		if (displayStyle == "none") {
			topnavUl.style.display = "block";
		}
		if (displayStyle == "block") {
			topnavUl.style.display = "none";
		}
	}
}

topnavMenuBtn.addEventListener("click", function(e) { showSiteMenu(e); }, false); 
