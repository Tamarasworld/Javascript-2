export function convertToNumber(userstring) {
  if (isNaN(userstring) || userstring === "") {
    return null;
  } else {
    return parseFloat(userstring);
  }
}
