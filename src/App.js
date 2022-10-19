import React from 'react';
import './App.css';
import Ppt from "./components/PiedraPapelTijera/PiedraPapelTijera"
import Circles from "./components/CirculosColores/CirculosColores"
import JuegosProvider from './components/Context/Juegos';

function App() {
  return (
    <div className="App">
      <JuegosProvider>

        <Ppt/>
        <Circles/>
      </JuegosProvider>
    </div>
  );
}

export default App;
