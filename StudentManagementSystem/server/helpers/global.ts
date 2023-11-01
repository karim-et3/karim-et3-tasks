const formatdate = (date = "") => {
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

const renameKeys = (
  obj: Record<string, any>,
  keyMap: Record<string, string>
): Record<string, any> => {
  return Object.keys(obj).reduce((acc: Record<string, any>, key: string) => {
    acc[keyMap[key] || key] = obj[key];
    return acc;
  }, {});
};

export { formatdate, renameKeys };
