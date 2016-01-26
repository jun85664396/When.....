$(function(){

  Function.prototype.calculate = function() {
    var start = $("#start").val();
    var grade = $("input[name=grade]:checked").val();

    if(start === ''){
      return;
    }

    var now = new Date();
    var then = new Date(start);
    var pass = now.getTime() - then.getTime();
    then.setMonth(then.getMonth() + Number(grade));
    var gap = then.getTime() - now.getTime();
    pass = Math.floor(pass / (1000 * 60 * 60 * 24));
    gap = Math.floor(gap / (1000 * 60 * 60 * 24));
    pass = Math.round( ( pass / ( 30*grade ) )*100);

    $("#end").val(`${then.getFullYear()}-${then.getMonth()+1}-${then.getDate()}`);
    $("#done").html(gap > 0 ? `${gap} 일 남음..` : `수고하셨습니다.`);
    $(".future").css("background-color","black");
    $(".future").css("opacity",( 1 - pass *0.01 ) );
    $(".future").next().html(`진행률 : ${pass}%`);
  }

  $("#start").change(function(){
    Function.calculate();
  });

  $("input[name=grade]").change(function(){
    Function.calculate();
  });

  $('#start').datepicker();

});
