import styled from 'styled-components';

import { MEDIA_QUERIES } from '../../utils/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 15px 25px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: calc(50% - 30px);
  max-height: 250px;
  box-shadow: ${({ theme }) => `3px 3px 10px 3px ${theme.colors.grey}`};

  ${MEDIA_QUERIES.medium} {
    max-height: 125px;
    width: 100%;
  }
`;

export const Thumbnail = styled.img`
  object-fit: cover;
  border-radius: 12px 0 0 12px;
  width: 250px;
  height: 250px;

  ${MEDIA_QUERIES.medium} {
    width: 125px;
    height: 125px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 20px;

  ${MEDIA_QUERIES.medium} {
    padding: 15px 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  p:last-child {
    margin-bottom: 0;
  }

  ${MEDIA_QUERIES.medium} {
    p:first-child {
      margin: 10px 0 0 0;
    }

    p:last-child {
      margin-top: 10px;
    }

    p: {
      font-size: 14px;
    }
  }
`;

export const Name = styled.h3`
  margin: 0 0 10px 0;

  ${MEDIA_QUERIES.medium} {
    margin: 0;
    font-size: 18px;
  }
`;

export const Pricing = styled.span`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: bold;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.sage};
`;
