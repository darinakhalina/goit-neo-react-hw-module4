import axios from 'axios';

const accessKey = '_Etp3kyBfxe06prLILMqtc8_AThk7eV5LYE9QgY_MIc';
const imagesPerPage = 12;
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${accessKey}`;

export const fetchGallery = async (searchQuery, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: searchQuery,
      page,
      per_page: imagesPerPage,
      orientation: 'landscape',
    },
  });
  return response.data;
};
