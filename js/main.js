document.addEventListener('DOMContentLoaded', function() {
  if ($('body').hasClass('stateOfParties')) {
    var stateOfParties = new StateOfParties();
    stateOfParties.init();
  }
}, false);
