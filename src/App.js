import React from 'react';
import Navigator from './components/Navbar';
import Rotas from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigator/>
      <Rotas/>
      <Footer/>
    </div>
  );
}

export default App;
