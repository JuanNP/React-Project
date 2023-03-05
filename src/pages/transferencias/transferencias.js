import TopBar from '../../Components/Navbar/Navbar';
import SideBar, { SideBarMovil } from '../../Components/Sidebar/Sidebar';
import { Container } from "@chakra-ui/react";


export const Transferencias = () => {
  return (
    <>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <SideBarMovil></SideBarMovil>
      <Container centerContent>
        <h1>Transferencias</h1>
      </Container>
    </>
  );
}