const middle = function (arrayMid) {
  let middleValues = [];
  if (arrayMid.length < 3) {
    return middleValues;
  }else if (arrayMid.length % 2 === 0){ //IF EVEN NUMER
    middleValues.push(arrayMid[(arrayMid.length / 2) - 1]);
    middleValues.push(arrayMid[(arrayMid.length / 2)]);
  }else { //IF ODD NUMBER
    middleValues.push(arrayMid[((arrayMid.length -1) / 2)])
  }
return middleValues;
  };



module.exports = middle;