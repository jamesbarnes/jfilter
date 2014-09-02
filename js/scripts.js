window.onload = function() { init() };
var public_spreadsheet_url = config.mySheet;;
var chapters = [];
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
    
    //adds parsed chapterid values to secitons array
    chapters.push(data[i].chaptername);
  }
  //prints sections to console; underscore method
  chapters = _.uniq(chapters);
  listChapters(chapters);
  listSheet(sheet);
}

function listChapters(chapters){
  for(i=0;i<chapters.length;i++){
    $(".contentdiv").append("<h3>"+chapters[i]+"</h3>");
  }
}

function listSheet(sheet){
  for(i=0;i<sheet.length;i++){
    switch(sheet[i].type){
      
      case "Heading 1":
      $(".contentdiv").append("<a name='#"+sheet[i].element.replace(/ /g,"_")+"'></a><h1>"+sheet[i].element+"</h1>");
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

      case "Glossary Item":
      $(".contentdiv").append("<h3>"+sheet[i].element+"</h3>");
      break;

      case "Intro Text":
      $(".contentdiv").append("<p class='summary'>"+sheet[i].element+"</p>");
      break;

      default:
      $(".contentdiv").append("<p>"+sheet[i].element+"</p>");
      break;
    }
  }
}