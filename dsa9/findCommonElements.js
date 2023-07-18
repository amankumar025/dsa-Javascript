function findCommonElements(ar1, ar2, ar3) {
    const commonElements = [];
  
    let i = 0; // Pointer for the first array (ar1)
    let j = 0; // Pointer for the second array (ar2)
    let k = 0; // Pointer for the third array (ar3)
  
    while (i < ar1.length && j < ar2.length && k < ar3.length) {
      if (ar1[i] === ar2[j] && ar2[j] === ar3[k]) {
        commonElements.push(ar1[i]);
        i++;
        j++;
        k++;
      } else if (ar1[i] <= ar2[j] && ar1[i] <= ar3[k]) {
        i++;
      } else if (ar2[j] <= ar1[i] && ar2[j] <= ar3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return commonElements;
  }

  const ar1 = [1, 5, 10, 20, 40, 80];
  const ar2 = [6, 7, 20, 80, 100];
  const ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
  console.log(findCommonElements(ar1, ar2, ar3)); 
  