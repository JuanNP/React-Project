import '../../App.css';
import { Box, Container, Stat, Text, StatHelpText, Heading, Button } from '@chakra-ui/react'

function Home() {
  return (
    <Container centerContent>
      <Box maxW='sm' borderRadius='10' borderStyle='solid' borderWidth='1px' borderColor='lightgrey' overflow='hidden' bg='white' pl='20' w='40vw' mt='50px'>
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Stat>
              <Heading
                color='gray.500'
                fontWeight='medium'
                fontSize='1.45rem'
                letterSpacing='wide'
                mt='0'
              >
                Saldo actual
              </Heading>
              <Text
                color='gray.900'
                fontWeight='bold'
                fontSize='3rem'
                letterSpacing='wide'
                fontFamily='roboto'
                m='0'
              >
              $ 1,000,000
              </Text>
              <Text 
                color='gray.500'
                fontWeight='medium'
                fontSize='1.1rem'
                letterSpacing='wide'
              >
                Disponible
              </Text>
              <Button 
                width='200px' 
                height='3vh' 
                borderRadius='20px'
                fontSize='15px'
                fontWeight='bold'
                color='white'
                bg='#00376f'
                p='20px'
                mt='20px'

                _hover={{
                  transform: 'scale(1.05)',
                  transition: '0.3s',
                  bg: '#034F9B',
                  cursor: 'pointer'
                }}

              >
                Transferir
              </Button>
            </Stat>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Home;
