import styled from 'styled-components';

import { MEDIA_QUERIES } from '../../utils/constants';
import banner from '../../assets/coffee-shop-banner.jpg';

export const HeaderContainer = styled.header`
  position: relative;
  height: 45vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.brown2};
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${MEDIA_QUERIES.medium} {
    height: 30vh;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.blackOpaque};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 72px;
  font-family: ${({ theme }) => theme.fonts.decorated};
  border-bottom: ${({ theme }) => `solid 5px ${theme.colors.white}`};
  user-select: none;

  ${MEDIA_QUERIES.small} {
    font-size: 48px;
  }
`;
