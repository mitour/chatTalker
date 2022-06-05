// https://hackmd.io/itEybVN0S9uUxiNbpY7-Xw
// Initialize Swiper
function initSwiper() {
  let swiper = new Swiper(".swiper", {
    /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      992: {
        slidesPerView: 3,
      },
      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      768: {
        slidesPerView: 2,
      },
      /* 更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1,
      },
    },
    /* 卡片元素的間隔 */
    spaceBetween: 16,
    // Cursor
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
initSwiper();
