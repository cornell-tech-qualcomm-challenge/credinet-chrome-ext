function getColor(value){
    //value from 0 to 1
    var hue=((value)*120).toString(10);
    return ["hsl(",hue,",90%,30%)"].join("");
}

// document.querySelectorAll(
// 	"[data-action='show-user-card']"
// )[1].classList.add("crediscore-badge");

// var random_score = Math.round(Math.random()*100);
// var angle = 0;
//     setInterval(function(){
//           angle+=3;
//          $("#credinet-logo-rotate").rotate(angle);
//     },20);

$(document).ready(function(){
	$( ".credinet-score-badge" ).each(function() {

		$(this).css('background-color',
			getColor($(this).data( "score" )).toString()
			);

	});

    

    $('[data-toggle="popover"]').popover();
    console.log("ready!");


    // Add tag
    $('.msg-popover').on('shown.bs.popover', function () {
    	$(".arrow").css("border-right-color","transparent");
    	$(".popover, .fade, .right, .in").css("background-color", "transparent");
    	$(".popover, .fade, .right, .in").css("border", "none");
    	$(".popover, .fade, .right, .in").css("box-shadow", "none");
        $('.msg_input').keypress(function(event) {
            if (event.which === 13) {
                console.log("Message sent!");
                $('.popover-content').html(
                	`
                  <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                  </svg>
                	`
                );
                // $(".popover, .fade, .right, .in").slideUp( 1500 );


//


                // $('.msg-popover').popover('hide');


                // $.ajax({
                //     type: 'PUT',
                //     async: true,
                //     url: api+"/tags/"+tag_name,
                //     dataType: "json",
                //     contentType: "application/json",
                //     data: JSON.stringify(receipt_id),
                //     success: function(response){
                //         console.log("Created tag");
                //         $('.msg-popover').popover('hide');
                //         if ($('#'+receipt_id+'_'+tag_name).length)
                //         {
                //             /* it exists */
                //             $('#'+receipt_id+'_'+tag_name).remove();

                //         }
                //         else
                //         {
                //             /* it doesn't exist */
                //             const brandNewTag = $(`<a id='${receipt_id}_${tag_name}' href='#' class='tagValue badge badge-pill badge-warning'>${tag_name}</a>`)

                //             $('#tags_'+receipt_id).append(brandNewTag);

                //             // Applying tag behavior on new appended tags (had a big bug here not assiging this behavior to newly created tags)
                //             applyTagBehavior(brandNewTag);
                //         }
                //     }
                // });
            }
        });
    });





});
