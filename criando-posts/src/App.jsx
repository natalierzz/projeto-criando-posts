import { Outlet } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <div className="App">
      <div className="conteiner" >
        <Outlet/>
      </div>

    </div>
  );
}

export default App
