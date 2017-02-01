document.addEventListener('DOMContentLoaded', function() {
  if ($('body').hasClass('stateOfParties')) {
    var stateOfParties = new StateOfParties();
    stateOfParties.init();
  } else if ($('body').hasClass('findConstituency')) {
    var findConstituency = new FindConstituency();
    findConstituency.init();
  }
}, false);
