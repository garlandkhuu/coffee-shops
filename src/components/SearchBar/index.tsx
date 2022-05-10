import { useState, useRef, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { usePopper } from 'react-popper';
import debounce from 'lodash.debounce';

import {
  Wrapper,
  Bar,
  BarInput,
  Loader,
  AutoCompleteWrapper,
  OptionList,
  Option,
} from './SearchBar.styles';

import { setLocality } from '../../store/app';
import useAutocomplete from '../../hooks/useAutocomplete';
import { AutocompleteResult } from '../../interfaces';

interface SearchBarProps {
  setPageLink: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setPageLink }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [listVisible, setListVisible] = useState(false);
  const refElement = useRef<HTMLDivElement>(null);
  const popperElement = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const { styles, attributes } = usePopper(
    refElement.current,
    popperElement.current,
    {
      placement: 'bottom',
      modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
    }
  );

  const { options, loading } = useAutocomplete(searchValue);

  //Debounce the api call so it doesn't trigger for every single text change
  const onInputChange = debounce(async (e: ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setSearchValue(target.value);
  }, 300);

  const onOptionClick = (localityName: string) => {
    // set new locality and reset pagination
    dispatch(setLocality(localityName));
    setPageLink('');
    setListVisible(false);

    //Set input value to the clicked value from autocomplete
    if (inputRef.current) {
      inputRef.current.value = localityName;
      inputRef.current.blur();
    }
  };

  return (
    <Wrapper>
      <Bar ref={refElement}>
        <BarInput
          type="text"
          onChange={onInputChange}
          onFocus={() => setListVisible(true)}
          onBlur={() => setListVisible(false)}
          placeholder="search for a city / locality"
          ref={inputRef}
          searchValue={searchValue}
        />
        {loading && <Loader size={16} loaderWidth={5} />}
      </Bar>
      <AutoCompleteWrapper
        ref={popperElement}
        style={styles.popper}
        visible={listVisible && options.length > 0}
        {...attributes.popper}
        data-testid="autocomplete-popper"
      >
        <OptionList>
          {options.map((option: AutocompleteResult, i: number) => {
            const { text } = option;
            const localityName: string = text.primary;
            return (
              <Option
                key={i}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onOptionClick(localityName);
                }}
              >
                {localityName}
              </Option>
            );
          })}
        </OptionList>
      </AutoCompleteWrapper>
    </Wrapper>
  );
};

export default SearchBar;
