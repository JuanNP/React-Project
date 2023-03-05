import React, { useState } from 'react'
import './Sidebar.css'
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, IconButton, useDisclosure, Box, Container, Link, Hide, Text, Spacer } from "@chakra-ui/react"
import { MdOutlineAttachMoney, MdAccountCircle, MdManageAccounts, MdOutlineLogout } from 'react-icons/md'
import { RiDashboardLine } from 'react-icons/ri'
import { BiTransfer } from 'react-icons/bi'
import { BsCreditCard2BackFill } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'


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
              <RiDashboardLine size='1.5rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Dashboard</Text>}
            </Link>
            <Link className='MenuLink' href='/transferencias'> 
              <BiTransfer size='1.5rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Transferencias</Text>}
            </Link>
            <Link className='MenuLink' href='/'>
              <MdOutlineAttachMoney size='1.7rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Pagos</Text>}
            </Link>
            <Link className='MenuLink' href='/'>
              <BsCreditCard2BackFill size='1.2rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Tarjetas</Text>}
            </Link>
            <Link className='MenuLink' href='/'> 
              <MdManageAccounts size='1.5rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Cuentas</Text>}
            </Link>
            <Link className='MenuLink' href='/'>
              <MdAccountCircle size='1.5rem'/>
              {showText && <Text className='linkText' fontSize='1rem'>Perfil</Text>}
            </Link>
            <Spacer />
            <Link className='MenuLink' href='/#'>
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
          top='5'
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
                <Box display='flex' flexDirection='column' alignItems='baseline' h='100%'>
                  <Link className='MenuLink' href='/'> 
                    <RiDashboardLine size='1.5rem'/>
                    <Text className='linkText' fontSize='1.2rem' fontWeight='bold' color='black'>Dashboard</Text>
                  </Link>
                  <Link className='MenuLink' href='/'> 
                    <BiTransfer size='1.5rem'/>
                    <Text className='linkText' fontSize='1.2rem'>Transferencias</Text>
                  </Link>
                  <Link className='MenuLink' href='/'> 
                    <MdOutlineAttachMoney size='1.7rem'/>
                    <Text className='linkText' fontSize='1.2rem'>Pagos</Text>
                  </Link>
                  <Link className='MenuLink' href='/'> 
                    <BsCreditCard2BackFill size='1.2rem'/>
                    <Text className='linkText' fontSize='1.2rem'>Tarjetas</Text>
                  </Link>
                  <Link className='MenuLink' href='/'> 
                    <MdManageAccounts size='1.5rem'/>
                    <Text className='linkText' fontSize='1.2rem'>Cuentas</Text>
                  </Link>
                  <Link className='MenuLink' href='/'> 
                    <MdAccountCircle size='1.5rem'/>
                    <Text className='linkText' fontSize='1.2rem'>Perfil</Text>
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