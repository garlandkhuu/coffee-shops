import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getCoffeeShopList from '../api/getCoffeeShopList';
import { setCoffeeShopList } from '../store/app';
import { CoffeeShopListResult, GlobalState } from '../interfaces';

/**
 * Hook for retrieving a list of coffee shops with Foursquare's Place Search API
 * @param {String} pageLink the link returned by the previous coffee shop list fetch
 *  for lazy loading data for the next "page"
 * @param {Number} pageNum the current page number for lazy loading
 * @returns {Object} object containing list of results, link for next page fetch, loading state, and error
 */
const useCoffeeShopList = (pageLink: string, pageNum: number) => {
  const coffeeShopList = useSelector(
    (state: GlobalState) => state.app.coffeeShopList
  );
  const locality = useSelector((state: GlobalState) => state.app.locality);
  const [nextPageLink, setNextPageLink] = useState<string>('');
  const [prevLocality, setPrevLocality] = useState<string>(locality);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (locality) {
      const fetchCoffeeShopList = async () => {
        setLoading(true);
        setError(false);

        //Reset the coffee shop list if locality changes
        if (locality !== prevLocality) {
          setPrevLocality(locality);
          dispatch(
            setCoffeeShopList({
              coffeeShopList: [],
              append: false,
            })
          );
        }

        try {
          const data = await getCoffeeShopList(locality, pageLink);
          const shopList: CoffeeShopListResult[] = data.results;
          const { nextPageLink: paginationLink } = data;
          setNextPageLink(paginationLink);

          dispatch(
            setCoffeeShopList({
              coffeeShopList: shopList,
              append: true,
            })
          );
          setLoading(false);
        } catch (e) {
          setError(true);
          setLoading(false);
        }
      };

      fetchCoffeeShopList();
    }
  }, [dispatch, locality, pageLink, pageNum, prevLocality]);

  return { coffeeShopList, nextPageLink, loading, error };
};

export default useCoffeeShopList;
