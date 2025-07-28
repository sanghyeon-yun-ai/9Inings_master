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
   // 이미지 배열 (각 모달마다 다른 이미지 설정 가능)
      const images1 = [
        "screen_capture/KakaoTalk_20250714_151247911_01.png",
        "screen_capture/KakaoTalk_20250714_151247911_001.png",
      ];
      const images2 = [
        "screen_capture/KakaoTalk_20250714_152744788.png",
        "screen_capture/KakaoTalk_20250714_152123868_001.png",
        "screen_capture/KakaoTalk_20250714_152123868.png",
        "screen_capture/KakaoTalk_20250714_152123868_002.png",
        "screen_capture/KakaoTalk_20250714_152123868_01.png",
        "screen_capture/KakaoTalk_20250714_152123868_003.png",
      ];
      const images3 = [
        "screen_capture/KakaoTalk_20250714_142651453_01.png",
        "screen_capture/KakaoTalk_20250714_142651453_001.png",
        "screen_capture/KakaoTalk_20250717_170210829_03.png",
        "screen_capture/KakaoTalk_20250714_151247911_05.png",
        "screen_capture/KakaoTalk_20250717_170210829_003.png",
        "screen_capture/KakaoTalk_20250717_170210829_02.png",
        "screen_capture/KakaoTalk_20250717_170210829_002.png",
        "screen_capture/KakaoTalk_20250717_170210829_01.png",
        "screen_capture/KakaoTalk_20250717_170210829_001.png",
        "screen_capture/KakaoTalk_20250717_170210829.png",
        "screen_capture/KakaoTalk_20250717_170210829_00.png",
      ];
      const images4 = [
        "screen_capture/KakaoTalk_20250714_142651453_05.png",
        "screen_capture/KakaoTalk_20250714_142651453_06.png",
        "screen_capture/KakaoTalk_20250714_155437106_09.png",
        "screen_capture/KakaoTalk_20250714_155437106_08.png",
        "screen_capture/KakaoTalk_20250714_155437106_07.png",
        "screen_capture/KakaoTalk_20250714_155437106_06.png",
        "screen_capture/KakaoTalk_20250714_155437106_05.png",
      ];
      const images5 = [
        "screen_capture/KakaoTalk_20250714_142651453_04.png",
        "screen_capture/KakaoTalk_20250714_142651453_03.png",
        "screen_capture/KakaoTalk_20250714_155437106_04.png",
        "screen_capture/KakaoTalk_20250714_155437106_03.png",
        "screen_capture/KakaoTalk_20250714_155437106_02.png",
        "screen_capture/KakaoTalk_20250714_155437106_01.png",
        "screen_capture/KakaoTalk_20250714_155437106.png",
      ];

      // 모달 설정 (원하는 만큼 추가 가능)
      setupModal({
        modalId: "modal1",
        openBtnId: "openModal1",
        closeBtnId: "close1",
        imgId: "img1",
        prevBtnId: "prev1",
        nextBtnId: "next1",
        images: images1,
      });
      setupModal({
        modalId: "modal2",
        openBtnId: "openModal2",
        closeBtnId: "close2",
        imgId: "img2",
        prevBtnId: "prev2",
        nextBtnId: "next2",
        images: images2,
      });
      setupModal({
        modalId: "modal3",
        openBtnId: "openModal3",
        closeBtnId: "close3",
        imgId: "img3",
        prevBtnId: "prev3",
        nextBtnId: "next3",
        images: images3,
      });
      setupModal({
        modalId: "modal4",
        openBtnId: "openModal4",
        closeBtnId: "close4",
        imgId: "img4",
        prevBtnId: "prev4",
        nextBtnId: "next4",
        images: images4,
      });
      setupModal({
        modalId: "modal5",
        openBtnId: "openModal5",
        closeBtnId: "close5",
        imgId: "img5",
        prevBtnId: "prev5",
        nextBtnId: "next5",
        images: images5,
      });