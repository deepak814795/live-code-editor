import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'
import logo from '../components/logo.png'
const Container=styled(AppBar)`
  background: #060606;
  height: 9  vh;
`
const Header = () => {

  return (
    <Container position='static'>
      <Toolbar>
          <img src={logo} style={{width:40}}/>
      </Toolbar>
    </Container>
  )
}
export default Header