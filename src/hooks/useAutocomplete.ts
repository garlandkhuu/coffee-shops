import { useEffect, useState } from 'react';

import getGeoAutocomplete from '../api/getAutocomplete';
import { AutocompleteResult } from '../interfaces';

/**
 * Hook that takes a string and returns all suggestions made by the
 * Autocomplete API by foursquare, the API suggests closest match for localities
 * @param query a string to query for autocomplete options
 * @returns the different localities matching the given query
 */
const useAutocomplete = (query: string) => {
  const [options, setOptions] = useState<AutocompleteResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAutocompleteOptions = async () => {
      setLoading(true);
      const data = await getGeoAutocomplete(query);
      const autocompleteOptions = data.results;
      const filteredOptions = autocompleteOptions.filter(
        (option: AutocompleteResult) => option.geo.type === 'locality'
      );
      setOptions(filteredOptions);
      setLoading(false);
    };

    fetchAutocompleteOptions();
  }, [query]);

  return { options, loading };
};

export default useAutocomplete;
