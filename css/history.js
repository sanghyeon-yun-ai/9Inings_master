$(document).ready(function () {
  // $(".menu1").show();
  // tab 높이 맞추기
  $(".tab").each(function () {
    var h = 0;
    $(this).each(function () {
      if ($(this).height() > h) h = $(this).height();
    });
    $(this).height(h);
  });
  //메뉴 클릭 이벤트
  $(".tab li").click(function () {
    let current = $(this).attr("data-tab");
    //.wrap .tab li에 클래스on 지워라.
    $(".wrap .tab li").removeClass("active");
    $(".company_history").removeClass("active");
    //클릭된나의 속성중 data-tab 을 가지고와서 클래스 on 을 붙여라.
    $(this).addClass("active");
    $("#" + current).addClass("active");
  }); //click
});
