
import './App.css';
import Head from './Components/Head';
import Home1 from './Components/Home1';
import Main from './Components/Main';
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home1/>
      <Head/>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
