/**
 * Parses the price field in a place fetched from Foursquare API into money symbols for display
 * @param {Number} price price rating
 * @returns Money symbols indicating price range of shop
 */
const parsePrice = (price: number) => {
  switch (price) {
    case 1:
      return '$';
    case 2:
      return '$$';
    case 3:
      return '$$$';
    case 4:
      return '$$$$';
    default:
      return '';
  }
};

export default parsePrice;
