import React from 'react';
import './App.scss';
import Header from './Components/Header/header.component';
import Search from './Components/Search/search.component';
import Results from './Components/Results/results.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Results />
    </div>
  )
}

export default App;
