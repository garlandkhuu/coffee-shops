import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router';

import {
  Container,
  ContentWrapper,
  BackButton,
  CarouselWrapper,
  DetailsSection,
  ShopName,
  Paragraph,
  StyledText,
  ContactInfoTable,
  CategoryContainer,
  CategoryPill,
} from './DetailsPage.styles';

import Loader from '../../components/Loader';
import assemblePhotoUrl from '../../utils/assemblePhotoUrl';
import useCoffeeShopDetails from '../../hooks/useCoffeeShopDetails';
import useResponsive from '../../hooks/useResponsive';
import { ReactComponent as BackArrowIcon } from '../../assets/back-arrow.svg';
import { ReactComponent as WebIcon } from '../../assets/web.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg';
import { ReactComponent as LocationIcon } from '../../assets/pin.svg';
import { GOOGLE_MAPS_BASE } from '../../utils/constants';
import assembleAddress from '../../utils/assembleAddress';
import parsePrice from '../../utils/parsePrice';

interface DetailsPageProps {
  placeId: string | undefined;
}

const DetailsPage = ({ placeId }: DetailsPageProps) => {
  const [initLoadFinished, setInitLoadFinished] = useState(false);
  const { coffeeShopDetails, loading } = useCoffeeShopDetails(placeId);
  const {
    name,
    description,
    price,
    rating,
    tel,
    website,
    location,
    photos = [],
    categories = [],
    hours,
  } = coffeeShopDetails || {};
  const { isTablet, isDesktop } = useResponsive();

  const navigate = useNavigate();

  //Indicate first load
  useEffect(() => {
    if (!loading) {
      setInitLoadFinished(true);
    }
  }, [loading]);

  //Scroll to bottom of page so details are visible after details load
  useEffect(() => {
    if (initLoadFinished) {
      setTimeout(() => {
        window.scrollTo({
          top: isDesktop ? document.body.scrollHeight : 0,
          behavior: 'smooth',
        });
      }, 50);
    }
  }, [initLoadFinished, isDesktop]);

  return loading ? (
    <Loader size={40} loaderWidth={15} margin="60px" />
  ) : (
    <Container>
      <BackButton onClick={() => navigate('/')}>
        <BackArrowIcon />
        Back
      </BackButton>
      <ContentWrapper>
        <CarouselWrapper>
          <Carousel showArrows={true}>
            {photos.map((photo, i) => (
              <div key={`img-${i}`}>
                <img
                  alt=""
                  src={assemblePhotoUrl(photo.prefix, photo.suffix, '750x750')}
                />
              </div>
            ))}
          </Carousel>
          {isTablet && (
            <CategoryContainer>
              <StyledText fontWeight="bold" fontSize={18}>
                Categories:
              </StyledText>
              {categories.map((category) => (
                <CategoryPill key={`category-${category.name}`}>
                  {category.name}
                </CategoryPill>
              ))}
            </CategoryContainer>
          )}
        </CarouselWrapper>
        <DetailsSection>
          <ShopName>{name}</ShopName>
          <Paragraph margin="0 0 15px 0" fontSize={18}>
            {hours && (
              <>
                <StyledText fontColor={hours?.open_now ? 'sage' : 'red'}>
                  {hours?.open_now ? 'Open Now' : 'Closed'}
                </StyledText>
                <StyledText>{hours?.display}</StyledText>
              </>
            )}
          </Paragraph>
          <Paragraph margin="0 0 40px 0" fontSize={18} fontWeight="bold">
            {rating && (
              <span>
                {'Rating: '}
                <StyledText fontWeight="normal">{`${rating}/10`}</StyledText>
              </span>
            )}
            {price && (
              <span>
                {'Price: '}
                <StyledText
                  margin="0 0 50px 0"
                  fontColor="sage"
                  letterSpacing={1.5}
                >
                  {parsePrice(price)}
                </StyledText>
              </span>
            )}
          </Paragraph>
          {description && (
            <Paragraph margin="0 0 50px 0" fontSize={18}>
              {description}
            </Paragraph>
          )}
          <ContactInfoTable>
            <tbody>
              {website && (
                <tr>
                  <td>
                    <WebIcon />
                    <a href={website} target="_blank" rel="noreferrer">
                      {website}
                    </a>
                  </td>
                </tr>
              )}
              {tel && (
                <tr>
                  <td>
                    <PhoneIcon />
                    {tel}
                  </td>
                </tr>
              )}
              {location && (
                <tr>
                  <td>
                    <LocationIcon />
                    <a
                      href={`${GOOGLE_MAPS_BASE}${assembleAddress(
                        name,
                        location
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {location.formatted_address}
                    </a>
                  </td>
                </tr>
              )}
            </tbody>
          </ContactInfoTable>
          {isDesktop && (
            <CategoryContainer>
              <StyledText fontWeight="bold" fontSize={18}>
                Categories:
              </StyledText>
              {categories.map((category) => (
                <CategoryPill key={`category-${category.name}`}>
                  {category.name}
                </CategoryPill>
              ))}
            </CategoryContainer>
          )}
        </DetailsSection>
      </ContentWrapper>
    </Container>
  );
};

export default DetailsPage;
