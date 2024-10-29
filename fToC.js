function fToC(f) {
  if (typeof f !== 'number') {
    return false;
  }
  return (f - 32) * 5 / 9;
}
