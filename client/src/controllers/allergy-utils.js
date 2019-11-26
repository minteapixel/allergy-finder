// sanitize/validate data & convert string into array of elements

function sanitizeInput(str) {
  if(str.match(/<\/?[a-z][a-z0-9]*>/ig)) {
    return 'error: Please enter valid input.';
  }
  return str;
}

function convertToArray(str) {
  return str
    .replace(/\s*(AND|;)\s*/ig, ",")
    .split(',')
    .toLowerCase()
    .map(item => item.trim())
    .sort();
}

// compare two arrays and return any matching elements
function compareProducts(arr1, arr2) {
    const matchedElements = arr1.filter((el => arr2.includes(el))).sort();
    if (!matchedElements) {
      return "error: please enter ingredients for all products";
    }
    return (matchedElements[0] == undefined ? false : matchedElements);
}

export { sanitizeInput, convertToArray, compareProducts };