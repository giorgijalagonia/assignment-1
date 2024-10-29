function calculate(a, b, operation) {
  if (typeof a !== 'number' || typeof b !== 'number'){
    return false;
  }
  if (operation === '+'){
    return a + b;
  } else if (operation === '-'){
    return a - b;
  } else if (operation === '*'){
    return a * b;
  } else {
    return false;
  }
}
