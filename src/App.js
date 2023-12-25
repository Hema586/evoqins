import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
