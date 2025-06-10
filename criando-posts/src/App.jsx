import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

import './App.css'

import Box from '@mui/material/Box';

function App() {

  return (
    <Box className="App"> 
      <Navbar/>
      <div className="conteiner" >
        <Outlet/>
      </div>

    </Box>
  );
}

export default App
