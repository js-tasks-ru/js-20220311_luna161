/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  let sortDirection = {
    asc: 1,
    desc: -1
  };

  let direction = sortDirection[param];

  let tmpArray = arr.slice();

  return tmpArray.sort( (a, b) => a.localeCompare(b , "ru", {caseFirst: "upper"})* direction)
}
