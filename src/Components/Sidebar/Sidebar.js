import React, { useState } from 'react'
import './Sidebar.css'
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, IconButton, useDisclosure, Box, Container, Link, Hide, Text, Spacer } from "@chakra-ui/react"
import { MdOutlineAttachMoney, MdAccountCircle, MdOutlineLogout, MdSpaceDashboard } from 'react-icons/md'
import { BiTransferAlt } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaUserFriends } from 'react-icons/fa'

const SideBar = () => {

  const [showText, setShowText] = useState(false);

  const handleMouseOver = () => {
    setShowText(true);
  };

  const handleMouseOut = () => {
    setShowText(false);
  };

    return (
      <Container className='sidebar' display='flex' flexDirection='row' width='auto' float='inline-start' position='absolute' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <Box display='flex' flexDirection='column' h='100%'>
            <Link className='MenuLink' href='/dashboard'> 
              <MdSpaceDashboard size='1.5rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Dashboard</Text>}
            </Link>
            <Link className='MenuLink' href='/transferencias'> 
              <BiTransferAlt size='1.5rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Transferencias</Text>}
            </Link>
            <Link className='MenuLink' href='/pagos'>
              <MdOutlineAttachMoney size='1.7rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Pagos</Text>}
            </Link>
            <Link className='MenuLink' href='/beneficiarios'> 
              <FaUserFriends size='1.5rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Beneficiarios</Text>}
            </Link>
            <Link className='MenuLink' href='/perfil'>
              <MdAccountCircle size='1.5rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Perfil</Text>}
            </Link>
            <Spacer />
            <Link className='MenuLink' href='/#' onClick={() => alert("Quieres salir de tu cuenta?")}>
              <MdOutlineLogout size='1.5rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Salir</Text>}
            </Link>
          </Box>
      </Container>
    )
  }

  const SideBarMovil = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
      
    return (
      <>
        <Hide above='768px'>
        <IconButton
          className='menuButton'
          bg='transparent'
          border='none'
          icon={<RxHamburgerMenu />}
          color='white'
          fontSize='1.7rem'
          onClick={onOpen}
          position='fixed'
          top='0'
          left='5'
          zIndex='0'
        />
        </Hide>
        <Box >
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
            <DrawerContent className='menuMovil'>
              <DrawerCloseButton className='drawerCloseButton' border='none' bg='transparent' m='5'/>
              <DrawerHeader 
                mt='5'
                display='flex'
                justifyContent='center'
                alignItems='center'
                fontSize='1.5rem'
              >
                Menu
                </DrawerHeader>

              <DrawerBody>
                <Box display='flex' flexDirection='column' alignItems='baseline' h='100%' ml='-5'>
                  <Link className='MenuLink' href='/dashboard'> 
                    <MdSpaceDashboard size='1.5rem'/>
                    <Text className='linkText'>Dashboard</Text>
                  </Link>
                  <Link className='MenuLink' href='/transferencias'> 
                    <BiTransferAlt size='1.5rem'/>
                    <Text className='linkText'>Transferencias</Text>
                  </Link>
                  <Link className='MenuLink' href='/pagos'> 
                    <MdOutlineAttachMoney size='1.7rem'/>
                    <Text className='linkText'>Pagos</Text>
                  </Link>
                  <Link className='MenuLink' href='/beneficiarios'> 
                    <FaUserFriends size='1.5rem'/>
                    <Text className='linkText'>Beneficiarios</Text>
                  </Link>
                  <Link className='MenuLink' href='/perfil'> 
                    <MdAccountCircle size='1.5rem'/>
                    <Text className='linkText'>Perfil</Text>
                  </Link>
                  <Link className='MenuLink' href='/#' onClick={() => alert("Quieres salir de tu cuenta?")}>
                    <MdOutlineLogout size='1.5rem'/>
                    <Text className='linkText'>Salir</Text>
                  </Link>
                </Box>
              </DrawerBody>
              </DrawerContent>
        </Drawer>
        </Box>
      </>
    );
  }
  

export default SideBar
export { SideBarMovil }