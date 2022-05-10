import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';

import ResultCard from '../../components/ResultCard';
import theme from '../../utils/theme';
import { mount, shallow } from '../setup/test-setup';
import { mockShopResult } from '../__mocks__/data';

const mockStore = configureStore();
const mockViewDetails = jest.fn();

describe('ResultCard', () => {
  let component: JSX.Element;

  beforeEach(() => {
    component = (
      <ThemeProvider theme={theme}>
        <Provider store={mockStore()}>
          <ResultCard shop={mockShopResult} viewDetails={mockViewDetails} />
        </Provider>
      </ThemeProvider>
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(component);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should render details properly', () => {
    const wrapper = mount(component);
    const name = wrapper.find('h3');
    expect(name.text()).toEqual('Stumptown Coffee Roasters');

    const price = wrapper.find('span').first();
    expect(price.text()).toEqual(' · $');
  });
});
