import { Container, Row, Col, Button } from 'react-bootstrap'

const Intro = () => {
  return (
    <div className='display'>
      <Container className='text-white d-flex justify-content-center align-items-center' id='intro'>
        <Row>
          <Col className='text-center'>
            <h1 className='card-title'>Welcome  To Movi</h1>
            <h2 className='card-subtitle'>Movie Ratings & Reviews</h2>
            <div className='introButton mt-4'>
              <Button href="#trending">See All Movies</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro