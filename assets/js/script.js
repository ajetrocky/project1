  if (screen && screen.width > 480) {


      $(document).ready(function () {



          $(".logslide").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,

              prevArrow: $("#banner-left-logallproduct"),
              nextArrow: $("#banner-right-logallproduct"),

          });

          $(".movetoslide").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,

              prevArrow: $("#banner-left-allproduct"),
              nextArrow: $("#banner-right-allproduct"),

          });



          $(".toslide").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,

              prevArrow: $("#banner-left-product"),
              nextArrow: $("#banner-right-product"),

          });








      });


  } else {









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
          if (n > slides.length) {
              slideIndex = 1
          }
          if (n < 1) {
              slideIndex = slides.length
          }

          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }



          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex - 1].style.display = "block";
          dots[slideIndex - 1].className += " active";
      }









  }









  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }






  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }





  function increaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('number').value = value;
  }

  function decreaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      document.getElementById('number').value = value;
  }

  $("#productsImg").slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      vertical: true,
      prevArrow: $("#upArrow"),
      nextArrow: $("#downArrow"),

      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
              }
    },
          {
              breakpoint: 480,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
    }
  ]

  });
