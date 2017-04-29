$(document).ready(function(){
  var i = $.cookie('i');
  $("#notehead").val($.cookie('note' + i).split(",")[0]);
  $("#notebod").val($.cookie('note' + i).split(",")[1]);
  $("#back").click(function(){
    window.location.href = 'main.html';
  });
  $("#save").click(function(){
    $.cookie('note' + i, ($("#notehead").val() + "," + $("#notebod").val()));
    $.cookie("notetitle", $("#notehead").val());
    window.location.href = 'main.html';
  });
});
