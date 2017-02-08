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

  var _this = this;

  var key = 'AvizXSBnS6eXAP8bu7EvtKpk';
  var url = 'https://www.theyworkforyou.com/api/getConstituency?key=' + key + '&postcode=' + postcode;
  // var url = 'http://localhost/DLT_DataVis_They-work/src/getConstituency_response.json';

  $.ajax({
    url: url,
    success: function(response) {
      var name = $.parseJSON(response).name.replace(' ', '+');
      url = 'https://www.theyworkforyou.com/api/getGeometry?key=' + key + '&name=' + name;
      // url = 'http://localhost/DLT_DataVis_They-work/src/getGeometry_response.json';

      $.ajax({
        url: url,
        success: function(response) {
          _this._drawData($.parseJSON(response));
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


FindConstituency.prototype._drawData = function(response) {
  console.log('_drawData!');
  console.log(response);

  $('.map-container svg').remove();

  var dataset = [[response.centre_lat, response.centre_lon]];   // lat/lon of centre of constituency
  var name = response.name;                                     // name of constituency
  var lat = [60.846416, 49.903038];                             // bounding box of UK
  var lon = [-10.619316, 1.76322];                              // bounding box of UK
  var map = 'img/British_Isles_all.svg';
  var w = 617;                                                  // width of map
  var h = 959;                                                  // height of map
  var svg = d3
              .select('.map-container')
              .append('svg')
              .attr('width', w)
              .attr('height', h);

  var xScale =
    d3.scaleLinear()
      .domain([lon[0], lon[1]])   // input
      .range([0, w]);             // output

  var yScale =
    d3.scaleLinear()
      .domain([lat[0], lat[1]])   // input
      .range([0, h]);             // output

  svg
    .append('image')
    .attr('xlink:href', map)
    .attr('width', w)
    .attr('height', h);

  svg
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function(d) {
      return xScale(d[1]);
    })
    .attr('cy', function(d) {
      return yScale(d[0]);
    })
    .attr('r', 5);

  svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function() {
      return response.name;
    })
    .attr('x', function(d) {
      return xScale(d[1]);
    })
    .attr('y', function(d) {
      return yScale(d[0]);
    })
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '0.75em');
}
