import logo from './logo.svg';
import './App.css';
import Film from './Film';
import PageWrapper from './PageWrapper';

function App() {

  let films = [
    {
      img: "images/uploads/mv1.jpg",
      title: "Oblivion (2012)" ,
      rating: "8.1",
      director: "Joss Whedon",
      actors: "Robert Downey Jr.,Chris Evans, Chris Hemsworth",
      date: "1 May 2015",
      duration: "2h 21min",
      description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity..."
    },
    {
      img: "images/uploads/mv2.jpg",
      title: "into the wild (2014)", 
      rating: "7.8",
      director: "Anthony Russo, Joe Russo",
      actors: "Chris Evans, Samuel L. Jackson, Scarlett Johansson",
      date: "1 May 2015",
      duration: "2h 21min",
      description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat..."
    }
  ];

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

    </PageWrapper>
  );
}

export default App;
