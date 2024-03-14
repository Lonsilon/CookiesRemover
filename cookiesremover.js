(function () {
  console.log('removing...');
  let cookiesDiv = document.getElementById('didomi-host');
  if (cookiesDiv)
    cookiesDiv.remove();
  document.body.classList.remove("didomi-popup-open");
  cookiesDiv = document.getElementById('cl-consent');
  if (cookiesDiv)
    cookiesDiv.remove();
})();


