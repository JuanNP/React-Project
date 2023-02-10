import React from "react"
import { Box, Button, ButtonGroup, Flex, Heading, Spacer, HStack, Container } from "@chakra-ui/react"
import { RiBankFill } from 'react-icons/ri'


const TopBar = () => {
  return (
    <Box bg='#00376f' w="auto" p={4} color="white">
      <Flex maxW={800} mx="auto" gap='3'>
        <Spacer />
        <HStack spacing='20' p='0.5vw'>
          <RiBankFill size='3em'/>
          <Heading size='xl' >Banca Web</Heading>
        </HStack>
        <Spacer />
      </Flex>
    </Box>
  )
}



export default TopBar
