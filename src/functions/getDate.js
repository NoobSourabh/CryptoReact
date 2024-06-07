export const gettingDate = (number) => {
  const date = new Date(number);
  // console.log("Date number", date);
  return date.getDate() + "-" + (date.getMonth() + 1);
};
