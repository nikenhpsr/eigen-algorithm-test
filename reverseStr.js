// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

const reverseStr = (str) => {
  let newStr = "";
  let newNum = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(str[i])) {
      newStr += str[i];
    } else {
      newNum += str[i];
    }
  }
  return newStr + newNum;
};

module.exports = reverseStr;
