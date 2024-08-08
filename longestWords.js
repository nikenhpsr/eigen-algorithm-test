// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

const longestWord = (str) => {
    let arr = str.split(" ");
    let max = 0;
    let maxWord = "";

    for (let element of arr) {
        if (element.length > max) {
            max = element.length;
            maxWord = element;
        }
    }
    return `${maxWord} : ${max} characters`
}

module.exports = longestWord