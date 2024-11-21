// const promptList = document.querySelector("#promptList");
// console.log(`hintList is `, promptList);
// const items = promptList.querySelectorAll(".item");
// let currentIndex = 0;
// const DURATION = 1500; // 每项显示的时长（毫秒）
// const TRANSITION_DURATION = 500; // 过渡时间（毫秒）
//
// function showNextItem() {
//   // 隐藏当前项
//   items[currentIndex].classList.add("-m-8");
//   // items[currentIndex].classList.remove("fade-in");
//   setTimeout(() => {
//     items[currentIndex].classList.add("hidden");
//     // items[currentIndex].classList.remove("fade-out");
//   }, TRANSITION_DURATION);
//
//   // 计算下一个索引
//   currentIndex = (currentIndex + 1) % items.length;
//
//   // 显示下一个项
//   items[currentIndex].classList.remove("hidden");
//   // 强制重绘以确保过渡效果
//   void items[currentIndex].offsetWidth;
//   // items[currentIndex].classList.add("fade-in");
// }
//
// // 初始化：隐藏所有项，显示第一个
// items.forEach((item, index) => {
//   if (index !== 0) {
//     item.classList.add("hidden");
//   }
// });
//
// // 设置轮播间隔
// setInterval(showNextItem, DURATION);
