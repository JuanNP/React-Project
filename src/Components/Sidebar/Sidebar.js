import React from 'react'
import './Sidebar.css'
import { Box, Container, Link, Hide, Text } from '@chakra-ui/react'
import { RiDashboardLine } from 'react-icons/ri'
import { BiTransfer } from 'react-icons/bi'
import { MdOutlineAttachMoney, MdAccountCircle, MdManageAccounts } from 'react-icons/md'
import { BsCreditCard2BackFill } from 'react-icons/bs'
import { useDisclosure } from "@chakra-ui/react"
import { RxHamburgerMenu } from 'react-icons/rx'
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, IconButton } from "@chakra-ui/react"


const SideBar = () => {
    return (
      <Container className='sidebar' display='flex' flexDirection='row' minHeight= '95vh' width='auto' float='inline-start'>
        <Box bg='white' w="100%" p={4} textAlign='center'>
          <Box display='flex' flexDirection='column' alignItems='baseline' h='100%'>
            <Link className='MenuLink' href='/'> 
              <RiDashboardLine size='1.5rem'/>
            </Link>
            <Link className='MenuLink' href='/'> 
              <BiTransfer size='1.5rem'/>
            </Link>
            <Link className='MenuLink' href='/'> 
              <MdOutlineAttachMoney size='1.7rem'/>
            </Link>
            <Link className='MenuLink' href='/'> 
              <BsCreditCard2BackFill size='1.2rem'/>
            </Link>
            <Link className='MenuLink' href='/'> 
              <MdManageAccounts size='1.5rem'/>
            </Link>
            <Link className='MenuLink' href='/'> 
              <MdAccountCircle size='1.5rem'/>
            </Link>
          </Box>
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