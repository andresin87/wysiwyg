/**
 * @license Copyright (c) UserZoom 2016. All Rights Reserved. http://www.userzoom.com/
 *
 * Proprietary and confidential
 *
 * NOTICE: All information contained herein is, and remains the property
 * of UserZoom Technologies SL. The intellectual and technical concepts
 * contained herein are proprietary to UserZoom Technologies SL and
 * may be covered by U.S. and Foreign Patents, patents in process, and are
 * protected by trade secret or copyright law. Dissemination of this
 * information or reproduction of this material is strictly forbidden unless
 * prior written permission is obtained from UserZoom Technologies SL.
 *
 * @company UserZoom Technologies SL
 * @project uz-wysiwig
 * @file    index
 * @author  UserZoom R&D
 * @email   rd@userzoom.com
 * @date    2016-12-15
 * @summary empty.
 */
export function forEach(obj, callback) {
  if (obj) {
    for (const key in obj) { // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key)) {
        callback(key, obj[key]);
      }
    }
  }
}

/**
 * The function returns true if the string passed to it has no content.
 */
export function isEmptyString(str) {
  if (str === undefined || str === null || str.length === 0 || str.trim().length === 0) {
    return true;
  }
  return false;
}

/**
 * The function will return true for simple javascript object,
 * which is not any other built in type like Array.
 */
export function isMap(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export const mergeRecursive = (obj1, obj2) => {
  if (obj1 && obj2 === undefined) {
    return obj1;
  }
  const mergedValue = {};
  forEach(obj1, (key, value) => {
    if (isMap(value)) {
      mergedValue[key] = mergeRecursive(value, obj2[key]);
    } else {
      mergedValue[key] = obj2[key] !== undefined ? obj2[key] : value;
    }
  });
  return mergedValue;
};
