// export function renameKeys<T extends Record<string, any>>(
//   obj: T,
//   keyMap: Record<string, string>,
// ): T {
//   return Object.keys(obj).reduce((acc: Record<string, any>, key) => {
//     acc[keyMap[key] || key] = obj[key];
//     return acc;
//   }, {} as T);
// }
