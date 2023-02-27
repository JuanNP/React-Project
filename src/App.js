import './App.css';
import { Box, Container, Stat, Text, StatHelpText, Heading, Button } from '@chakra-ui/react'
import Home from './pages/home/home';
import Login from './pages/login/login';
import SideBar from './Components/Sidebar/Sidebar';
import TopBar from './Components/Navbar/Navbar';

function App() {
  return (
    //<Login></Login>
    <div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <Home></Home>

    </div>
  )
}

export default App;
