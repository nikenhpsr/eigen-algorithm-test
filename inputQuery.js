// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

const inputQuery = (inputs, queries) => {
  const inputCounts = {};
  for (let input of inputs) {
    if (inputCounts[input]) {
      inputCounts[input]++;
    } else {
      inputCounts[input] = 1;
    }
  }

  const result = queries.map((query) => inputCounts[query] || 0);

  return result;
};

module.exports = inputQuery;
