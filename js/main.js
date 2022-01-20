$('.responsive').slick({
  dots: true,
  infinite: false,
  autoplay:true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  fade:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});









function handleClick(event) {
  // if the click target is not a button, just return
  // so nothing below runs
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  // get the button text
  let buttonValue = event.target.innerText;
  let custom = document.getElementById('cust').innerHTML

  // console.log(custom)
  // display the value in #result
  document
    .querySelector("#result")
    .innerText = buttonValue;
      item = document.createElement('input');
      item.setAttribute('type', 'text');
    if(buttonValue === custom){
      document.querySelector("#result")
      .innerText = '';
      document.querySelector("#result").appendChild(item)
    
   }
   
}

// add event listener to the group of buttons
// and not every single button
document
  .querySelector(".buttons")
  .addEventListener("click", handleClick);






 

































