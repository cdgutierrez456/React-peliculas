import logo from './logo.svg';
import './App.css';
import Film from './Film';
import PageWrapper from './PageWrapper';
import {films} from './FilmsData'
import Pagination from './Pagination';
 
function App() {

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
        page={2}
        total={5}
        onChange={(pagina) => {
          alert(pagina)
        }}
      />

    </PageWrapper>
  );
}

export default App;
