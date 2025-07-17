// 모달/슬라이더 함수
function setupModal({
  modalId,
  openBtnId,
  closeBtnId,
  imgId,
  prevBtnId,
  nextBtnId,
  images,
}) {
  const modal = document.getElementById(modalId);
  const openBtn = document.getElementById(openBtnId);
  const closeBtn = document.getElementById(closeBtnId);
  const img = document.getElementById(imgId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  let idx = 0;

  function showImage(i) {
    img.src = images[i];
    img.alt = `슬라이드 이미지 ${i + 1}`;
  }

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    idx = 0;
    showImage(idx);
    closeBtn.focus();
  });
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    idx = (idx - 1 + images.length) % images.length;
    showImage(idx);
  });
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    idx = (idx + 1) % images.length;
    showImage(idx);
  });
  // 모달 바깥 클릭 시 닫기
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
  // ESC로 닫기
  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active") && e.key === "Escape") {
      modal.classList.remove("active");
    }
  });
}
