$(document).ready(function () {

  console.log("running")

$(".cat-head").mouseover(function(){
		$(this).addClass("animated tada infinite");
	});
$(".cat-head").mouseout(function(){
		if ($(this).hasClass("animated tada infinite")){
		$(this).removeClass("animated tada infinite");
	}
	});

// $(".logo").mouseover(function(){
// 		$(this).addClass("animated pulse infinite");
// 	});
// $(".logo").mouseout(function(){
// 		if ($(this).hasClass("animated pulse infinite")){
// 		$(this).removeClass("animated pulse infinite");
// 	}
// 	});

// $("#contact").mouseover(function(){
// 		$(this).addClass("animated rollIn infinite");
// 	});
// $("#contact").mouseout(function(){
// 		if ($(this).hasClass("animated rollIn infinite")){
// 		$(this).removeClass("animated rollIn infinite");
// 	}
// 	});

// API Key: 220d84ce1e1e5f72c9ceac072bb58f66
    $('#search-button').click(function(){
      console.log("click")
     var zip = $("#zip").val(); 
     console.log(zip)
     })

    
    

    var url = "http://api.petfinder.com/pet.find?key=220d84ce1e1e5f72c9ceac072bb58f66&animal=cat&location=10010&output=full&count=8&format=json&callback=?";
    $.ajax({
        type : 'GET',
        data : {},
        url : url,
        dataType: 'json',
        success : function(data) {
          // data = all the results from this search

          var pet = data.petfinder.pets.pet
          // pet = a list or "array" of cats from your search results

          // the following code goes through your pet array and applies a function to each item in that list
          $(pet).each(function(index, el) {

          	 var photo = el.media.photos.photo[2].$t
            // this saves the image URL of each cat with the variable "photo"

            var name = el.name.$t
            // this saves the name of each cat with the variable "name"

            var link = "https://www.petfinder.com/petdetail/" + el.id.$t

            

    

            // the following block of code adds a div to the DOM with the name and image of each cat
             $("#cat-image").append(
              "<div class='cat'>" +
                "<p>" + name + "</p>" +
                "<a href=" + link + ">" + "<img src='" + photo + "'>" + "</a>" +
              "</div>")

          });

          // $("#cat-image").append(
          //     "<div class='cat'>" +
          //       "<img src='" + photo + "'>" +
          //     "</div>")

          // });

          // ("#cat-name").append(
          //     "<div class='name'>" +
          //       "<p>" + name + "</p>" + "'>" +
          //     "</div>")

          // });
          // end of "each" function
        }
        // end of AJAX success function
    });
    // end of AJAX call
  


// Get the modal
var modal = document.getElementById('contactModal');

// Get the button that opens the modal
var btn = document.getElementById("contact-cat");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






});

