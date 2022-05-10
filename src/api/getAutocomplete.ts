import placesAxios from './config';

const getAutocomplete = async (query: string) => {
  try {
    const res = await placesAxios.get(`autocomplete?query=${query}&types=geo`);
    const { data } = res;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getAutocomplete;
