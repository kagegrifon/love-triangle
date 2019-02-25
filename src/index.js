/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let loveTriangleCount = 0;
  const arr = preferences.map(i => i - 1);
  const triangleArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[arr[arr[i]]] === i
      && !triangleArr.includes(i)
      && arr[i] !== arr[arr[i]]
      && arr[arr[i]] !== arr[arr[arr[i]]]
    ) {
      loveTriangleCount++;
      triangleArr.push(
        arr[i],
        arr[arr[i]],
        arr[arr[arr[i]]]
      );
    }
  }

  return loveTriangleCount;
};
