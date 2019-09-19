import React from 'react';
import './App.scss';
import Header from './Components/Header/header.component';
import Search from './Components/Search/search.component';
import Results from './Components/Results/results.component';
import History from './Components/History/history.component';

function App() {
  return (
    <main className="App">
      <Header />
      <Search />
      <History />
      <Results />
    </main>
  )
}

export default App;
