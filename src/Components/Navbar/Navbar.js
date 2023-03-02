import React from "react"
import "./Navbar.css"
import { Box, Flex, Heading, Spacer, HStack, Link } from "@chakra-ui/react"
import { RiBankFill } from 'react-icons/ri'


const TopBar = () => {
  return (
    <Box className="bar" w="auto">
      <Flex maxW={800} mx="auto" gap='5' ml='auto'>
        <Spacer />
        <Link className="link" href='/'>
          <HStack spacing='20' p='0.5vw'>
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
