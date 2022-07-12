import { Navbar, Container, Nav } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Movi</Navbar.Brand>
          <Nav>
            <Nav.Link href='#boxOffice'>Box Office</Nav.Link>
            <Nav.Link href='#tvMovies'>TV Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar