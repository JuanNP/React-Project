import React, { useState } from 'react'
import './Sidebar.css'
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, IconButton, useDisclosure, Box, Container, Link, Hide, Text, Spacer } from "@chakra-ui/react"
import { MdOutlineAttachMoney, MdAccountCircle, MdOutlineLogout, MdSpaceDashboard } from 'react-icons/md'
import { BiTransferAlt } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaUserFriends } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useMediaQuery,
} from '@chakra-ui/react'


export const ResponseSideBar = () => {
  const [isMobile] = useMediaQuery("(max-width: 760px)");
  const [showText, setShowText] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setShowText(true);
  };

  const handleMouseOut = () => {
    setShowText(false);
  };

  const handleload = () => {
    onClose();
    navigate('/login')
  }

  const handleResponsiveLogout = ( ) => {
    onOpen();
    console.log('show me the modal');
  }

  return (
    <>
    { isMobile ? 
      <SideBarMovil 
        showText={showText}
        navigate={navigate}
        onLogout={handleResponsiveLogout}
      />:
      <BaseSideBar 
      showText={showText}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      navigate={navigate}
      handleMouseOver={handleMouseOver}
      handleMouseOut={handleMouseOut}
      />
    }

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Seguro que quieres salir?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              No te vayas!! :(
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' onClick={handleload}>
                Aceptar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
  )
}

const BaseSideBar = ({ showText, onOpen, navigate, handleMouseOver, handleMouseOut }) => {
    return (
      <React.Fragment>
        <Container className='sidebar' display='flex' flexDirection='row' width='auto' float='inline-start' position='absolute' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Box display='flex' flexDirection='column' h='100%'>
              <Link className='MenuLink' onClick={() => navigate('/dashboard')}> 
                <MdSpaceDashboard/>
                {showText && <Text className='linkText'>Dashboard</Text>}
              </Link>
              <Link className='MenuLink' onClick={() => navigate('/transferencias') }> 
                <BiTransferAlt/>
                {showText && <Text className='linkText'>Transferencias</Text>}
              </Link>
              <Link className='MenuLink' onClick={() => navigate('/pagos')}>
                <MdOutlineAttachMoney/>
                {showText && <Text className='linkText'>Pagos</Text>}
              </Link>
              <Link className='MenuLink' onClick={() => navigate('/beneficiarios')}> 
                <FaUserFriends/>
                {showText && <Text className='linkText'>Beneficiarios</Text>}
              </Link>
              <Link className='MenuLink'onClick={() => navigate('/perfil')}>
                <MdAccountCircle/>
                {showText && <Text className='linkText'>Perfil</Text>}
              </Link>
              <Spacer />
              <Link className='MenuLink' onClick={onOpen}>
                <MdOutlineLogout/>
                {showText && <Text className='linkText'>Salir</Text>}
              </Link>
            </Box>
        </Container>
      </React.Fragment>
    )
  }

  const SideBarMovil = ({  navigate, onLogout }) => {
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
                  <Link className='MenuLink' onClick={() => navigate('/dashboard')}>
                    <MdSpaceDashboard/>
                    <Text className='linkText'>Dashboard</Text>
                  </Link>
                  <Link className='MenuLink' onClick={() => navigate('/transferencias')}>
                    <BiTransferAlt/>
                    <Text className='linkText'>Transferencias</Text>
                  </Link>
                  <Link className='MenuLink' onClick={() => navigate('/pagos')}>
                    <MdOutlineAttachMoney/>
                    <Text className='linkText'>Pagos</Text>
                  </Link>
                  <Link className='MenuLink' onClick={() => navigate('/beneficiarios')}>
                    <FaUserFriends/>
                    <Text className='linkText'>Beneficiarios</Text>
                  </Link>
                  <Link className='MenuLink' onClick={() => navigate('/perfil')}>
                    <MdAccountCircle/>
                    <Text className='linkText'>Perfil</Text>
                  </Link>
                  <Link className='MenuLink' onClick={onLogout}>
                    <MdOutlineLogout/>
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