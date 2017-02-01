GetData = function() {
  this.key = 'AvizXSBnS6eXAP8bu7EvtKpk';
  // this.url = 'https://www.StateOfPartiesforyou.com/api/getMPs?key=' + this.key;
  // var url = 'http://127.0.0.1/DLT_DataVis_They-work/src/getMPs_response.json';
};

GetData.prototype._getData = function(url) {
  console.log('getData!');

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
  });
}

GetData.prototype.getConstituencyFromPostcode = function(postcode) {
  console.log('getConstituencyFromPostcode!');
  console.log(postcode);

  var postcode = postcode.replace(/[^a-z|0-9]/g, '');
  var url = 'https://www.theyworkforyou.com/api/getConstituency?key=' + this.key + '&postcode=' + postcode;

  this._getData(url);
}
