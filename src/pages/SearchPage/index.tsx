import { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { SearchBarWrapper, SearchResultsWrapper } from './SearchPage.styles';

import { SearchPageProps, GlobalState } from '../../interfaces';
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader';
import ResultCard from '../../components/ResultCard';
import { setHomeScrollPos } from '../../store/app';
import useCoffeeShopList from '../../hooks/useCoffeeShopList';

const SearchPage = ({ setPlaceId }: SearchPageProps) => {
  const [pageNum, setPageNum] = useState<number>(0);
  const [pageLink, setPageLink] = useState<string>('');
  const { coffeeShopList, loading, nextPageLink } = useCoffeeShopList(
    pageLink,
    pageNum
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const observer = useRef<IntersectionObserver>();
  const lastResultEl = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      //Trigger infinite load when user scrolls to the last result
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (nextPageLink) {
            setPageNum((prev) => prev + 1);
            setPageLink(nextPageLink);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, nextPageLink]
  );

  //When user clicks on a result card, navigate to details for the selected shop
  const viewCardDetails = (placeId: string) => {
    setPlaceId(placeId);
    dispatch(setHomeScrollPos(window.scrollY));
    navigate('/details');
  };

  //Restore scroll
  const prevScrollPos = useSelector(
    (state: GlobalState) => state.app.homeScrollPos
  );
  useEffect(() => {
    window.scrollTo({ top: prevScrollPos, behavior: 'smooth' });
  }, [prevScrollPos]);

  return (
    <>
      <SearchBarWrapper>
        <SearchBar setPageLink={setPageLink} />
      </SearchBarWrapper>
      <SearchResultsWrapper>
        {coffeeShopList.map((shop, i) => {
          if (i === coffeeShopList.length - 1) {
            return (
              <ResultCard
                shop={shop}
                viewDetails={viewCardDetails}
                ref={lastResultEl}
                key={`result-${i}`}
              />
            );
          } else {
            return (
              <ResultCard
                shop={shop}
                viewDetails={viewCardDetails}
                key={`result-${i}`}
              />
            );
          }
        })}
      </SearchResultsWrapper>
      {loading && <Loader size={40} loaderWidth={15} />}
    </>
  );
};

export default SearchPage;
