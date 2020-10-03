
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let towelSortedArr = [];
  if (!matrix) return towelSortedArr;
  return towelSortedArr = matrix.reduce((acc, item, idx) => {
    idx % 2 === 0 ? acc.push(...item) : acc.push(...item.reverse())
    return acc
  }, [])
}
