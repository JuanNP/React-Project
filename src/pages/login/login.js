import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {
  auth,
  registerNewUser,
} from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import AuthProvider from '../../Components/authProvider'
import { Spinner, Text } from '@chakra-ui/react';
import { Grid, Container, Paper, Avatar, Typography , TextField, Button, Box } from '@material-ui/core'
import{makeStyles} from '@material-ui/core/styles'
import { LockOutlined as LockOutlinedIcon} from '@mui/icons-material'
import { FcGoogle } from 'react-icons/fc'
import './styles.css'

/*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
*/
const useStyles = makeStyles(theme=>({
  root:{
    background: 'linear-gradient(90deg, rgba(0,55,111,1) 25%, rgba(0,212,255,1) 100%)',
    backgroundRepeat: 'no-repeat' ,
    backgroundSize: 'cover',
    backgroundPosition: 'center' ,
    height: '100vh'
  },
  container:{
      height: 'fit-content',
      marginTop: theme.spacing(10),
      [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
        marginTop: 0,
        width: '100%',
        height: '100%'
      }
  },
  div:{
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
    avatar:{
    margin: theme.spacing(1),
    backgroundColor: '#00376f'
  },
  form:{
      width: '100%',
      marginTop: theme.spacing(1)
  },
  button:{
    margin: theme.spacing(3,0,2),
    backgroundColor: '#00376f',
    color: '#fff',
    '&:hover':{
      backgroundColor: '#00376f',
      color: '#fff',
      transform: 'scale(1.05)',
      transition: 'all 0.3s ease-in-out'
    }
  },
  Googlebutton:{
    margin: theme.spacing(5,0,10),
    padding: theme.spacing(1.5,0,1.5),
    backgroundColor: '#fff',
    borderColor: '#c8c8c8',
    borderWidth: '1px',
    borderStyle: 'solid',
    color: 'gray',
    '&:hover':{
      backgroundColor: '#fff',
      transform: 'scale(1.05)',
      transition: 'all 0.3s ease-in-out'
    }
  }
}))

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [state, setState] = useState(1);

  async function handleOnClick(){
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        if (res) {
          registerNewUser(res.user);
          console.log(res.user.photoURL);
        }
      } catch (err) {
        console.error(err);
      }
    };
    signInWithGoogle();
  }

  if (state === 4) {
    return (
      <Grid container component ='main' className={classes.root}>
        <Container component={Paper} elevation={5}  maxWidth='xs' className={classes.container}>
          <div className={classes.div}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component='h1' variant='h5'>Sign In</Typography>
            <form className={classes.form}>
              {/* <TextField fullWidth autoFocus color='primary' margin='normal' variant='outlined' label='Introduzca su usuario' name='nombre'/>
              <TextField fullWidth type='password' color='primary' margin='normal' variant='outlined' label='Introduzca su contraseña' name='contra'/>
              <Button fullWidth variant='contained' className={classes.button}>
                  Sign In
              </Button> */}
              <Typography component='h3' variant='h6' align='center'>
                <br/>
                Bienvenido a tu Web Bancaria de confianza
                <br/>
                Inicia sesion con tu cuenta de Google!!
              </Typography>
              <Button fullWidth variant='contained' className={classes.Googlebutton} onClick={() => handleOnClick()}>
                  <FcGoogle fontSize={'1.5rem'} />
                  <span style={{marginLeft: '20px'}}>Sign in with google</span>
              </Button>
            </form>
          </div>
        </Container>
      </Grid>
    )
  }

  return (
    <AuthProvider 
      onUserLoggedIn={() => {
        navigate("/dashboard");
      }}
      onUserNotLoggedIn={() => {
        setState(4);
      }}
    >
      <Container className='spinner-container' centerContent maxW='container' p={4} h='100vh'>
        <Box>
          <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
        </Box>
      </Container>
    </AuthProvider>
  );

}

export default Login