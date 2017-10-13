// chrome.browserAction.onClicked.addListener(function(tab) {
	// chrome.tabs.executeScript(null, {file: "popup.js"});    
 // });
function getColor(value){
    //value from 0 to 1
    var hue=((value)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}

// document.querySelectorAll(
// 	"[data-action='show-user-card']"
// )[1].classList.add("crediscore-badge");

var random_score = Math.round(Math.random()*100);

var span_element = `
	<span 
		id="credinet-badge"
		style='background-color: @color'>
		@score%
	</span>
`;

span_element = span_element.replace("@score", random_score.toString());

span_element = span_element.replace("@color", getColor(random_score/100))

document.querySelectorAll(
	"[data-action='show-user-card']"
)[1].insertAdjacentHTML('afterend', span_element);