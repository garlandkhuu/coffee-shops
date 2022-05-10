import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import { shallowToJson } from 'enzyme-to-json';
import { waitFor } from '@testing-library/react';
import 'jest-styled-components';

import placesAxios from '../../api/config';

import SearchBar from '../../components/SearchBar';
import theme from '../../utils/theme';
import { mount, shallow } from '../setup/test-setup';
import { mockAutocompleteData } from '../__mocks__/data';

jest.mock('../../api/config');

const mockedAxios = placesAxios as jest.Mocked<typeof placesAxios>;
const mockFetchData = {
  data: mockAutocompleteData,
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {},
};
const mockStore = configureStore();
const mockSetPageLink = jest.fn();

describe('SearchBar', () => {
  let component: JSX.Element;

  beforeEach(() => {
    component = (
      <ThemeProvider theme={theme}>
        <Provider store={mockStore()}>
          <SearchBar setPageLink={mockSetPageLink} />
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

  it('should display autocomplete options', async () => {
    (mockedAxios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve(mockFetchData)
    );

    const wrapper = mount(component);
    let input = wrapper.find('input');

    input.simulate('focus');
    input.simulate('change', { target: { value: 'port' } });

    await waitFor(() => {
      wrapper.update();
      const autocompleteList = wrapper
        .find({ 'data-testid': 'autocomplete-popper' })
        .first();
      expect(autocompleteList.prop('visible')).toBeTruthy();
      expect(wrapper.find('ul').children().length).toBe(2);
    });

    const firstOption = wrapper.find('ul').children().first();
    firstOption.simulate('click');

    await waitFor(() => {
      wrapper.update();
      expect(mockSetPageLink).toHaveBeenCalled();
    });
  });
});
