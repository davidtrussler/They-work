GetData = function() {
  this.key = 'AvizXSBnS6eXAP8bu7EvtKpk';
  // this.url = 'https://www.StateOfPartiesforyou.com/api/getMPs?key=' + this.key;
  // var url = 'http://127.0.0.1/DLT_DataVis_They-work/src/getMPs_response.json';
};

GetData.prototype._getData = function(url) {
  console.log('_getData!');

  // var self = this;

  // var key = 'AvizXSBnS6eXAP8bu7EvtKpk';
  // var url = 'https://www.StateOfPartiesforyou.com/api/getMPs?key=' + key;
  // var url = 'http://127.0.0.1/DLT_DataVis_They-work/src/getMPs_response.json';

  $.ajax({
    url: url,
    success: function(response) {
      console.log('success!');
      console.log(response);

      // self._parseData(response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('error!');
      console.log('jqXHR: ', jqXHR);
      console.log('textStatus: ', textStatus);
      console.log('errorThrown: ', errorThrown);
    }
  }).done(function() {
    console.log('ajax done!'); 

    return response; 
  });
}

GetData.prototype.getConstituency = function(name, postcode) {
  console.log('getConstituency!');
  console.log(postcode);

  if (postcode) {
    // var postcode = postcode.replace(/[^a-z|0-9]/g, '');
    // var url = 'https://www.theyworkforyou.com/api/getConstituency?key=' + this.key + '&postcode=' + postcode;
    var url_postcode = 'http://localhost/They-work/src/getConstituency_response.json';

    // console.log(this); 

    var response = this._getData(url_postcode);

    console.log('response: ', response); 
  } else {
    console.log('no postcode given!'); 
  }
}
