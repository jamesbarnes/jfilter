window.onload = function() { init() };
var public_spreadsheet_url = config.mySheet;;
var sections = [];
var sheet = []
var mychapter = []
var mysection = []
function init() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {
  sheet = data;
  for(i=0; i<data.length; i++){
    // console.log(data[i].element);
    //adds parsed chapterid values to secitons array
    sections.push(parseInt(data[i].chapterid));
  }
  //prints sections to console; underscore method
  // console.log(_.uniq(sections));
  listSheet(sheet);
}

function listSheet(sheet){
  for(i=0;i<sheet.length;i++){
    switch(sheet[i].type){
      
      case "Heading 1":
      $(".contentdiv").append("<h1>"+sheet[i].element+"</h1>");
      break;

      case "Heading 2":
      $(".contentdiv").append("<h2>"+sheet[i].element+"</h2>");
      break;

      case "Heading 3":
      $(".contentdiv").append("<h3>"+sheet[i].element+"</h3>");
      break;

      case "List Item":
      if (sheet[i-1].type !="List Item"){
        var list = $('<ul/>').appendTo(".contentdiv");
        var x = 0;
        while (sheet[i+x].type =="List Item"){
          list.append("<li>"+sheet[i+x].element+"</li>");
          x++;
          }
      }
      break;

      case "Video":
      $(".contentdiv").append("<iframe width='853' height='480' src='"+sheet[i].element+"' frameborder='0' allowfullscreen></iframe>");
      break;

      case "Video Caption":
      $(".contentdiv").append("<p><em>"+sheet[i].element+"</p></em>");
      break;

      default:
      $(".contentdiv").append("<p>"+sheet[i].element+"</p>");
      break;
    }
  }
}