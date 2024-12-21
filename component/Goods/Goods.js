const goodsGridElem=document.querySelector("#goodsGrid");
const anchorElemList=goodsGridElem.querySelectorAll('a')

anchorElemList.forEach(e=>{
  e.title=e.querySelector('p').textContent;
})