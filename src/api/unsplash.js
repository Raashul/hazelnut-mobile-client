import axios from 'axios';
// import { UNSPLASH_APP_URL, UNSPLASH_ACCESS_KEY } from 'react-native-dotenv';

const apiUnsplash = axios.create({ baseURL: `https://api.unsplash.com` });

const UNSPLASH_ACCESS_KEY = '830fefdd1dc4ee0d47ae635a5babf15d4924f2695f7ef3d28e3d7719b8c75b98';
export function searchWithKeyword(payload) {
	return apiUnsplash.get(`/search/photos?client_id=${UNSPLASH_ACCESS_KEY}&query=${payload.query}`);
}
