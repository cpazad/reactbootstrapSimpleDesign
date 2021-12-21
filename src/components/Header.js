import React, { Fragment } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';



function Header() {
    
  
    
    return (
        <Fragment>
             <Navbar bg='dark' variant='dark'>
                <Container >
                    <Navbar.Brand href='#Home'><img
                     src='../logo192.png'
                     alt='Logo of React'
                     width="45px"
                     height='45px'
                     /> FreedomByte </Navbar.Brand>
                     <NavbarToggle aria-controls='navbarScroll' />
                     <NavbarCollapse id='navbarScroll'>
                         <Nav
                         className='me-auto my-2 my-lg-0'
                         style={{maxHeight:'100px'}} navbarScroll
                         >
                             <NavLink href='#Home'> Home </NavLink>
                             <NavLink href='#Home'> Link </NavLink>
                             <NavLink href='#Home'> Link </NavLink>
                             <NavLink href='#Home'> Link </NavLink>
                             <NavDropdown>
                                 <NavDropdown.Item href='#Home'> Action 1 </NavDropdown.Item>
                                 <NavDropdown.Item href='#Home'> Action 2 </NavDropdown.Item>
                                 <NavDropdown.Item href='#Home'> Action 3 </NavDropdown.Item>
                                 <NavDropdown.Divider/>
                                 <NavDropdown.Item href='#Home'> Action 4 </NavDropdown.Item>
                             </NavDropdown>
                             <NavLink href='#' disabled> Disableed Link </NavLink>
                         </Nav>
                         <Form className='d-flex'>
                             <FormControl 
                             type='search'
                             placeholder='Search'
                             className='me-2'
                             aria-label='Search'
                             ></FormControl>
                             <Button variant='outline-secondary'> Search </Button>
                         </Form>
                         
                         </NavbarCollapse> 
                </Container>
            </Navbar> 
        </Fragment>
    )
}

export default Header;
