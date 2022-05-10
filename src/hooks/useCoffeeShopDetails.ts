import { useEffect, useState } from 'react';

import getPlaceDetails from '../api/getPlaceDetails';
import { CoffeeShop } from '../interfaces';

/**
 * Hook that takes a foursquare place ID and fetches details for that place
 * with the use of Foursquare's Place Details API
 * @param {String} placeId foursquare ID of a specific place
 * @returns {OBject} an object containing the shop details and loading state for the fetch
 */
const useCoffeeShopDetails = (placeId: string | undefined) => {
  const [coffeeShopDetails, setCoffeeShopDetails] = useState<CoffeeShop>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (placeId) {
      const fetchPlaceDetails = async () => {
        setLoading(true);
        const data = await getPlaceDetails(placeId);
        console.log(data);
        setCoffeeShopDetails(data);
        setLoading(false);
      };

      fetchPlaceDetails();
    }
  }, [placeId]);

  return { coffeeShopDetails, loading };
};

export default useCoffeeShopDetails;
