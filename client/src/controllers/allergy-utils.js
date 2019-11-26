// sanitize/validate data & convert string into array of elements

function sanitizeInput(str) {
  if(str.match(/<\/?[a-z][a-z0-9]*>/ig)) {
    return '';
  }
  return str;
}

function convertToArray(str) {
  return str
    .toLowerCase()
    .replace(/\s*(AND|;)\s*/ig, ",")
    .split(',')
    .map(item => item.trim())
    .sort();
}

// compare two arrays and return any matching elements
function compareProducts(arr1, arr2) {
    const matchedElements = arr1.filter((el => arr2.includes(el))).sort();
    return (matchedElements[0] == undefined ? false : matchedElements);
}

export { sanitizeInput, convertToArray, compareProducts };