var check1 = 'yes';
var check2 = 'yes';
$(document).ready(function(){
  if($.cookie("check1") == 'yes'){
    $("#main").show();
  }
  else if ($.cookie("check1") == 'no'){
    $("#main").hide();
  }
  if($.cookie("check2") == 'yes'){
    $("#weather").show();
  }
  else if ($.cookie("check2") == 'no'){
    $("#weather").hide();
  }
  $("body").removeClass($('body').attr('class')).addClass($.cookie("theme"));
  $('#dropbtn').addClass($.cookie("theme"));
  $('#dropbtn').text("Change theme");
  $("#back").click(function(){
    window.location.href = 'main.html';
  });
  $("#save").click(function(){
    $.cookie("theme", $('body').attr('class'));
    if(check1 == "yes"){
    $.cookie("check1", 'yes');
    }
    else if(check1 == "no"){
    $.cookie("check1","no");
    }
    if(check2 == "yes"){
    $.cookie("check2", 'yes');
    }
    else if(check2 == "no"){
    $.cookie("check2","no");
    }
    window.location.href = 'main.html';
  });
  //Drop down buttons and theme selection
  $("#dropbtn").click(function(){
      document.getElementById("myDropdown").classList.toggle("show");
  });
  $("#theme1").click(function(){
      $("body").removeClass($('body').attr('class')).addClass('theme1');
      $("#dropbtn").removeClass($('#dropbtn').attr('class')).addClass('theme1');
      $('#dropbtn').text('Morning Sky');
      document.getElementById("myDropdown").classList.toggle("show");
  });
  $("#theme2").click(function(){
      $("body").removeClass($('body').attr('class')).addClass('theme2');
      $("#dropbtn").removeClass($('#dropbtn').attr('class')).addClass('theme2');
      $('#dropbtn').text('Midnight Lightning');
      document.getElementById("myDropdown").classList.toggle("show");
  });
  $("#theme3").click(function(){
      $("body").removeClass($('body').attr('class')).addClass('theme3');
      $("#dropbtn").removeClass($('#dropbtn').attr('class')).addClass('theme3');
      $('#dropbtn').text('Nature Walk');
      document.getElementById("myDropdown").classList.toggle("show");
  });
  $("#theme4").click(function(){
      $("body").removeClass($('body').attr('class')).addClass('theme4');
      $("#dropbtn").removeClass($('#dropbtn').attr('class')).addClass('theme4');
      $('#dropbtn').text('Dream Land');
      document.getElementById("myDropdown").classList.toggle("show");
  });
  $("#theme5").click(function(){
      $("body").removeClass($('body').attr('class')).addClass('theme5');
      $("#dropbtn").removeClass($('#dropbtn').attr('class')).addClass('theme5');
      $('#dropbtn').text('Shadow Fire');
      document.getElementById("myDropdown").classList.toggle("show");
  });
  //hide location
  $("#hideloc").click(function(){
    if($("#check1").css('background-color') == 'rgb(128, 128, 128)'){
      $("#check1").css('background-color' , 'black');
      check1 = 'no';
    }
    else{
      $("#check1").css('background-color' , 'gray');
      check1 = 'yes';
    }
  });
  //hide weather
  $("#hideweather").click(function(){
    if($("#check2").css('background-color') == 'rgb(128, 128, 128)'){
      $("#check2").css('background-color' , 'black');
      check2 = 'no';
    }
    else{
      $("#check2").css('background-color' , 'gray');
      check2 = 'yes';
    }
  });
  //delete Notes
  $("#deleteNote").click(function(){
      $.removeCookie("notetitle");
      $.removeCookie("notecount");
      for(i=0;i < notecount; i++){
        $.removeCookie("note" + i);
      }
  });
});
