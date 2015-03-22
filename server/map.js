$(document).ready( function () {

  var reader = new FileReader();
  document.getElementById('file').onchange = function(){

  var file = this.files[0];
   console.log(file);
  var reader = new FileReader();
  reader.onload = function(){


    var lines = this.result.split(" ");
    for(var line = 0; line < lines.length; line++){
      console.log(lines[line]);
      }
    };
  reader.readAsText(file);
};

function LoadFile(filename) {
  console.log(filename);
}
  // if ([line].indexOf("/Nounlist") >= 0){
  //   var noun = 3
  // } else if ([line].indexOf(adjlist) >= 0){
  //   var noun = 2
  // } else if ([line].indexOf("/Verblist") >= 0){
  //   var noun = 1
  // } else{
  //   var noun = 0
  // }
  // console.log(noun)




 // var word 1=word 0=space
 // var noun 2=noun 1=adjective 0=other
 // var rfn=Math.floor(Math.random()*21);
 // Random Word Number = rwn
 // if ((noun) == 2)
 // if ((rfn) == 0) {
 //   // apply font x
 // } else if ((rwn) == 1) {
 //   // apply font x
 // } else if ((rwn) == 2) {
 //   // apply font x
 // } else if ((rwn) == 3) {
 //   // apply font x
 // } else if ((rwn) == 4) {
 //   // apply font x
 // } else if ((rwn) == 5) {
 //   // apply font x
 // } else if ((rwn) == 6) {
 //   // apply font x
 // } else if ((rwn) == 7) {
 //   // apply font x
 // } else if ((rwn) == 8) {
 //   // apply font x
 // } else if ((rwn) == 9) {
 //   // apply font x
 // } else if ((rwn) == 10) {
 //   // apply font x
 // } else if ((rwn) == 11) {
 //   // apply font x
 // } else if ((rwn) == 12) {
 //   // apply font x
 // } else if ((rwn) == 13) {
 //     // apply font x
 // } else if ((rwn) == 14) {
 //     // apply font x
 // } else if ((rwn) == 15) {
 //     // apply font x
 // }
//
// var randomnumber=Math.floor(Math.random()*21);
// if ( (randomnumber) > 5 && (randomnumber) < 15) {
//   console.log(randomnumber)
// }
// $('#poop').append(randomnumber);
});
