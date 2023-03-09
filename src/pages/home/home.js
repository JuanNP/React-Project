import { Box, Container, Stat, Text, Heading, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate = useNavigate();

  return (
    <>
    <Container centerContent>
      <Box borderRadius='10' borderStyle='solid' borderWidth='1px' borderColor='lightgrey' overflow='hidden' bg='white' w='100%' mt='100px'>
        <Box p='6'>
          <Box>
            <Stat>
              <Heading
                color='gray.700'
                fontWeight='medium'
                fontSize='1.45rem'
                m='2'
              >
                Saldo actual
              </Heading>
              <Text
                color='gray.900'
                fontWeight='bold'
                fontSize='3rem'
                fontFamily='roboto'
                m='0'
                whiteSpace='break-spaces'
              >
              $1,000
              </Text>
              <Text 
                color='gray.700'
                fontWeight='medium'
                fontSize='1.1rem'
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
                onClick={() => navigate('/transferencias')}

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
    </>
  )
}