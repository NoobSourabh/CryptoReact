export const convertNumber = (number) => {
  // Convert number to string with commas as thousand separators
  const numberWithCommas = number.toLocaleString();
  // Split the string into an array by commas
  var arr = numberWithCommas.split(",");

  // Determine the grouping pattern based on the length of the array
  if (arr.length >= 6) {
    // Trillions or higher (handles numbers with more than 12 digits)
    return arr[0] + "." + arr[1].slice(0, 2) + "T";
  } else if (arr.length === 5) {
    // Billions (Western) or Lakhs (Indian)
    return arr[0] + "." + arr[1].slice(0, 2) + "B";
  } else if (arr.length === 4) {
    // Millions (Western) or Lakhs (Indian)
    return arr[0] + "." + arr[1].slice(0, 2) + "M";
  } else if (arr.length === 3) {
    // Thousands (Western) or Thousands (Indian)
    return arr[0] + "." + arr[1].slice(0, 2) + "K";
  } else {
    // Hundreds
    return numberWithCommas;
  }
};
