import { IMovie, IMovies } from './../../types/interfaces';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY_3 = '7626fdae3c4ee9c8b35ddb93a4196b97';

export default class Api {
  async getResource(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status &{res.status}`);
    }
    const data = await res.json();
    return data;
  }

  getFilmInfo(id: string): Promise<IMovie> {
    return this.getResource(`${API_URL}/movie/${id}?api_key=${API_KEY_3}`);
  }

  getMovieList(search: string): Promise<IMovies> {
    if (search === '') {
      return this.getResource(
        `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=popularity.desc&page=1`
      );
    } else {
      return this.getResource(
        `${API_URL}/search/movie?api_key=${API_KEY_3}&query=${search}&sort_by=popularity.desc&page=1`
      );
    }
  }
}
