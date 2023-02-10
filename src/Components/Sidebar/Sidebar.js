import React from 'react'
import './Sidebar.css'
import { Box, Button, ButtonGroup, Container, Link } from '@chakra-ui/react'
import { RiDashboardLine } from 'react-icons/ri'
import { BiTransfer } from 'react-icons/bi'
import { MdOutlineAttachMoney, MdAccountCircle, MdManageAccounts } from 'react-icons/md'
import { BsCreditCard2BackFill } from 'react-icons/bs'


const SideBar = () => {
    return (
      <Container display='flex' flexDirection='row' minHeight= '95vh' width='15vw' float='inline-start'>
        <Box bg='#00376f' w="100%" p={4} color="white" textAlign='center'>
          <Box display='flex' flexDirection='column' alignItems='baseline' h='100%'>
            <Link className='MenuLink' href='/'> 
              <RiDashboardLine size='1.5rem'/> Dashboard 
            </Link>
            <Link className='MenuLink' href='/'> 
              <BiTransfer size='1.5rem'/> Transferencias 
            </Link>
            <Link className='MenuLink' href='/'> 
              <MdOutlineAttachMoney size='1.7rem'/>  Pagos 
            </Link>
            <Link className='MenuLink' href='/'> 
              <BsCreditCard2BackFill size='1.2rem'/>  Tarjetas 
            </Link>
            <Link className='MenuLink' href='/'> 
            <MdManageAccounts size='1.5rem'/>  Cuentas 
            </Link>
            <Link className='MenuLink' href='/'> 
            <MdAccountCircle size='1.5rem'/>  Perfil 
            </Link>
          </Box>
        </Box>
      </Container>
    )
  }

export default SideBar