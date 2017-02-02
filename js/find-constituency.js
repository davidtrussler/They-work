/*
 * Allows user to choose a constituency
 * Shows this on map
 */

'use strict';

var FindConstituency = function() {
  // this.parties = [];
};

FindConstituency.prototype.init = function() {
  console.log('init!');

  this._setUpFormSubmit();
}

FindConstituency.prototype._setUpFormSubmit = function() {
  console.log('_setUpFormSubmit');

  var _this = this;

  $('#js_postcode-search').submit(function(e) {
    e.preventDefault();

    _this._getConstituencyData($('#js_postcode').val());
  });
}

FindConstituency.prototype._getConstituencyData = function(postcode) {
  console.log('_getConstituencyData!');

  var key = 'AvizXSBnS6eXAP8bu7EvtKpk';
  var url = 'https://www.theyworkforyou.com/api/getConstituency?key=' + key + '&postcode=' + postcode;
  // var url = 'http://localhost/They-work/src/getConstituency_response.json';

  $.ajax({
    url: url,
    success: function(response) {
      var name = $.parseJSON(response).name.replace(' ', '+'); 
      url = 'https://www.theyworkforyou.com/api/getGeometry?key=' + key + '&name=' + name;

      $.ajax({
        url: url,
        success: function(response) {
          console.log('success!');
          console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('error!');
          console.log('jqXHR: ', jqXHR);
          console.log('textStatus: ', textStatus);
          console.log('errorThrown: ', errorThrown);
        }
      });  
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('error!');
      console.log('jqXHR: ', jqXHR);
      console.log('textStatus: ', textStatus);
      console.log('errorThrown: ', errorThrown);
    }
  });  
}
