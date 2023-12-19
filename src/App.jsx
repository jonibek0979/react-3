import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  const [mode, setMode] = useState(true)
  return (
    <div className="App">
      <Header data={{ mode, setMode }} />
      <Main mode={mode}/>
      <Hero mode={mode}/>
      <Footer mode={mode}/>
    </div>
  );
}

export default App;
