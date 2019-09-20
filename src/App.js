import React from 'react';
import { useSelector } from 'react-redux'

import Header from './Components/Header/header.component';
import Search from './Components/Search/search.component';
import Results from './Components/Results/results.component';
import History from './Components/History/history.component';
import './App.scss';

function App() {

  const results = useSelector(state => state.results)
  const history = useSelector(state => state.history)

  return (
    <div className="App">
      <Header />
      <Search />
      {!!history.length && <History />}
      {results && <Results />}
    </div>
  )
}

export default App;
