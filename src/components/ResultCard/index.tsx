import { forwardRef, ReactNode } from 'react';

import {
  Container,
  Thumbnail,
  InfoContainer,
  Info,
  Name,
  Pricing,
} from './ResultCard.styles';
import { CoffeeShopListResult } from '../../interfaces';
import assemblePhotoUrl from '../../utils/assemblePhotoUrl';
import parsePrice from '../../utils/parsePrice';
import defaultImage from '../../assets/no-image.png';
import useResponsive from '../../hooks/useResponsive';

interface ResultCardProps {
  children?: ReactNode;
  shop: CoffeeShopListResult;
  viewDetails: (placeId: string) => void;
}

const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(
  ({ shop, viewDetails }, ref) => {
    const { name, price, rating, fsq_id: placeId } = shop;

    const { location } = shop;
    const { address } = location;

    const { photos } = shop;
    const thumbnail = photos[0];
    const prefix = thumbnail ? thumbnail.prefix : '';
    const suffix = thumbnail ? thumbnail.suffix : '';

    const { isTablet, isDesktop } = useResponsive();

    return (
      <Container onClick={() => viewDetails(placeId)} ref={ref}>
        <Thumbnail
          src={
            prefix && suffix
              ? assemblePhotoUrl(prefix, suffix, '250x250')
              : defaultImage
          }
        />
        <InfoContainer>
          <Name>{name}</Name>
          <Info>
            <p>
              {address && `${address}`}
              {isDesktop && <Pricing> · {parsePrice(price)}</Pricing>}
            </p>
            <p>
              Rating: {rating ? `${rating}/10` : 'Unavailable'}
              {isTablet && <Pricing> · {parsePrice(price)}</Pricing>}
            </p>
          </Info>
        </InfoContainer>
      </Container>
    );
  }
);

export default ResultCard;
