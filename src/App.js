import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Resource } from './pages/Resource/Resource';
import { Contact } from './pages/Contact/Contact';
import { Classes } from './pages/Classes/Classes'
import { MyClasses } from './pages/MyClasses/MyClasses';


function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/resource' element={<Resource />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/myclasses' element={<MyClasses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
