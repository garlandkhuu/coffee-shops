import styled from 'styled-components';

import { MEDIA_QUERIES } from '../../utils/constants';

interface TextProps {
  fontColor?: string;
  fontSize?: number;
  fontWeight?: string;
  margin?: string;
  letterSpacing?: number;
}

interface ParagraphProps {
  margin?: string;
  fontSize?: number;
  fontWeight?: string;
}

export const Container = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  ${MEDIA_QUERIES.medium} {
    padding: 0 15px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 30px;

  ${MEDIA_QUERIES.medium} {
    flex-direction: column-reverse;
  }
`;

export const BackButton = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: 18px;

  svg {
    transform: scaleX(1.3);
    width: 35px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const CarouselWrapper = styled.div`
  width: 45%;

  ${MEDIA_QUERIES.medium} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;

    .thumbs {
      padding-inline-start: 0;
      display: flex;
      justify-content: center;
    }
  }
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
  width: 55%;

  ${MEDIA_QUERIES.medium} {
    width: 100%;
    padding: 0;
  }
`;

export const ShopName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 36px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 15px 0;
`;

export const StyledText = styled.span<TextProps>`
  margin: ${({ margin }) => margin || 0};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  font-size: ${({ fontSize }) => `${fontSize}px` || 'inherit'};
  color: ${({ fontColor, theme }) =>
    fontColor ? theme.colors[fontColor] : theme.colors.black};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : 'initial'};
`;

export const Paragraph = styled.p<ParagraphProps>`
  margin: ${({ margin }) => margin || 0};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : 'inherit')};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};

  & > *:not(:last-child) {
    &::after {
      content: '·';
      font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : 'inherit')};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.black};
      margin: 0 8px;
    }
  }
`;

export const ContactInfoTable = styled.table`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  font-size: inherit;
  margin-bottom: 80px;

  ${MEDIA_QUERIES.medium} {
    margin-bottom: 20px;
  }

  tr {
    &:not(:last-child) {
      td {
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
      }
    }
  }

  td {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 12px;
    padding: 16px 0;

    svg {
      margin-right: 15px;
      width: 20px;
      height: 20px;
    }
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  ${MEDIA_QUERIES.medium} {
    ${StyledText} {
      margin-top: 15px;
    }
  }
`;

export const CategoryPill = styled.span`
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.beigeLight};
  color: ${({ theme }) => theme.colors.brown};
  font-size: 18px;
  padding: 6px 12px;

  &:nth-child(2) {
    margin-left: 10px;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }

  ${MEDIA_QUERIES.medium} {
    margin-top: 15px;
  }
`;
