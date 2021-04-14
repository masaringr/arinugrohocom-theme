// Get the container element
var liContainer = document.getElementById("menus");

// Get all list with tag="li" inside the container
var list = liContainer.getElementsByTagName("li");

// Loop through the li and add the active class to the current/clicked li
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzu_Q9eq-G1GOtu0tlwONFdf_6YfRbvkU0L00QVy5PxLO75OWuKOHMVUJWK9mQQi4RE/exec';
  const form = document.forms['arinugrohocom-contact-form'];
  const btnSend = document.querySelector(".btn-send");
  const btnSending = document.querySelector(".btn-sending");
  const alertSuccess = document.querySelector(".scs-alert");
  const alertError = document.querySelector(".err-alert");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault()

          btnSend.classList.toggle("d-none");
          btnSending.classList.toggle("d-none");
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
              console.log('Success!', response)
              btnSend.classList.toggle("d-none");
              btnSending.classList.toggle("d-none");
              alertSuccess.classList.toggle("d-none");

              form.reset();
              setTimeout(() => {form.classList.toggle("was-validated")},1); //timeout allows for 'was-validated' to be added then removed.
            })
            .catch(error => {
              btnSend.classList.toggle("d-none");
              btnSending.classList.toggle("d-none");
              alertError.classList.toggle("d-none");
              console.error('Error!', error.message)
            })
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



// form.addEventListener('submit', e => {

// })

document.addEventListener('DOMContentLoaded', function(){ 
  const today = new Date();
  const year = today.getFullYear();
  const copy = document.querySelector("#copyright");

  const fbLink = `<a href="https://www.facebook.com/mr.aringr" target="_blank">Facebook</a>`;
  const twtrLink = `<a href="https://twitter.com/_aringr" target="_blank">Twitter</a>`;

  copy.innerHTML = `&copy;${year} &nbsp; | &nbsp; ${fbLink} &nbsp; | &nbsp; ${twtrLink}`;
  
  // const sections = document.querySelectorAll(".template__section");
  // const menu_links = document.querySelectorAll(".template__nav-item");
  
  // const makeActive = (link) => menu_links[link].classList.add("active");
  // const removeActive = (link) => menu_links[link].classList.remove("active");
  // const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
  
  // const sectionMargin = 125;
  // let currentActive = 0;

  // // listen for scroll events
  // window.addEventListener("scroll", () => {
  //   const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1

  //   if (current !== currentActive) {
  //     removeAllActive();
  //     currentActive = current;
  //     makeActive(current);
  //   }
  // });
  
}, false);
