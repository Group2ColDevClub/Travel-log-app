
function formatPrice(price) {
  return (price / 1000).toFixed(2);
}

function getDateTime(dateTimeObj) {
  const formattedDate = new Date(
    dateTimeObj.year,
    dateTimeObj.month - 1,
    dateTimeObj.day,
    dateTimeObj.hour,
    dateTimeObj.minute,
    dateTimeObj.second
  );
  return formattedDate;
}

module.exports = {
  formatPrice,
  getDateTime,
};
