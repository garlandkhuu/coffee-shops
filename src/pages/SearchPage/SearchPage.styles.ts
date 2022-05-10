import styled from 'styled-components';

import { MEDIA_QUERIES } from '../../utils/constants';

export const SearchBarWrapper = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;

  ${MEDIA_QUERIES.medium} {
    width: 100%;
  }
`;

export const SearchResultsWrapper = styled.div`
  margin: 40px 0;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
