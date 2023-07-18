function countInversions(arr) {
    let inversions = 0;
  
    function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
  
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
  
      return merge(left, right);
    }
  
    function merge(left, right) {
      const merged = [];
      let leftIndex = 0;
      let rightIndex = 0;
  
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
          merged.push(left[leftIndex]);
          leftIndex++;
        } else {
          // If the current element in the left array is greater than the current element in the right array,
          // it means we have an inversion for all the remaining elements in the left array.
          inversions += left.length - leftIndex;
          merged.push(right[rightIndex]);
          rightIndex++;
        }
      }
  
      // Add the remaining elements from left and right arrays 
      merged.push(...left.slice(leftIndex));
      merged.push(...right.slice(rightIndex));
  
      return merged;
    }
  
    mergeSort(arr);
    return inversions;
  }

  const arr = [2, 4, 1, 3, 5];
  console.log(countInversions(arr));
  