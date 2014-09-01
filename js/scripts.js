window.onload = function() { init() };
var public_spreadsheet_url = config.mySheet;;
var sections = [];
var sheet = []
var mychapter = []
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
  getChapter(sheet,2)

}

//creates an array for a chapter
function getChapter(data,chapter){
  for(i=0; i<data.length; i++){
    if (data[i].chapterid==chapter){
      mychapter.push(data[i]);
    }
  }
}

