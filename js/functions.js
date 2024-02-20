//Функция для проверки длины строки
function countLength(myString, maxLength) {
  //если строка меньше или равна указанной длине
  return myString.length <= maxLength;
}
countLength('десять сим', 10);

//Функция для проверки, является ли строка палиндромом
function isPalidrome(myString){
  const temp = myString.replaceAll(' ', '');
  const newString = temp.toLowerCase();
  let emptyString = '';
  for(let i = newString.length - 1; i >= 0; i--){
    emptyString += newString[i];
  }
  return emptyString === newString;
}

isPalidrome('БУбуб');
