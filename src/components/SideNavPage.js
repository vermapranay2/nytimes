import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import logo from '../../public/logo.png'

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBNav, MDBNavItem, MDBNavLink,
  MDBContainer } from "mdbreact";

function Sidebar() {
  return (
    <MDBCard className="text-center">

      <MDBCardBody >
        <List style={{height:'100vh' }} >

          <ListItem button>
            <img src={logo}></img>
          </ListItem>
          <ListItem button >
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Articles</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Analytics</ListItemText>
          </ListItem>
        </List>
      </MDBCardBody>
    </MDBCard>

  )
}

export default Sidebar