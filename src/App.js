import { useState } from 'react';
import './App.css';
import Film from './Film';
import PageWrapper from './PageWrapper';
import {films} from './FilmsData'
import Pagination from './Pagination';
 
function App() {

  const [actualPage, setActualPage] = useState(1);

  return (
    <PageWrapper>
      {films.map(film => {
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
        total={5}
        onChange={(page) => {
          setActualPage(page)
        }}
      />

    </PageWrapper>
  );
}

export default App;
