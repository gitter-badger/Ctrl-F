var number = Math.floor(Math.random()*2645);

var reader = new Filereader();
reader.onload = function() {
  var text = reader.result
}
reader.readAsText("Namelist.csv")
