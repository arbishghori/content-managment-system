window.addEventListener('load', function() {
  var loaderFrame = document.getElementById('loader-frame');
  loaderFrame.style.display = 'none';
});

function redirectToLogin(){
  window.location.href="login.html";
}
setTimeout(redirectToLogin,5000);