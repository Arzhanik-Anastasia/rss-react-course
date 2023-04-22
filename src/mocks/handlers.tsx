import { rest } from 'msw';
import { movies, results } from './mockMovie';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY_3 = '7626fdae3c4ee9c8b35ddb93a4196b97';

export const handlers = [
  rest.get(`${API_URL}/discover/movie`, (req, res, ctx) => {
    req.url.searchParams.set('api_key', API_KEY_3);
    return res(ctx.status(200), ctx.json(movies));
  }),
  rest.get(`${API_URL}/movie/303857`, (req, res, ctx) => {
    req.url.searchParams.set('api_key', API_KEY_3);
    return res(ctx.json(results[0]));
  }),
  rest.get(`${API_URL}/search/movie`, (req, res, ctx) => {
    req.url.searchParams.set('api_key', API_KEY_3);
    req.url.searchParams.set('search', '');
    return res(ctx.status(200), ctx.json(movies));
  }),
];
