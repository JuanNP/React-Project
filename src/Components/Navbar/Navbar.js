import "./Navbar.css"
import { Box, Flex, Heading, Spacer, HStack, Link } from "@chakra-ui/react"
import { RiBankFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {

  const navigate = useNavigate();

  return (
    <Box className="bar" w="auto">
      <Flex gap='5' ml='auto'>
        <Spacer />
        <Link
          color='white'
          _hover={{ textDecoration: 'none' }}
          onClick={() => navigate('/dashboard')}
        >
          <HStack spacing='1' p='0.3vw'>
              <RiBankFill size='2em'/>
              <Heading size='xl' >Banca Web</Heading>
          </HStack>
        </Link>
        <Spacer />
      </Flex>
    </Box>
  )
}



export default TopBar
