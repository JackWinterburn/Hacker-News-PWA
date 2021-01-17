import moment from "moment";

export const getTimeFrom = (time: number) => {
  let timePosted = new Date(time * 1000);

  const year = timePosted.getFullYear();
  const month = ("0" + timePosted.getMonth()).slice(-2);
  const day = ("0" + timePosted.getDate()).slice(-2);
  const hours = ("0" + timePosted.getHours()).slice(-2);
  const minutes = ("0" + timePosted.getMinutes()).slice(-2);

  let newTime = moment([year, month, day, hours, minutes]).fromNow();
  return newTime;
};
