import React from 'react';
import logo from './logo.png';
import './App.scss';
import BookContextProvider from './context/BookContext';
import NavBar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';


function App() {
  return (
    <div className="App">
        <img src={logo} alt="Logo App"/>
        <BookContextProvider>
          <NavBar />
          <BookList />
          <BookForm />
          </BookContextProvider>
    </div>
  );
}

export default App;