import { Route, Routes } from 'react-router';
import './App.scss';
import Header from './app/components/UI/Header/Header';
import Home from './app/pages/Home';
import Add from './app/pages/Add';
import Contact from './app/pages/Contact';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route element={<Home />} path='/'/>
      <Route element={<Add />} path='/dodaj'/>
      <Route element={<Contact />} path='/o-nama'/>
     </Routes>
    </div>
  );
}

export default App;
