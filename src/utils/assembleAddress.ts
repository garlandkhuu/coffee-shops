import { Location } from '../interfaces';

/**
 * Assembles location data to formats it into an address
 * @param {String | undefined} name Name of the shop
 * @param {Location} location Location object from fetching shop details
 * @returns the name and full address of a coffee shop
 */
const assembleAddress = (name: string | undefined, location: Location) => {
  const { address = '', locality = '', region = '', postcode = '' } = location;

  return `${name} ${address}, ${locality}, ${region} ${postcode}`;
};

export default assembleAddress;
