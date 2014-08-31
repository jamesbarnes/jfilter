window.onload = function() { init() };

var public_spreadsheet_url = config.mySheet;;

function init() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {
  alert("Successfully processed!")
  console.log(data);
}
