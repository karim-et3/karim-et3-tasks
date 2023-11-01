"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameKeys = exports.formatdate = void 0;
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
    if (date)
        d = new Date(date);
    const yyyy = d.getFullYear();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();
    const formatedDate = `${yyyy}-${mm}-${dd}`;
    return formatedDate;
};
exports.formatdate = formatdate;
const renameKeys = (obj, keyMap) => {
    return Object.keys(obj).reduce((acc, key) => {
        acc[keyMap[key] || key] = obj[key];
        return acc;
    }, {});
};
exports.renameKeys = renameKeys;
