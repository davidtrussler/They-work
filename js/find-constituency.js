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

  // this._getData();
}

/*
StateOfParties.prototype._getData = function() {
  console.log('_getData!');

  var self = this;

  // var key = 'AvizXSBnS6eXAP8bu7EvtKpk';
  // var url = 'https://www.StateOfPartiesforyou.com/api/getMPs?key=' + key;
  var url = 'http://127.0.0.1/DLT_DataVis_They-work/src/getMPs_response.json';

  $.ajax({
    url: url,
    success: function(response) {
      console.log('success!');

      self._parseData(response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('error!');
      console.log('jqXHR: ', jqXHR);
      console.log('textStatus: ', textStatus);
      console.log('errorThrown: ', errorThrown);
    }
  });
}
*/

/*
StateOfParties.prototype._parseData = function(response) {
  console.log('_parseData!');

  var self = this;
  var parties = [];

  response.forEach(function(mp) {
    if (self.parties.length == 0) {
      self.parties.push({
        'name': mp.party,
        'count': 1
      });

      parties.push(mp.party);
    } else if (parties.indexOf(mp.party) == -1) {
      self.parties.push({
        'name': mp.party,
        'count': 1
      });

      parties.push(mp.party);
    } else {
      self.parties.forEach(function(party) {
        if (party.name == mp.party) {
          party.count++;
        }
      });
    }
  });

  this._drawData();
}
*/

/*
StateOfParties.prototype._drawData = function() {
  console.log('_drawData!');

  var dataset = this.parties;
  var w = 500;
  var h = 350;
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
      return h - d.count;
    })
    .attr('width', w / dataset.length - barPadding)
    .attr('height', function(d) {
      return d.count;
    })
    .attr('class', function(d) {
      return d.name
              .toLowerCase()
              .replace(/[^a-z]/g, '');
    });

  svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
      return d.name;
    })
    .attr('x', function(d, i) {
      return (i * (w / dataset.length)) + ((w / dataset.length - barPadding) / 2);
    })
    .attr('y', function(d) {
      return d.count;
    })
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '1em');
}
*/
