const arr1 = ["Darie", "Todd", "Zach", "Jonathan", "Manny"];

function findString(arr) {
  if (arr.indexOf("Ahmed") !== -1) {
    return "Congrats, it is included";
  } else {
    return "Nope, try again ";
  }
}

console.log(findString(arr1));

//--------------------------------------------------------

// both work

function findString(friendList, name) {
  for (let i = 0; i < friendList.length; i++) {
    if (friendList[i] === name) {
      return true;
    }
  }
  return false;
}

console.log(findString(arr1));
