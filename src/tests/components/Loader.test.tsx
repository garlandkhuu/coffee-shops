import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';

import Loader from '../../components/Loader';
import theme from '../../utils/theme';
import { shallow } from '../setup/test-setup';

const mockStore = configureStore();

describe('Loader', () => {
  let component: JSX.Element;

  beforeEach(() => {
    component = (
      <ThemeProvider theme={theme}>
        <Provider store={mockStore()}>
          <Loader />
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
});
