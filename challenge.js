const uniqueCounter = (arr) => {
  // check for an empty arr and return 0
  if(arr.length === 0) return 0;

  // sort the array
  arr.sort((a, b) => a - b);

  // initialize the first pointer
  let i = 0;

  // initialize the navigator pointer
  for(let j = 1; j<=arr.length -1; j++) {

    // when a unique item is found, move first pointer one
    // step up and assign the navigator pointer value to it
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    };
  };
  // return the position of the first pointer after the loop
  return i + 1;
};

console.log(uniqueCounter([1, 2, 3, 4, 5, 7, 2]));