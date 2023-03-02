import React from 'react'
import { Grid, Container, Paper, Avatar, Typography , TextField, Button} from '@material-ui/core'
import{makeStyles} from '@material-ui/core/styles'
import fondo from '../../assets/images/fondo.jpg'
import { LockOutlined as LockOutlinedIcon} from '@mui/icons-material'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme=>({
  root:{
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: 'no-repeat' ,
    backgroundSize: 'cover',
    backgroundPosition: 'center' ,
    height: '100vh'
  },
  container:{
     height: '60%',
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
    backgroundColor: theme.palette.primary.main
  },
  form:{
      width: '100%',
      marginTop: theme.spacing(1)
  },
  button:{
    margin: theme.spacing(3,0,2)
  }
}))

const Login = () => {
  const classes = useStyles()

  return (
    <Grid container component ='main' className={classes.root}>
      <Container component={Paper} elevation={5}  maxWidth='xs' className={classes.container}>
        <div className={classes.div}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component='h1' variant='h5'>Sign In</Typography>
          <form className={classes.form}>
            <TextField fullWidth autoFocus color='primary' margin='normal' variant='outlined' label='introduzca su usuario' name='nombre'/>
            <TextField fullWidth type='password' color='primary' margin='normal' variant='outlined' label='introduzca su contraseña' name='contra'/>
            <Link to='/home'>
              <Button fullWidth variant='contained' color='primary' className={classes.button}>
                  Sign In
              </Button>
            </Link>
          </form>
        </div>
      </Container>
    </Grid>
  )
}

export default Login