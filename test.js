const reverseStr = require("./reverseStr");
const longestWord = require("./longestWords");
const inputQuery = require("./inputQuery");
const diagonalDifference = require("./determinanMatriks");

describe("reverseStr function", () => {
  it("should reverse the string while keeping the number at the end", () => {
    expect(reverseStr("NEGIE1")).toBe("EIGEN1");
  });

  it("should return an empty string if input is empty", () => {
    expect(reverseStr("")).toBe("");
  });

  it("should handle strings with no numbers correctly", () => {
    expect(reverseStr("ABCD")).toBe("DCBA");
  });

  it("should work with lowercase letters as well", () => {
    expect(reverseStr("abcd1")).toBe("dcba1");
  });
});

describe("inputQuery function", () => {
  it("should correctly count the occurrences of each query in the input array", () => {
    const inputs = ["xc", "dz", "bbb", "dz"];
    const queries = ["bbb", "ac", "dz"];
    const expectedResults = [1, 0, 2]; // 'bbb' occurs once, 'ac' does not occur, 'dz' occurs twice

    expect(inputQuery(inputs, queries)).toEqual(expectedResults);
  });
});

describe("longestWord function", () => {
  it("should find the longest word in a sentence and its length", () => {
    const sentence = "Saya sangat senang mengerjakan soal algoritma";
    expect(longestWord(sentence)).toBe("mengerjakan : 11 characters");
  });
});

describe("diagonalDifference function", () => {
  it("should correctly calculate the absolute difference between the sums of its diagonals", () => {
    const matrix = [
      [1, 2, 0],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(diagonalDifference(matrix)).toBe(3);
  });
});
