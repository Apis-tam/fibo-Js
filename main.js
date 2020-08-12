document.getElementById("btnOk").addEventListener("click", () => {
  let res = document.getElementById("result");
  let num = Number(document.getElementById("input").value);
  startNum = [0, 1];
  for (let i = 1; i <= num; i++) {
    let firstNum = startNum[i - 1];
    let secondNum = startNum[i];
    startNum.push(firstNum + secondNum);
  }
  res.innerText = startNum[num - 1];
});
