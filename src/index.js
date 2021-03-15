module.exports = function toReadable (number) {
  let result = [];
  let numberTo19 = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let dozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let hundreds = ['','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
  let arrNumbers = [];
  if(number < 20) {
    for(let i = 0; i < numberTo19.length; i++) {
      if(number == i) return numberTo19[i];
    }
  } 
  else if(number > 19 && number < 100) {
    arrNumbers = number.toString().split('');
    for(let i = 0; i < dozens.length; i++) {
      if(arrNumbers[0] == i) {
        result = dozens[i];
      }
    }
    if(arrNumbers[1] != '0') {
      for(let i = 1; i < numberTo19.length; i++) {
        if(arrNumbers[1] == i) {
          result += ' ' + numberTo19[i];
          return result;
        }
      }
    } else {
      return result;
    }
  }
  else if(number > 99 && number < 1000) {
    arrNumbers = number.toString().split('');
    for(let i = 0; i < hundreds.length; i++) {
      if(arrNumbers[0] == i) {
        result = hundreds[i];
      }
    }
    if(arrNumbers[1] != '0' && arrNumbers[1] != '1') {
      for(let i = 1; i < dozens.length; i++) {
        if(arrNumbers[1] == i) {
          result += ' ' + dozens[i];
        }
      }
    } else if(arrNumbers[1] == '1') {
      for(let i = 10; i < numberTo19.length; i++) {
        if(arrNumbers[1] + arrNumbers[2] == i) {
          result += ' ' + numberTo19[i];
          return result;
        }
      }
    }else {
      result = result;
    }
    if(arrNumbers[2] != '0') {
      for(let i = 1; i < numberTo19.length; i++) {
        if(arrNumbers[2] == i) {
          result += ' ' + numberTo19[i];
          return result;
        }
      }
    } else {
      return result;
    }
	}
}
