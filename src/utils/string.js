/**
 * String Manipulations
 *
 * File: /src/configs/dexie.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 * 
 * @see: https://www.lipsum.com/feed/html
 */

// eslint-disable-next-line
"use strict";

export const truncate = function(str, maxLength){
  return (str.length <= maxLength) ? str : str.substring(0, maxLength) + '...';
}