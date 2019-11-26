// validate data
function sanitizeInput(str) {
  if(str.match(/<\/?[a-z][a-z0-9]*>/ig)) {
    return '';
  }
  return str;
}

// sanitize data & convert to array
function convertToArray(str) {
  return str
    .toLowerCase()
    .replace(/\s*(AND|;)\s*/ig, ",")
    .split(',')
    .map(item => item.trim())
    .sort();
}

// compare two arrays and return matching elements
function compareProducts(arr1, arr2) {
  if (arr1[0]=="" || arr2[0]=="" ) {
    return { error: 'Please enter valid ingredients.' };
  }
  const matchedElements = arr1.filter((el => arr2.includes(el))).sort();
  return (!matchedElements ? '' : matchedElements);
}

export { sanitizeInput, convertToArray, compareProducts };