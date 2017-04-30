$(document).ready(function() {
  getData();
});

function getData(){

  $.getJSON( "js/data.json", function( data ) {

    var source   = $("#project-template").html();
    var template = Handlebars.compile(source);

    $('#poop').append(template(data));
  });

  //
  // templatedata = {projects:
  //       [
  //         {title:"mazda", subTitle:"svg car loader", tag1:"html", tag2:"svg"},
  //         {title:"lessonup", subTitle:"motion prototyping", tag1:"html", tag2:"svg"},
  //         {title:"scubabear", subTitle:"ludum dare game", tag1:"gamejam", tag2:"construct2", tag3:"SCUBA"},
  //         {title:"marioheader", subTitle:"konami code", tag1:"construct 2", tag2:"easter egg"}
  //       ]};



  // var data = { projects:
  //       [
  //         {title:"mazda", subTitle:"svg car loader", tag1:"html", tag2:"svg"},
  //         {title:"lessonup", subTitle:"motion prototyping", tag1:"html", tag2:"svg"},
  //         {title:"scubabear", subTitle:"ludum dare game", tag1:"gamejam", tag2:"construct2", tag3:"SCUBA"},
  //         {title:"marioheader", subTitle:"konami code", tag1:"construct 2", tag2:"easter egg"}
  //       ]};

}
