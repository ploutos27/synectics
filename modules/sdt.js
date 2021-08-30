module.exports = async function (array) {
  const n = array.length // size of array
  const m = array.reduce((a, b) => a + b) / n; // the mean value of the numbers being processed
  return Math.sqrt(array.map(x => Math.pow(x - m, 2)).reduce((a, b) => a + b) / n); // usging sqrt and pow to get the std of the array
}