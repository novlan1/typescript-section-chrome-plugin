window.onload = function () {
  main();
};

function main() {
  const titles = getTitles();
  addSmallLi(titles);
}

function getTitles() {
  const container = document.querySelector('.post-content');
  if (!container) {
    return;
  }
  const res = [];
  const titles = container.getElementsByTagName('h1');
  [...titles].forEach((item) => {
    item.id = item.innerText;
    res.push({
      text: item.innerText,
      id: item.id,
    });
    item.innerHTML = `<a href="#${item.id}" style="color:#152740">${item.innerText}</a>`;
  });
  // console.log(res);
  return res;
}

function addSmallLi(liList) {
  const activeSection = document.querySelector('#toc-handbook li a.active');
  const activeLi = activeSection.parentNode;
  const allHtml = composeLiHtml(liList);
  activeLi.innerHTML = activeLi.innerHTML + allHtml;
}

function composeLiHtml(liList) {
  let html = '<ul style="margin-left:-38px;">';
  liList.map((item) => {
    html += `<li class="own-li"><a href="#${item.id}" style="font-size:13px;color:#337ab7;">${item.text}</a></li>`;
  });
  html += '</ul>';
  return html;
}
