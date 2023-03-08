import TopBar from '../../Components/Navbar/Navbar';
import SideBar, { SideBarMovil } from '../../Components/Sidebar/Sidebar';
import { Container } from "@chakra-ui/react";


export const Beneficiarios = () => {
  return (
    <>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <SideBarMovil></SideBarMovil>
      <Container centerContent>
        <h1>Beneficiarios</h1>
      </Container>
    </>
  );
} 