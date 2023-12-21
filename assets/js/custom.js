$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
      items: 3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768, 2],
      itemsMobile:[650, 1],
      pagination: true,
      autoPlay: true
    });
  });


  $(document).ready(function() {
    $("#testimonial-slider01").owlCarousel({
      items: 1,
      itemsDesktop:[1000,1],
      itemsDesktopSmall:[979,1],
      itemsTablet:[768, 1],
      itemsMobile:[650, 1],
      pagination: true,
      autoPlay: true
    });
  });

  (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()