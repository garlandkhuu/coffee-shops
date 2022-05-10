/**
 * Assembles a url for a shop fetched from Foursquare's Place API
 * @param {String} prefix prefix of image url (from api response)
 * @param {String} suffix suffix of image url (from api response)
 * @param {String} size dimensions of picture (ex: "500x500")
 * @returns A coherent url for a picture
 */
const assemblePhotoUrl = (prefix: string, suffix: string, size: string) =>
  `${prefix}${size}${suffix}`;

export default assemblePhotoUrl;
