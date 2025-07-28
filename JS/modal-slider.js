// 모달/슬라이더 함수
// 이 함수는 버튼과 모달, 이미지 슬라이드 동작을 한 번에 연결해줍니다.
// setupModal({ ... }) 형태로 각 모달마다 호출해서 사용합니다.
function setupModal({
  modalId, // 모달(오버레이) 요소의 id
  openBtnId, // 모달을 여는 버튼의 id
  closeBtnId, // 모달을 닫는 X 버튼의 id
  imgId, // 슬라이드 이미지를 표시할 img 태그의 id
  prevBtnId, // 이전(왼쪽) 화살표 버튼의 id
  nextBtnId, // 다음(오른쪽) 화살표 버튼의 id
  images, // 이미지 파일 경로 배열
}) {
  // 각 요소를 id로 가져옵니다.
  const modal = document.getElementById(modalId); // 모달 전체(오버레이)
  const openBtn = document.getElementById(openBtnId); // 모달 여는 버튼
  const closeBtn = document.getElementById(closeBtnId); // X 닫기 버튼
  const img = document.getElementById(imgId); // 이미지 표시 영역
  const prevBtn = document.getElementById(prevBtnId); // 이전 화살표 버튼
  const nextBtn = document.getElementById(nextBtnId); // 다음 화살표 버튼
  let idx = 0; // 현재 보여줄 이미지의 인덱스(0부터 시작)

  // 이미지를 실제로 보여주는 함수
  function showImage(i) {
    img.src = images[i]; // 이미지 경로 변경
    img.alt = `슬라이드 이미지 ${i + 1}`; // 접근성 alt 텍스트
  }

  // [1] 버튼 클릭 시 모달 열기 + 첫 번째 이미지 보여주기
  openBtn.addEventListener("click", () => {
    modal.classList.add("active"); // 모달 보이게
    idx = 0; // 항상 첫 이미지부터 시작
    showImage(idx);
    closeBtn.focus(); // 접근성: X버튼에 포커스
  });

  // [2] X 버튼 클릭 시 모달 닫기
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active"); // 모달 숨기기
  });

  // [3] 이전(왼쪽) 화살표 클릭 시 이전 이미지로 이동
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지(모달 닫힘 방지)
    idx = (idx - 1 + images.length) % images.length; // 순환
    showImage(idx);
  });

  // [4] 다음(오른쪽) 화살표 클릭 시 다음 이미지로 이동
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지(모달 닫힘 방지)
    idx = (idx + 1) % images.length; // 순환
    showImage(idx);
  });

  // [5] 모달 바깥(오버레이) 클릭 시 모달 닫기
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      // 오버레이(배경)만 클릭한 경우
      modal.classList.remove("active");
    }
  });

  // [6] ESC 키 누르면 모달 닫기
  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active") && e.key === "Escape") {
      modal.classList.remove("active");
    }
  });
}
