import placesAxios from './config';

const getCoffeeShopList = async (
  locality: string,
  pageLink: string | undefined = ''
) => {
  try {
    const res = await placesAxios.get(
      pageLink ||
        `places/search?categories=13034,13035&fields=fsq_id,name,photos,categories,rating,price,location&near=${locality}`
    );
    const { data } = res;
    // This is just a test url for pagination as I am having difficulties getting the actual pagination url
    // TODO: get real pagination url from response headers
    const nextPageLink = `places/search?categories=13034,13035&fields=fsq_id,name,photos,categories,rating,price,location&near=${locality}`;
    return { ...data, nextPageLink };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getCoffeeShopList;
