import styled from 'styled-components';

import { MEDIA_QUERIES, LARGE } from './utils/constants';

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 30px 40px;
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.regular};
  justify-content: start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  ${MEDIA_QUERIES.large} {
    max-width: ${LARGE}px;
  }

  ${MEDIA_QUERIES.medium} {
    padding: 15px 20px;
  }
`;
