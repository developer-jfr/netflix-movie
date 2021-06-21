import React from 'react'
import "./App.css";
import Row from './Row'
import requests from './components/request';
import Banner from './components/Banner'
import Nav from './components/navbar'
const App = () => {

  return (
    <div className='app'>
    <Nav />
    <Banner />
    
    <Row 
    title='Netflix Originals'
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow={true}
     />
    <Row  title='Trending Now' fetchUrl={requests.fetchTrending} />
    <Row title='Actions Movies' fetchUrl={requests.fetchActionMovies}/>
    <Row  title='Comedy' fetchUrl={requests.fetchComedyMovies} />
    <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
    <Row  title='Trending Now' fetchUrl={requests.fetchRomanceMovies} />
    <Row title='Romance' fetchUrl={requests.fetchNetflixOriginals}/>
    <Row  title='Document' fetchUrl={requests.fetchDocumentMovies} />

   
   
</div>
  )
}

export default App;
