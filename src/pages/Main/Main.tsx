import { useState } from 'react';
import './main.css';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';
import data from '../../data';

const Main = () => {
  const [search, setSearch] = useState<string>('');

  const onUpdateSearchBar = (search: string) => {
    setSearch(search);
  };

  /*   onLiked = (id: number) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, liked: !item.liked };
        }
        return item;
      }),
    }));
  };
 */
  return (
    <div className="app">
      <Header />
      <h2 data-testid="home-page">Home page</h2>
      <SearchBar onUpdateSearchBar={onUpdateSearchBar} search={search} />
      <CardList term={search} data={data} />
      <Footer />
    </div>
  );
};

export default Main;
// все кроме страницы main
