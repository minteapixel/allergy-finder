// validate data
function validateInput(str) {
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
    .filter((item,index,self) => self.indexOf(item)==index)
    .sort();
}

// compare two arrays and return matching elements as a string
function compareProducts(arr1, arr2) {
  if (arr1[0]=="" || arr2[0]=="" ) {
    return { error: 'Please enter valid ingredients.' };
  }
  const matchedElements = arr1.filter((el => arr2.includes(el))).sort().join(", ");
  console.log("matchedElements: ", matchedElements);
  return (
    matchedElements !='' ? {message: matchedElements} : {message: 'None - no matched ingredients'}
  );
}

export { validateInput, convertToArray, compareProducts };