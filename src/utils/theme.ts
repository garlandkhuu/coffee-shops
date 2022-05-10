export interface Theme {
  colors: {
    beigeLight: string;
    brown: string;
    brown2: string;
    black: string;
    blackOpaque: string;
    white: string;
    grey: string;
    grey2: string;
    sage: string;
    red: string;
  };
  fonts: {
    regular: string;
    bold: string;
    decorated: string;
  };
  maxPageWidth: number;
}

const theme: Theme = {
  colors: {
    beigeLight: '#e2d5ca',
    brown: '#492e22',
    brown2: '#a6816a',
    black: '#000000',
    blackOpaque: 'rgba(0, 0, 0, 0.5)',
    white: '#FFFFFF',
    grey: '#dbd8d7',
    grey2: '#969696',
    sage: '#209971',
    red: '#d43d69',
  },
  fonts: {
    regular: 'Lato',
    bold: 'Lato',
    decorated: 'Besley',
  },
  maxPageWidth: 1500,
};

export default theme;
