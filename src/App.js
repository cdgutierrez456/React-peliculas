import { useState } from 'react';
import './App.css';
import Film from './Film';
import PageWrapper from './PageWrapper';
import {films} from './FilmsData'
import Pagination from './Pagination';
 
function App() {

  const [actualPage, setActualPage] = useState(1);
  // const [films, setFilms] = useState([]);
  const TOTAL_BY_PAGE = 4;

  // const searchFilms = async () => {
  //   let url = 'https://lucasmoy.dev/data/react/peliculas.json'
  //   let response = await fetch(url, {
  //     "method": "GET",
  //     "mode": "no-cors",
  //     "headers": {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //       "Origin": "https://lucasmoy.dev/"
  //     }
  //   })
  //   let json = await response.json()
  //   setFilms(JSON.parse(json))
  // }

  const loadFilms = () => {
    let filmsByPage = films.slice(
      (actualPage - 1) * TOTAL_BY_PAGE, 
      actualPage * TOTAL_BY_PAGE
    )
    return filmsByPage
  }

  const getTotalPages = () => {
    let totalAmountFilms = films.length
    return Math.ceil(totalAmountFilms / TOTAL_BY_PAGE);
  }

  return (
    <PageWrapper>
      
      {loadFilms().map(film => {
        return (
          <Film 
            img={film.img}
            title={film.title} 
            rating={film.rating}
            director={film.director}
            actors={film.actors}
            date={film.date}
            duration={film.duration}
            description={film.description}
          />
        );
      })}

      <Pagination 
        page={actualPage}
        total={getTotalPages()}
        onChange={(page) => {
          setActualPage(page)
        }}
      />

    </PageWrapper>
  );
}

export default App;
