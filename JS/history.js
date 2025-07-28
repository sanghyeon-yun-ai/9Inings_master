// 문서가 완전히 로드되면 실행
$(document).ready(function () {
  // .tab 클래스를 가진 각각의 요소에 대해 실행
  $(".tab").each(function () {
    let h = 0; // 최대 높이를 저장할 변수 초기화
    // 현재 .tab 요소(보통 ul 등)에 대해 반복 (사실상 1회 반복)
    $(this).each(function () {
      // 현재 요소의 높이가 h보다 크면 h에 저장
      if ($(this).height() > h) h = $(this).height();
    });
    // 가장 큰 높이로 .tab의 높이를 고정
    $(this).height(h);
  });

  // .tab 하위의 li(탭 버튼)를 클릭했을 때 실행
  $(".tab li").click(function () {
    // 클릭한 li의 data-tab 속성값(.attr의 의미)을 가져옴 (ex: data-tab="tab1")
    let current = $(this).attr("data-tab");

    // 모든 탭 버튼에서 active 클래스 제거
    $(".wrap .tab li").removeClass("active");
    // 모든 .game_history(탭 내용)에서 active 클래스 제거
    $(".game_history").removeClass("active");

    // 클릭한 li(탭 버튼)에 active 클래스 추가
    $(this).addClass("active");
    // 해당하는 id의 .game_history(탭 내용)에 active 클래스 추가
    $("#" + current).addClass("active");
  });
});
