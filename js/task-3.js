function getElementWidth(content, padding, border) {
  let cont = parseInt(content);
  let padd = parseInt(padding);
  let bord = parseInt(border);
  let totalWidth = cont + padd * 2 + bord * 2;
  return `${totalWidth}px`;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
