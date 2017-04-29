var ip, myData, city, cityurl, notecount;
$(document).ready(function(){
  var notecount = 0;
  if($.cookie("notecount") != null){
  notecount = $.cookie("notecount");
  }
  for(i=0;i < notecount; i++){
  $("#notehistory").append("<p class=$.cookie('theme')>" +  $.cookie("note" + i).split(',')[0] + " <input type = button id =" + i + " class=notebutt></input></p>");
  }
  //get ip of user
  $.ajax({
    type: 'GET',
    url: 'https://api.ipify.org',
    data1: { get_param: 'value' },
    async: false,
    success: function (data1) {
        ip = data1;
       }
  });
  //get cityurl of IP address with Teleport API main
  $.ajax({
      type: 'GET',
      url: 'http://api.teleport.org/api/ipaddresses/' + ip,
      async: false,
      success: function (data) {
          myData = data;
          city = myData['_links']['ip:city']['name'];
          cityurl = myData['_links']['ip:city']['href'];
         }
  });
  //get city and state of IP address
  $.ajax({
      type: 'GET',
      url: cityurl,
      async: false,
      success: function (data) {
          myData = data;
          var city = myData['full_name'].split(',')[0];
          var state = myData['full_name'].split(',')[1];
          $("#main").html(city + ", " + state);
         }
  });
  //get weather data for city using weather.co API
  $.ajax({
    type: 'GET',
    url: 'http://weathers.co/api.php?city=' + city,
    async:false,
    success: function (data) {
    myData = data;
    var objdata = JSON.parse(myData);
    $("#main").append("<br>" + objdata.data.day + "<br>" + objdata.data.date);
     $.each(objdata.data, function(index, element) {
      if(index != "location" && index != "date" && index != "day"){
       $('#weather').append((index.charAt(0).toUpperCase()+ index.slice(1)) + ": " + element + " <br>");
      }
     });
    }
  });
  //Add new note for web page
  $("#note").click(function(){
    $("#newnote").show();
  });
  //cancel note being added
  $("#cancel").click(function(){
    $("#newnote").hide();
  });
  //submit new note to note history
  $("#addnote").click(function(){
    if($("#notetitle").val() != null){
      if($("#notebody").val() != null){
        $.cookie('note' + notecount, ($("#notetitle").val() + "," + $("#notebody").val()));
        $("#notehistory").append("<p class=$.cookie('theme')>"  +  $.cookie("note" + notecount).split(',')[0] + "<input type = button id =" + notecount + " class=notebutt></input></p>");
        $.cookie("notetitle" + notecount, $('#notetitle').val());
        $("#notetitle").val(null);
        $("#notebody").val(null);
        $("#newnote").hide();
        notecount++;
      }
    }
    $.cookie("notecount", notecount);
  });
  //go to settings page
  $("#settings").click(function(){
    window.location.href = 'settings.html';
  });
  $('input.notebutt').click(function(){
      window.location.href= 'Note.html';
      var id = $(this).attr('id');
      console.log(id);
      console.log("poo");
      $.cookie("i" , id);
  });
});
