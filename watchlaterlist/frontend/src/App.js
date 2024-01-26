import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WatchLaterList from './components/WatchLaterList';
import AddToList from './components/AddToList';
import UpdateToList from './components/UpdateToList';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <WatchLaterList />
      </Router>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<WatchLaterList/>}></Route>
          <Route path='/AddToList' element={<AddToList/>}></Route>
          <Route path='/UpdateToList/:id' element={<UpdateToList/>}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

