const arr1 = ["Darie", "Todd", "Zach", "Jonathan", "Manny"];

function findString(arr) {
  if (arr.indexOf("Ahmed") !== -1) {
    return "Congrats, it is included";
  } else {
    return "Nope, try again ";
  }
}

console.log(findString(arr1));
