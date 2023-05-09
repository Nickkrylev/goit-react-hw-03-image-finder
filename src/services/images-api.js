import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const params = new URLSearchParams(  {
    key: '33576699-07be5d69785ba9c233ec2014b',
    q: query,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
    const response = await axios.get(`?${params}`);
    return response.data;
}