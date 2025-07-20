/* when click will go to the page login.html*/

function login() {
  window.location.href = 'login.html';
}
document.getElementById('login').addEventListener('click', login);


$( "#myform" ).validate({
  errorPlacement: function(error, element) {
      error.insertAfter(element.siblings("label"));
  },
  rules: {
      email: {
      required: true,
      email: true,
      },

      password:{
          required: true,
          minlength: 6,
          maxlength: 15,
      },
  }
  });


