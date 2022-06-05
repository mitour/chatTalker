$(document).ready(function () {
  // Initialize Swiper
  initSwiper();

  // case
  // https://github.com/iamAmberhh/chatTalker/blob/master/js/charge.js
  const caseOptions = document.querySelector("#caseOptions");
  const subsCount = document.querySelectorAll(".subsCount"); // [0]:基本訂閱數、[1]:標準訂閱數
  const bacisFee = document.querySelector(".bacisFee");
  const standardFee = document.querySelector(".standardFee");

  const plan = [
    {
      planName: "10000位",
      subsCount: 10000,
      bacisFee: 600,
      standardFee: 1600,
    },
    {
      planName: "15000位",
      subsCount: 15000,
      bacisFee: 500,
      standardFee: 1500,
    },
    {
      planName: "20000位",
      subsCount: 20000,
      bacisFee: 400,
      standardFee: 1400,
    },
    {
      planName: "25000位",
      subsCount: 25000,
      bacisFee: 300,
      standardFee: 1300,
    },
    {
      planName: ">25000位",
      subsCount: ">25000",
      bacisFee: 200,
      standardFee: 1200,
    },
  ];

  // toggle item
  $(".caseItem").click(function () {
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
  });
  // dynamic content
  caseOptions.addEventListener("click", function (e) {
    plan.forEach((item) => {
      if (e.target.textContent === item.planName) {
        subsCount[0].textContent = item.subsCount;
        subsCount[1].textContent = item.subsCount;
        bacisFee.textContent = item.bacisFee;
        standardFee.textContent = item.standardFee;
      }
    });
  });
});
function initSwiper() {
  // https://hackmd.io/itEybVN0S9uUxiNbpY7-Xw
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
