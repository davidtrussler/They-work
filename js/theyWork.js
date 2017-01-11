/*
 * Displays number of MPs in each party
 */

'use strict';

var TheyWork = function() {
  this.parties = [];
};

TheyWork.prototype.init = function() {
  console.log('init!');
  // console.log('parties: ', this.parties);

  // this.partyData = this._getData();
  // this._setUpPartyOption();

  // console.log('data: ', this.data);

  /*
  .then(function() {
    console.log('promise!');
  });
  */
  // drawData();
  this._getData();
}

TheyWork.prototype._getData = function() {
  console.log('_getData!');

  var self = this;

  // var key = 'AvizXSBnS6eXAP8bu7EvtKpk';
  // var url = 'https://www.theyworkforyou.com/api/getMPs?key=' + key;
  var url = 'http://127.0.0.1/DLT_DataVis_They-work/src/getMPs_response.json';

  $.ajax({
    // dataType: 'jsonp',
    url: url,
    success: function(response) {
      console.log('success!');

      self._parseData();
      // self._drawData(response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('error!');
      console.log('jqXHR: ', jqXHR);
      console.log('textStatus: ', textStatus);
      console.log('errorThrown: ', errorThrown);
    }
  });
}

TheyWork.prototype._parseData = function(response) {
  var self = this;

  console.log('_parseData!');

  // simplified with some data to begin
  this.parties = [
    {'name': 'Labour', 'count': 34},
    {'name': 'Tory scum', 'count': 23}
  ];

  /* create an array of parties
  response.forEach(function(mp) {
    console.log('party: ', mp.party);

    self.parties.forEach(function(party) {
      if (party.name == -1) {
        self.parties.push({
          'name': mp.party,
          'count': 0
        });
      }
    });
  });
  */

  /* create an array of party counts
  response.forEach(function(mp) {
    console.log('party: ', mp.party);

    if (self.parties.indexOf(mp.party) == -1) {
      self.parties.push({
        'name': mp.party,
        'data': mp
      });
    }
  });
  */

  console.log('parties: ', this.parties);
  this._drawData();
}

TheyWork.prototype._drawData = function() {
  console.log('_drawData!');

  var dataset = this.parties; // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  var w = 500;
  var h = 100;
  var barPadding = 1;
  var svg = d3
              .select('body')
              .append('svg')
              .attr('width', w)
              .attr('height', h);

  svg
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', function(d, i) {
      return i * (w / dataset.length);
    })
    .attr('y', function(d) {
      return h - d.count; // h - d;
    })
    .attr('width', w / dataset.length - barPadding)
    .attr('height', function(d) {
      return d.count; // d;
    })
    .attr('fill', function(d) {
      return "rgb(0, 0, " + d * 5 + ")";
    });

  svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
      return d.name; // d;
    })
    .attr('x', function(d, i) {
      return (i * (w / dataset.length)) + ((w / dataset.length - barPadding) / 2);
    })
    .attr('y', function(d) {
      return d.count; // h - d - 5;
    })
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '1em');
}
