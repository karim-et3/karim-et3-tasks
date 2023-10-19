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
  const yyyy = d.getFullYear();
  const mm = d.getMonth() + 1;
  const dd = d.getDate();
  const formatedDate = `${yyyy}-${mm}-${dd}`;
  return formatedDate;
};
exports.studentMap = {
  first_name: "firstName",
  last_name: "lastName",
  date_of_birth: "dateOfBirth",
  phone_number: "phoneNumber",
};
exports.renameKeys = (obj, keyMap) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[keyMap[key] || key] = obj[key];
    return acc;
  }, {});
};
