import placesAxios from './config';

const getPlaceDetails = async (placeId: string) => {
  try {
    const res = await placesAxios.get(
      `https://api.foursquare.com/v3/places/${placeId}?fields=name,location,categories,description,tel,website,hours,rating,price,photos`
    );
    const { data } = res;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getPlaceDetails;
