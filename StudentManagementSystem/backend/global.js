exports.formatdate = (date = "") => {
  // const time = new Date()
  //   .toLocaleString({
  //     // hour12: true,
  //     hourCycle: "h24",
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //     hour: "numeric",
  //     minute: "numeric",
  //     second: "numeric",
  //   })
  //   .replaceAll("/", "-");
  // .replaceAll(":", "")
  // .replaceAll(" ", "T");
  // console.log(time);
  // return time;
  let d = new Date();
  if (date) d = new Date(date);
  let yyyy = d.getFullYear();
  let mm = d.getMonth() + 1;
  let dd = d.getDate();
  let formatedDate = `${yyyy}-${mm}-${dd}`;
  return formatedDate;
};
