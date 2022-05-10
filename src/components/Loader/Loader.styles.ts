import styled, { keyframes } from 'styled-components';

import { LoaderProps } from '../../interfaces';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<LoaderProps>`
  width: ${({ size }) => (size ? `${size}px` : '100%')};
  height: ${({ size }) => (size ? `${size}px` : '100&%')};
  border: ${({ theme, loaderWidth }) =>
    `${loaderWidth ? `${loaderWidth}px` : '16px'} solid ${theme.colors.grey}`};
  border-top: ${({ theme, loaderWidth }) =>
    `${loaderWidth ? `${loaderWidth}px` : '16px'} solid ${theme.colors.grey2}`};
  border-radius: 50%;
  animation: ${spinAnimation} 2s linear infinite;
  margin: ${({ margin }) => margin || 0};
`;
