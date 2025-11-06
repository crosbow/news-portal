export const formateData = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();

  let different = today.getTime() - date.getTime();

  different = different / 1000;

  let month;
  if (different > 2592000) {
    month = Math.floor(different / 2592000);
    different -= month * 2592000;
  }
  let day;
  if (different > 86400) {
    day = Math.floor(different / 86400);
    different -= day * 86400;
  }

  let hour;
  if (different > 3600) {
    hour = Math.floor(different / 3600);
  }

  if (month) {
    return `${month} mon, ${day} day ${hour} hours ago`;
  } else if (day) {
    return `${day} day, ${hour} hours ago`;
  }
};
