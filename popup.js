document.querySelector('head').innerHTML += `<style>      
.crediscore-badge {
  position:relative;
  margin-right: 10px !important;
  margin-left: 10px !important;
}

.crediscore-badge[data-badge]:after {
   content: attr(data-badge);
   position: absolute;
   top: -2px;
   right: -20px;
   font-size: .7em;
   color: white;
   width: 18px;
   height: 18px;
   text-align: center;
   line-height: 18px;
   border-radius: 50%;
   box-shadow: 0 0 1px #333;
   padding: 2px;
   font-family: sans-serif;
   z-index: 999;
   
}</style>`;

document.querySelectorAll("[data-action='show-user-card']")[1].classList.add("crediscore-badge");

var span_element = "<span data-badge='27%' class='crediscore-badge'></span>";
document.querySelectorAll("[data-action='show-user-card']")[1].innerHTML+=span_element;



