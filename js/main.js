document.addEventListener('DOMContentLoaded', function() {
  if ($('body').hasClass('stateOfParties')) {
    var stateOfParties = new StateOfParties();
    stateOfParties.init();
  } else if ($('body').hasClass('findConstituency')) {
    var stateOfParties = new StateOfParties();
    findConstituency.init();
  }
}, false);
