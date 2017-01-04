document.addEventListener('DOMContentLoaded', init, false);

function init() {
  console.log('init!')

  getData();
  // drawData();
}

function getData() {
  console.log('getData!');

  // var key = 'AvizXSBnS6eXAP8bu7EvtKpk';
  // var url = 'https://www.theyworkforyou.com/api/getMPs?key=' + key;
  var url = 'http://127.0.0.1/DLT_DataVis_They-work/src/getMPs_response.json';

  // app.constituencies = [];

  $.ajax({
    // dataType: 'jsonp',
    url: url,
    success: function(response) {
      console.log('success!');
      console.log('response: ', response);

      /*
      for (var prop in response) {
        // console.log('response.' + prop + ' = ' + response[prop]);
        app.constituencies.push(response[prop]);
      }

      // console.log('constituencies: ', app.constituencies);
      */

      /*
      response.forEach(function(constituency) {
        app.constituencies.push(constituency.name.toLowerCase());
      });
      */
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('error!');
      console.log('jqXHR: ', jqXHR);
      console.log('textStatus: ', textStatus);
      console.log('errorThrown: ', errorThrown);
    }
  });
}

function drawData() {
  console.log('drawData!');

  var dataset = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
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
      return h - d;
    })
    .attr('width', w / dataset.length - barPadding)
    .attr('height', function(d) {
      return d;
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
      return d;
    })
    .attr('x', function(d, i) {
      return (i * (w / dataset.length)) + ((w / dataset.length - barPadding) / 2);
    })
    .attr('y', function(d) {
      return h - d - 5;
    })
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '1em');
}
