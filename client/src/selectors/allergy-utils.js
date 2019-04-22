// convert string into array of elements
function convertToArray(str) {
  return str.split(',').map(item => item.trim()).sort();
}

// compare the two arrays and return any matches
function compareProducts(arr1, arr2) {
    const matchedElements = arr1.filter((element) => arr2.includes(element)).sort();
    // return console.log("matchedElements: ", matchedElements);
    if (!matchedElements) {
      return "Please enter ingredients for all products";
    }
    return (matchedElements[0] == undefined ? null : matchedElements);
}

export { convertToArray, compareProducts };

// ingredient list for cerave
// const cerave = "purified water, glycerin, caprylic/capric triglyceride, behentrimonium methosulfate and cetearyl alcohol, ceteareth-20 and cetearyl alcohol, ceramide 3, ceramide 6-ii, ceramide 1, hyaluronic acid, cholesterol, dimethicone, polysorbate 20, polyglyceryl-3 diisostearate, potassium phosphate, dipotassium phosphate, sodium lauroyl lactylate, cetyl alcohol, disodium edta, phytosphingosine, methylparaben, propylparaben, carbomer, xanthan gum"

// ingredient list for cetaphil
// const cetaphil="water, glycerin, hydrogenated polyisobutene, ceteareth-20, cetearyl alcohol, persea gratissima (avocado) oil, tocopheryl acetate (vitamin e), dimethicone, sodium levulinate, sodium anisate, caprylyl glycol, benzyl alcohol, panthenol, stearoxytrimethylsilane, stearyl alcohol, citric acid, acrylates/ c10-30 alkyl acrylate crosspolymer"