import styled from 'styled-components';

import _Loader from '../Loader';
import { MEDIA_QUERIES } from '../../utils/constants';

interface AutocompleteProps {
  visible: boolean;
}

interface BarInputProps {
  searchValue: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MEDIA_QUERIES.large} {
    width: 500px;
    height: 60px;
    font-size: 24px;
  }

  ${MEDIA_QUERIES.medium} {
    width: 100%;
    height: 45px;
    font-size: 18px;
    margin: 0 20px;
  }
`;

export const Loader = styled(_Loader)`
  position: absolute;
`;

export const Bar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  height: 45px;
  width: 100%;

  ${Loader} {
    margin-right: 10px;
  }

  ${MEDIA_QUERIES.large} {
    height: 60px;
    font-size: 24px;
  }

  ${MEDIA_QUERIES.medium} {
    height: 45px;
    font-size: 18px;
  }
`;

export const BarInput = styled.input<BarInputProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.brown}`};
  font-size: inherit;
  border-radius: 7px;
  width: 100%;
  padding: 15px;
  transition: box-shadow 0.1s ease-out;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => `0px 0px 10px 3px ${theme.colors.brown2}`};
  }
`;

export const AutoCompleteWrapper = styled.div<AutocompleteProps>`
  position: absolute;
  max-height: 500px;
  overflow-y: scroll;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  box-shadow: ${({ theme }) => `0px 3px 5px 2px ${theme.colors.brown2}`};
  border-radius: 0 0 7px 7px;

  ${MEDIA_QUERIES.large} {
    width: 495px;
  }

  ${MEDIA_QUERIES.medium} {
    width: calc(100% - 80px);
  }
`;

export const OptionList = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  background-color: ${({ theme }) => theme.colors.white};

  li:last-child {
    border-radius: 0 0 7px 7px;
  }
`;

export const Option = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  padding: 5px 10px;
  transition: background-color 0.1s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
